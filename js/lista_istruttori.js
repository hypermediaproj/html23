function getContent () {
    $(document).ready(function(){
          var $_GET = getUrlVars(); //Get parameters
          $.ajax({ // ajax call starts
          url: PHP_AJAX_URL + 'lista_istruttori.php', // JQuery loads serverside.php
          data: '', // Send value of the clicked button
          dataType: 'jsonp', // Choosing a JSONP datatype
        })
        .done(function(data) { // Variable data contains the data we get from serverside
          $('.inner_content').html(''); // Clear #content div
          //INFO ORIENTATIVE
          $('#tree_info').html('<h1><a href="lista_istruttori.html">Istruttori</a></h1>');

              var text = '<div class="clear"></div>';
              for(var i = 0; i < data.id.length; i++) {
                  text += '<div class="left13"><div class="gallery_item"><a class="istruttore" href="istruttore.html?id=' + data.id[i] + '" title=""><img src="'+ data.img_link[i]+ '" style="width: 100%;" alt="'+ data.nome[i] +'" title="'+ data.nome[i] +'" border="0" /></a><div class="gallery_caption"><h3><a href="istruttore.html?id='+ data.id[i] +'" style="color:#000000;">'+ data.nome[i] +'</a></h3><br /><div class="socials_page"><ul><li><a href="http://www.facebook.com/'+ data.facebook[i] +'"><img src="images/utils/facebook.png" alt="" title="" border="0"/></a></li><li><a href="http://www.twitter.com/'+ data.twitter[i] +'"><img src="images/utils/twitter.png" border="0"/></a></li></ul></div></div></div></div>';

              }
              text += '<div class="clear"></div>';
              $('.inner_content').append(text)
        });
        return false; // keeps the page from not refreshing 
    })
};