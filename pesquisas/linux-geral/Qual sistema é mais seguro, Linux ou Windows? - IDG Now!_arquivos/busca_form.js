(function() {
    var form = document.getElementById('idgnow-form-top');
    if (form && form.q) {
        var q = form.q;
        var n = navigator;
        var l = location;
        var b = function() {
            if (q.value == '') {
                q.style.background = 'url(http:\x2F\x2Fwww.google.com\x2Fcse\x2Fintl\x2Fpt_BR\x2Fimages\x2Fgoogle_custom_search_watermark.gif) no-repeat scroll left 15px';
            }
        };
        
        var f = function() {
            q.style.background = 'none';
        };
        q.onfocus = f;
        q.onblur = b;
        if (!/[&?]q=[^&]/.test(l.search)) {
            b();
        }
    }


    (function($){
        $(function(){
            $('.boxnewsletter').css('position', 'relative');
            $('.boxnewsletter form').submit(function(e){
                e.preventDefault();

                const form = $(this);
                const field = form.find('.cmp-email');
                const email = field.val();
                $('.boxnewsletter h4').html('Assine a Newsletter. É rápido. É grátis.');
                if(email != "" && /(.+)@(.+){2,}\.(.+){2,}/.test(email)){
                    field.css('background', '');
                    field.css('border-color', '');
                    form.append('<div class="loader" style="position: absolute; top: 0; left: 0; width: 318px; margin:1px; background: #fff;"><p style="text-align: center; font-weight: bold; line-height: 88px;">Enviando...</p></div>')
                    $.post("http://files.computerworld.com.br/newsletter/add-to-idg.php", {
                        email: email
                    }, function(resp){
                        form.find('.loader').remove();
                        if(resp.status){
                            form.append('<div class="loader" style="position: absolute; top: 0; left: 0; width: 318px; margin:1px; background: #fff;"><p style="text-align: center; font-weight: bold; line-height: 88px;">E-mail cadastrado com sucesso.</p></div>');
                        } else {
                            form.append('<div class="loader" style="position: absolute; top: 0; left: 0; width: 318px; margin:1px; background: #fff;"><p style="text-align: center; font-weight: bold; line-height: 88px;">'+resp.message+'</p></div>');
                        }
                    }, 'json');
                } else {
                    $('.boxnewsletter h4').html('Digite um e-mail válido!');
                    field.css('border-color', '#c00 !important');
                }
            });

            $('.blocoFooterNews form').css('position', 'relative');
            $('.blocoFooterNews form').submit(function(e){
                e.preventDefault();

                const form = $(this);
                const field = form.find('.campoFooterNews');
                const email = field.val();
                $('.blocoFooterNews .error').remove();
                if(email != "" && /(.+)@(.+){2,}\.(.+){2,}/.test(email)){
                    field.css('background', '');
                    field.css('border-color', '');
                    form.append('<div class="loader" style="position: absolute; top: 0; left: 0; width: 100%; background: #fff;"><p style="text-align: center; font-weight: bold; line-height: 34px; margin-bottom: 0;">Enviando...</p></div>')
                    $.post("http://files.computerworld.com.br/newsletter/add-to-idg.php", {
                        email: email
                    }, function(resp){
                        form.find('.loader').remove();
                        if(resp.status){
                            form.append('<div class="loader" style="position: absolute; top: 0; left: 0; width: 100%; background: #fff;"><p style="text-align: center; font-weight: bold; line-height: 34px; margin-bottom: 0;">E-mail cadastrado com sucesso.</p></div>');
                        } else {
                            form.append('<div class="loader" style="position: absolute; top: 0; left: 0; width: 100%; background: #fff;"><p style="text-align: center; font-weight: bold; line-height: 34px; margin-bottom: 0;">'+resp.message+'</p></div>');
                        }
                    }, 'json');
                } else {
                    $('.blocoFooterNews').append('<label class="error">Digite um e-mail válido!</label>');
                    field.css('border-color', '#c00 !important');
                }
            });
        });
    })(jQuery);

})();
