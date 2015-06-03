function getContent () {
    $(document).ready(function(){
          var $_GET = getUrlVars(); //Get parameters
          id = $_GET.id;
          $.ajax({ // ajax call starts
          url: PHP_AJAX_URL + 'corso.php', // JQuery loads serverside.php
          data: 'id='+id, // Send value of the clicked button
          dataType: 'jsonp', // Choosing a jsonp datatype
        })
        .done(function(data) { // Variable data contains the data we get from serverside
          $('.content').html(''); // Clear #content div
        
              //INFO ORIENTATIVE
              $('#tree_info').html('<h1><a href="lista_corsi.html">Corsi</a> > ' + data.nome_corso + '</h1>');
              
              var text = '<div class="left_full"><h2>Descrizione</h2><p>'+ data.descrizione_corso +'</p></div><ul class="portfolio_items">';
              
              for(var i = 0; i < data.img_link_corso.length; i++) {
                  text += '<li class="left13 gym" data-id="id-1"><div class="gallery_item"><img class="gallery_foto all_round" src="'+data.img_link_corso[i]+'" style="width:100%;" alt="" title="" border="0"/></div></li>';
              }
              text += '<div class="left_full"><h3>Orari</h3>' + data.orario_corso;
              
              
              text+= '<div style="width:100%; float: left;"><div style="width:200px; float: left; margin-right:20px;"><h3>Istruttori del corso</h3>';
            
              for (var i = 0; i < data.id_istruttore.length; i++) {
                  
              text += '<div class="gallery_item" style="width: 200px; height: 220px; margin: 10px 0 10px 0;"><a class="" href="istruttore.html?id=' + data.id_istruttore[i] + '" title=""><img src="'+data.img_link_istruttore[i]+'" style="width: 100%; height: 180px;" alt="' + data.nome_istruttore[i] + '" title="' + data.nome_istruttore[i] + '" border="0"></a><div class="gallery_caption"><h3 style="padding: 11px;"><a href="istruttore.html?id=' + data.id_istruttore[i] + '" style="color:#000000;">' + data.nome_istruttore[i] + '</a></h3></div></div>';
              }

              text += '</div><div style="width:200px; float: left; margin-right:20px;"><h3>Stanza del corso</h3>';
              for (var i = 0; i < data.id_stanza.length; i++) {
                  
            
                  text += '<div class="gallery_item" style="width: 200px; height: 220px; margin: 10px 0 10px 0;"><a class="" href="stanza.html?id=' + data.id_stanza[i] + '" title=""><img src="'+data.img_link_stanza[i]+'" style="width: 100%; height: 180px;" alt="' + data.nome_stanza[i] + '" title="' + data.nome_stanza[i] + '" border="0"></a><div class="gallery_caption"><h3 style="padding: 11px;"><a href="stanza.html?id=' + data.id_stanza[i] + '" style="color:#000000;">' + data.nome_stanza[i] + '</a></h3></div></div>';
              }
              
              text += '</div><div style="width:200px; float: left; margin-right:20px;"><h3>Categoria del corso</h3>';
              
              for (var i = 0; i < data.id_categoria.length; i++) {
            
                  text += '<div class="gallery_item" style="width: 200px; height: 220px; margin: 10px 0 10px 0;"><a class="" href="categoria.html?id=' + data.id_categoria[i] + '" title=""><img src="'+data.img_link_categoria[i]+'" style="width: 100%; height: 180px;" alt="' + data.nome_categoria[i] + '" title="' + data.nome_categoria[i] + '" border="0"></a><div class="gallery_caption"><h3 style="padding: 11px;"><a href="categoria.html?id=' + data.id_categoria[i] + '" style="color:#000000;">' + data.nome_categoria[i] + '</a></h3></div></div>';
                  
                  
              }

              text += '</div></div>';
              
              
              text += '<div class="clear"></div></div>';
              
              
              
              $('.content').append(text)
              
        });
        return false; // keeps the page from not refreshing 
    })
};




