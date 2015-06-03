function getContent () {
    $(document).ready(function(){
          var $_GET = getUrlVars(); //Get parameters
          
          var send = '';
              
        $.ajax({ // ajax call starts
          url: PHP_AJAX_URL + 'lista_stanze.php', // JQuery loads serverside.php
          data: send, // Send value of the clicked button
          dataType: 'jsonp', // Choosing a JSONP datatype
        })
        .done(function(data) { // Variable data contains the data we get from serverside
          $('.inner_content').html(''); // Clear #content div
          
          //INFO ORIENTATIVE
          $('#tree_info').html('<h1><a href="lista_stanze.html">Stanze</a></h1>');
              
              var text = '<ul class="portfolio_items">';
            
            for(var i = 0; i < data.id.length; i++) {
                
                text += '<li class="left13 gym" data-id="id-1"><div class="gallery_item"><a href="stanza.html?id=' + data.id[i] + '" title="Lorem ipsum sit amet"><img class="gallery_foto" style="width: 100%;" src="' + data.img_link[i] + '" alt="" title="" border="0"></a><div class="gallery_caption" style="height: 120px;"><h3>' + data.nome[i] + '</h3>' + data.descrizione_breve[i] + '</div></div></li>';
                
            }
            
            text += '</ul></div><div class="clear"></div>';
              $('.inner_content').append(text)
              
        });
        return false; // keeps the page from not refreshing 
    })
};




   
