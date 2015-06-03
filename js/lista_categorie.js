function getContent () {
    $(document).ready(function(){
          var $_GET = getUrlVars(); //Get parameters
          
          var send = '';
              
        $.ajax({ // ajax call starts
          url: PHP_AJAX_URL + 'lista_categorie.php', // JQuery loads serverside.php
          data: send, // Send value of the clicked button
          dataType: 'jsonp', // Choosing a jsonp datatype
        })
        .done(function(data) { // Variable data contains the data we get from serverside
          $('.content').html(''); // Clear #content div
          
          //INFO ORIENTATIVE
          $('#tree_info').html('<h1><a href="lista_categorie.html">Categorie Corsi</a></h1>');
              
              var text = '<div class="left_full">';
            
            for(var i = 0; i < data.id.length; i++) {
                
                text += '<div class="post"><div class="post_left"><a href=categoria.html?id=' + data.id[i] + ' class="post_image"><img src="'+ data.img_link[i] +'" alt="" title="" /></a></div><div class="post_right"><h3><a href=categoria.html?id=' + data.id[i] + '>' + data.nome[i] + '</a></h3>'+ data.descrizione_breve[i] + '<a href=categoria.html?id=' + data.id[i] + ' class="read_more">Continua a leggere</a><a href=lista_corsi.html?ordine=categoria&id_categoria=' + data.id[i] + ' class="read_more" style="margin-right: 15px;">Vai ai suoi corsi</a></div></div>';
                
            }
            
            text += '</div><div class="clear"></div>';
              $('.content').append(text)
              
        });
        return false; // keeps the page from not refreshing 
    })
};