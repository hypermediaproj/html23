function getContent () {
    $(document).ready(function(){
          var $_GET = getUrlVars(); //Get parameters
          var send = 'nome_pagina=Come Trovarci';
          
              
        $.ajax({ // ajax call starts
          url: PHP_AJAX_URL + 'pagina.php', // JQuery loads serverside.php
          data: send, // Send value of the clicked button
          dataType: 'jsonp', // Choosing a jsonp datatype
        })
        .done(function(data) { // Variable data contains the data we get from serverside
          $('.content').html(''); // Clear #content div
          //INFO ORIENTATIVE
          $('#tree_info').html('<h1><a href="come_trovarci.html">Come trovarci</a></h1>');
              
              var text = '' + data.descrizione;
              $('.content').append(text)
              
        });
        return false; // keeps the page from not refreshing 
    })
};