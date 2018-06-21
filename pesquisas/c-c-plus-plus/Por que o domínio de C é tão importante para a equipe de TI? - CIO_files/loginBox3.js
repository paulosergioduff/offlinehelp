function loadLoginBox(url,came_from) {
url = "http://cio.com.br";
random = get_random();
nome = readCookie('nome');
if (nome != null){
    html = '<a>Ol&aacute;, '+nome+'!</a>';
    html = html + ' <a rel="nofollow" href="'+url+'/logout?'+random+'">Logout</a> <a rel="nofollow" href="'+url+'/edicao_usuario">Newsletter</a>';
}
else{
    html = '<a rel="nofollow" href="'+url+'/login_form?'+came_from+'">Login</a> <a rel="nofollow" href="'+url+'/cadastro_usuario_form">Registro</a> <a rel="nofollow" href="'+url+'/edicao_usuario">Newsletter</a>';
}
document.getElementById('login').innerHTML = html;
}

function get_random()
{
    var ranNum= Math.random()*5;
    return ranNum;
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return unescape(c.substring(nameEQ.length,c.length).replace(/"/g, ''));
	}
	return null;
}
