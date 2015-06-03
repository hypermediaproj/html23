function getContent () {
    $(document).ready(function(){
        var $_GET = getUrlVars(); //Leggi parametri GET
        var send = 'id='+$_GET.id;
        doAjax(send);
    })
}

function print(data) {
      $('.content').html(''); // Clear #content div

      //INFO ORIENTATIVE
      $('#tree_info').html('<h1><a href="lista_stanze.html">Stanze</a> > ' + data.nome_stanza + '</h1>');

        var text = '';
        text += '<div class="left_full left_full_sale post_left"><h2>Descrizione</h2>' + data.descrizione_stanza +'<p><a href="lista_stanze.html">Torna a tutte le stanze</a></p></div><div class="left_full">';
        if(data.id_prev_stanza!=""&&data.id_next_stanza!="")
            text += '<ul class="navigation"><li><a id="prev" href="#" class="blog_prev">Stanza Precedente</a></li><li><a id="next" href="#" class="blog_next">Stanza Successiva</a></li></ul>';
        else{
            if(data.id_prev_stanza=="")
                text += '<ul class="navigation"><li><a href="lista_stanze.html" class="blog_prev">Esci</a></li><li><a id="next" href="#" class="blog_next">Stanza Successiva</a></li></ul>';
            else
                text += '<ul class="navigation"><li><a id="prev" href="#" class="blog_prev">Stanza Precedente</a></li><li><a href="lista_stanze.html" class="blog_next">Esci</a></li></ul>';
        }

        for (var i = 0; i < data.img_link_stanza.length; i++) {
          text += '<img src="' + data.img_link_stanza[i] + '" style="width: 60%;margin: 30px 20% 0 20%;">';
          }

        text+= '</div><div class="left_full"><table border="0" width="50%" class="left_content"><tbody><tr><td><h3>Corsi tenuti in questa stanza</h3>';

          text += '<ul>';
          for (var i = 0; i < data.id_corso.length; i++) {
          text += '<li><strong><a href="corso.html?id=' + data.id_corso[i] +'">' + data.nome_corso[i] +'</a></strong></li>';
          }

          text += '</td></tr></tbody></table>';

        text += '</div><div class="clear"></div>';
          $('.content').append(text);
          
          $( "#prev" ).click(function() { doAjax("id=" + data.id_prev_stanza); });
          $( "#next" ).click(function() { doAjax("id=" + data.id_next_stanza); });
    }



//-----ESEGUE LA CHIAMATA ALLA PAGINA PHP-----
function doAjax(send) {
    //alert("send:" + send);
    var result ='';
    $.ajax({ // ajax call starts
            url: PHP_AJAX_URL + 'stanza.php', // JQuery loads serverside.php
            data: send, // Send value of the clicked button
            dataType: 'jsonp', // Choosing a JSONP datatype
            })
            .done(function(data) {
                result = data;
                print(data);
            });

        return false; // keeps the page from not refreshing 
}