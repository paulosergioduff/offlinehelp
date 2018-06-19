;(function(root,factory){if(typeof define==='function'&&define.amd){define([],function(){return(root.VimeoUpload=factory())})}else if(typeof module==='object'&&module.exports){module.exports=factory()}else{root.VimeoUpload=factory()}}(this,function(){var RetryHandler=function(){this.interval=1000
this.maxInterval=60*1000;}
RetryHandler.prototype.retry=function(fn){setTimeout(fn,this.interval)
this.interval=this.nextInterval_()}
RetryHandler.prototype.reset=function(){this.interval=1000}
RetryHandler.prototype.nextInterval_=function(){var interval=this.interval*2+this.getRandomInt_(0,1000)
return Math.min(interval,this.maxInterval)}
RetryHandler.prototype.getRandomInt_=function(min,max){return Math.floor(Math.random()*(max-min+1)+min)}
var defaults={api_url:'https://api.vimeo.com',name:'Default name',description:'Default description',contentType:'application/octet-stream',token:null,file:{},metadata:[],upgrade_to_1080:false,offset:0,chunkSize:0,retryHandler:new RetryHandler(),onComplete:function(){},onProgress:function(){},onError:function(){}}
var me=function(opts){for(var i in defaults){this[i]=(opts[i]!==undefined)?opts[i]:defaults[i]}this.contentType=opts.contentType||this.file.type||defaults.contentType
this.httpMethod=opts.fileId?'PUT':'POST'
this.embedDomain=opts.embedDomain
this.videoData={name:(opts.name>'')?opts.name:defaults.name,description:(opts.description>'')?opts.description:defaults.description,'privacy.view':opts.private?'disable':'anybody','privacy.embed':opts.private?'whitelist':'public'}
if(!(this.url=opts.url)){var params=opts.params||{}
this.url=this.buildUrl_(opts.fileId,params,opts.baseUrl)}}
me.prototype.defaults=function(opts){return defaults}
me.prototype.upload=function(){var xhr=new XMLHttpRequest()
xhr.open(this.httpMethod,this.url,true)
xhr.setRequestHeader('Authorization','Bearer '+this.token)
xhr.setRequestHeader('Content-Type','application/json')
xhr.onload=function(e){if(e.target.status<400){var response=JSON.parse(e.target.responseText)
this.url=response.upload_link_secure
this.user=response.user
this.ticket_id=response.ticket_id
this.complete_url=defaults.api_url+response.complete_uri
this.sendFile_()}else{this.onUploadError_(e)}}.bind(this)
xhr.onerror=this.onUploadError_.bind(this)
xhr.send(JSON.stringify({type:'streaming',upgrade_to_1080:this.upgrade_to_1080}))}
me.prototype.sendFile_=function(){var content=this.file
var end=this.file.size
if(this.offset||this.chunkSize){if(this.chunkSize){end=Math.min(this.offset+this.chunkSize,this.file.size)}content=content.slice(this.offset,end)}var xhr=new XMLHttpRequest()
xhr.open('PUT',this.url,true)
xhr.setRequestHeader('Content-Type',this.contentType)
xhr.setRequestHeader('Content-Range','bytes '+this.offset+'-'+(end-1)+'/'+this.file.size)
if(xhr.upload){xhr.upload.addEventListener('progress',this.onProgress)}xhr.onload=this.onContentUploadSuccess_.bind(this)
xhr.onerror=this.onContentUploadError_.bind(this)
xhr.send(content)}
me.prototype.resume_=function(){var xhr=new XMLHttpRequest()
xhr.open('PUT',this.url,true)
xhr.setRequestHeader('Content-Range','bytes */'+this.file.size)
xhr.setRequestHeader('X-Upload-Content-Type',this.file.type)
if(xhr.upload){xhr.upload.addEventListener('progress',this.onProgress)}xhr.onload=this.onContentUploadSuccess_.bind(this)
xhr.onerror=this.onContentUploadError_.bind(this)
xhr.send()}
me.prototype.extractRange_=function(xhr){var range=xhr.getResponseHeader('Range')
if(range){this.offset=parseInt(range.match(/\d+/g).pop(),10)+1}}
me.prototype.complete_=function(xhr){var xhr=new XMLHttpRequest()
xhr.open('DELETE',this.complete_url,true)
xhr.setRequestHeader('Authorization','Bearer '+this.token)
xhr.onload=function(e){if(e.target.status<400){var location=e.target.getResponseHeader('Location')
var video_id=location.split('/').pop()
this.onUpdateVideoData_(video_id)}else{this.onCompleteError_(e)}}.bind(this)
xhr.onerror=this.onCompleteError_.bind(this)
xhr.send()}
me.prototype.onUpdateVideoData_=function(video_id){var url=this.buildUrl_(video_id,[],defaults.api_url+'/videos/')
var httpMethod='PATCH'
var xhr=new XMLHttpRequest()
xhr.open(httpMethod,url,true)
xhr.setRequestHeader('Authorization','Bearer '+this.token)
xhr.onload=function(e){if(this.embedDomain){var url='https://api.vimeo.com/videos/'+video_id+'/privacy/domains/'+this.embedDomain
var httpMethod='PUT'
var xhr=new XMLHttpRequest()
xhr.open(httpMethod,url,true)
xhr.setRequestHeader('Authorization','Bearer '+this.token)
xhr.send()}this.onGetMetadata_(e,video_id)}.bind(this)
console.log(this.videoData,'Video Data');xhr.send(this.buildQuery_(this.videoData))}
me.prototype.onGetMetadata_=function(e,video_id){if(e.target.status<400){if(e.target.response){var meta=JSON.parse(e.target.response)
var index=this.metadata.push(meta)-1
this.onComplete(video_id,index)}else{this.onCompleteError_(e)}}}
me.prototype.onContentUploadSuccess_=function(e){if(e.target.status==200||e.target.status==201){this.complete_()}else if(e.target.status==308){this.extractRange_(e.target)
this.retryHandler.reset()
this.sendFile_()}}
me.prototype.onContentUploadError_=function(e){if(e.target.status&&e.target.status<500){this.onError(e.target.response)}else{this.retryHandler.retry(this.resume_())}}
me.prototype.onCompleteError_=function(e){this.onError(e.target.response);}
me.prototype.onUploadError_=function(e){this.onError(e.target.response);}
me.prototype.buildQuery_=function(params){params=params||{}
return Object.keys(params).map(function(key){return encodeURIComponent(key)+'='+encodeURIComponent(params[key])}).join('&')}
me.prototype.buildUrl_=function(id,params,baseUrl){var url=baseUrl||defaults.api_url+'/me/videos'
if(id){url+=id}var query=this.buildQuery_(params)
if(query){url+='?'+query}return url}
return me}))