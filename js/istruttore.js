function getContent () {
    $(document).ready(function(){
          var $_GET = getUrlVars(); //Get parameters
          send = 'id=' + $_GET.id;
              
        $.ajax({ // ajax call starts
          url: PHP_AJAX_URL + 'istruttore.php', // JQuery loads serverside.php
          data: send, // Send value of the clicked button
          dataType: 'jsonp', // Choosing a jsonp datatype
        })
        .done(function(data) { // Variable data contains the data we get from serverside
          $('.inner_content').html(''); // Clear #content div
          //INFO ORIENTATIVE
          $('#tree_info').html('<h1><a href="lista_istruttori.html">Istruttori</a> > ' + data.nome_istruttore + '</h1>');
        
              
              var text = '<div class="left_full"><div class="post"><div class="post_left"><img style="width:285px; height:285px;" src="' + data.img_link_istruttore + '" alt="' + data.nome_istruttore + '" title="' + data.nome_istruttore + '" /></div><div class="post_right"><h3>' + data.nome_istruttore + '</h3>' + data.descrizione_istruttore + '<div style="margin:10px; width:100%; float:left;"><a style="float:left; margin-right:5px;" href="http://www.facebook.com/'+ data.facebook_istruttore.facebook +'"><img src="images/utils/facebook2.png" alt="" title="" border="0"/></a><a style="float:left;" href="http://www.twitter.com/'+ data.twitter_istruttore.twitter +'"><img src="images/utils/twitter2.png" border="0"/></a></div><table border="0" width="100%" class="left_content"><tbody><tr><td><h3>Corsi tenuti</h3>';
            
            
            text += '<ul>';
            for (var i = 0; i < data.id_corso.length; i++) {
            text += '<li style="width:100%;"><strong><a href="corso.html?id=' + data.id_corso[i] +'">' + data.nome_corso[i] +'</a></strong></li>';
            }
            text += '</ul></td>';
            
            
            text += '<td><h3>Categorie insegnate</h3><ul>';
            for (var i = 0; i < data.id_categoria.length; i++) {
            text += '<li><strong><a href="categoria.html?id=' + data.id_categoria[i] +'">' + data.nome_categoria[i] +'</a></strong></li>';
            }
            text += '</ul>';
            
            text += '</td></tr></tbody></table></div></div></div><div class="left_full left_content"><p><a href="lista_istruttori.html">Torna a tutti gli istruttori</a>: torna alla lista in ordine alfabetico.<br /><br /></p><h3>Segui la pagina facebook di ' + data.nome_istruttore + '</h3></div><div class="clear"></div></div><div class="clear"></div><div class="post"><div id="wrap_facebook_wall"><ul id="facebook_wall"></ul></div></div>';
            
            var text_prova ='<div id="wrap_facebook_wall"><ul id="facebook_wall"></ul></div>';//by simo per test
              $('.inner_content').append(text);
              
              $('#facebook_wall').facebook_wall({
                 id: data.facebook_istruttore.facebook,
                 access_token: '1436130840040247|8XrR1xIebMW4yLsu01QRYO7Wz7k',
                 limit: 10
                 });
              
        });
        return false; // keeps the page from not refreshing 
    })
};


