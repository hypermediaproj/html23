function getContent () {
    $(document).ready(function(){
          var $_GET = getUrlVars(); //Get parameters
          id = $_GET.id;
          $.ajax({ // ajax call starts
          url: PHP_AJAX_URL + 'categoria.php', // JQuery loads serverside.php
          data: 'id='+id, // Send value of the clicked button
          dataType: 'jsonp', // Choosing a jsonp datatype
        })
        .done(function(data) { // Variable data contains the data we get from serverside
          $('.content').html(''); // Clear #content div
        
              //INFO ORIENTATIVE
              $('#tree_info').html('<h1><a href="lista_categorie.html">Categorie Corsi</a> > ' + data.nome_categoria + '</h1>');
              
              var text = '<div class="left_full"><h2>Descrizione</h2><p>'+ data.descrizione_categoria +'</p></div>';
              
               text += '<ul class="portfolio_items">';
              for (var i = 0; i < data.img_link_categoria.length; i++) {
                text += '<li class="left13 gym" data-id="id-1"><div class="gallery_item"><img class="gallery_foto all_round" src="' + data.img_link_categoria[i] + '" border="0"></div></li>';
                }
              text += '</ul>';
              
            text+= '<div class="left_full"><table border="0" width="60%" class="left_content"><tbody><tr><td><h3>Istruttori che insegnano corsi di ' + data.nome_categoria + '</h3>';
            
            text += '<ul>';
            for (var i = 0; i < data.id_istruttore.length; i++) {
            text += '<li><strong><a href="istruttore.html?id=' + data.id_istruttore[i] +'">' + data.nome_istruttore[i] +'</a></strong></li>';
            }
            text += '</ul></td><td><h3>Corsi della categoria ' + data.nome_categoria + '</h3>';

            text += '<ul>';
            for (var i = 0; i < data.id_corso.length; i++) {
            text += '<li><strong><a href="corso.html?id=' + data.id_corso[i] +'">' + data.nome_corso[i] +'</a></strong></li>';
            }
            text += '</ul>';

            text += '</td></tr></tbody></table></div><div class="clear"></div></div>';
              
              
              $('.content').append(text)
              
        });
        return false; // keeps the page from not refreshing 
    })
};

