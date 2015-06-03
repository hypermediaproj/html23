function getContent () {
    $(document).ready(function(){
        var $_GET = getUrlVars(); //Leggi parametri GET
        var ordine = getOrder($_GET.ordine); //Default alfabeto, altrimenti quello settato
        var send = getPhpParameters($_GET,ordine); //Parametri da inviare alla pagina PHP
        doAjax(send,ordine);
        
    })
};

//-----OTTIENI L'ORDINE DESIDERATO-----
function getOrder(order) {
    if(order != undefined) {
        return order;
    }
    return 'alfabetico';
}

//-----OTTIENI I PARAMETRI DA MANDARE ALLA PAGINA PHP-----
function getPhpParameters($_GET, order) {
    var PhpParameters = '';
    if(order == 'alfabetico') {
        PhpParameters = 'ordine=' + order;
    }
    if(order == 'livello') {
        PhpParameters = 'ordine=' + order;
    }
    if(order == 'categoria') { 
        if($_GET.id_categoria != undefined) {
            PhpParameters = 'ordine=' + order + '&id_categoria=' + $_GET.id_categoria;
        }
        else {
            PhpParameters = 'ordine=' + order;
        }
    }
    return PhpParameters;
}

//-----ESEGUE LA CHIAMATA ALLA PAGINA PHP-----
function doAjax(send,ordine) {
    //alert("doAJAX");
    var result ='';
    $.ajax({ // ajax call starts
            url: PHP_AJAX_URL + 'lista_corsi.php', // JQuery loads serverside.php
            data: send, // Send value of the clicked button
            dataType: 'jsonp', // Choosing a JSONP datatype
            })
            .done(function(data) {
                result = data;
                print(result,ordine);
               
            });

        return false; // keeps the page from not refreshing 
}

//-----APPEND DATA-----
function print(data,ordine) {
    $('.inner_content').html(''); // Clear inner_content
    if(ordine == 'alfabetico') {
        ordineAlfabetico(data);
    }
    //ORDINE PER CATEGORIA
    if(ordine == 'categoria') {
        ordineCategoria(data);
    }

    //ORDINE PER LIVELLO
    if(ordine == 'livello') {
        ordineLivello(data);
    }
    
}

//-----AGGIORNA TREE INFO-----
function updateTreeInfo(str) {
    $('#tree_info').html(str);
}


//-----MENU SELECT-----
function menuSelect(index,nSelect) {
    for(var i = 1; i <= nSelect; i++) {
        //alert('#select' + i);
        $('#select' + i).removeClass("selected");
    }
    $('#select' + index).addClass("selected");
}



//-----ORDINE ALFABETICO-----
function ordineAlfabetico(data) {
    var text = "";
    menuSelect(1,3);
    //INFO ORIENTATIVE
    updateTreeInfo('<h1><a href="lista_corsi.html">Corsi</a> > In ordine alfabetico</h1>');

    var letteraIniziale;
    var letteraPrecedente;

    letteraPrecedente = "";
    for(var i = 0; i < data.id_corso.length; i++) {
        letteraIniziale = data.nome_corso[i].split("")[0].toLocaleLowerCase();
        if(letteraIniziale != letteraPrecedente) {
            text += '</ul><h2>'+ letteraIniziale.toUpperCase() +'</h2><ul>';
            letteraPrecedente = letteraIniziale;
        }
        text += '<li><strong><a href="corso.html?id='+ data.id_corso[i] +'">' + data.nome_corso[i] + '</a> - Categoria: <a href="categoria.html?id='+ data.id_categoria[i] +'">'+ data.nome_categoria[i] +'</a> - Difficolt&aacute;: ' + data.livello_corso[i] + '</strong></li>' + data.descrizione_breve_corso[i];
    }
    text += '</ul></div>';
    //alert(text);
    $('.inner_content').append(text);
}
//-----ORDINE CATEGORIA-----
function ordineCategoria(data) {
    var text = "";
    menuSelect(2,3);
    //INFO ORIENTATIVE
    updateTreeInfo('<h1><a href="lista_corsi.html">Corsi</a> > Ordinati per categoria</h1>');
    var categoriaIniziale;
    var categoriaPrecedente;

    categoriaPrecedente = "";
    for(var i = 0; i < data.id_corso.length; i++) {
        categoriaIniziale = data.nome_categoria[i].toLocaleLowerCase();
        if(categoriaIniziale != categoriaPrecedente) {
            text += '</ul><h2>'+ categoriaIniziale.toUpperCase() +'</h2><ul>';
            categoriaPrecedente = categoriaIniziale;
        }
        text += '<li><strong><a href="corso.html?id='+ data.id_corso[i] +'">' + data.nome_corso[i] + '</a> - Categoria: <a href="categoria.html?id='+ data.id_categoria[i] +'">'+ data.nome_categoria[i] +'</a> - Difficolt&aacute;: ' + data.livello_corso[i] + '</strong></li>' + data.descrizione_breve_corso[i];
    }
    text += '</ul></div>';   
    $('.inner_content').append(text);
}
//-----ORDINE LIVELLO-----
function ordineLivello(data) {
    var text = "";
    menuSelect(3,3);
    //INFO ORIENTATIVE
    updateTreeInfo('<h1><a href="lista_corsi.html">Corsi</a> > Ordinati per livello</h1>');
    var livelloIniziale;
    var livelloPrecedente;

    livelloPrecedente = "";
    for(var i = 0; i < data.id_corso.length; i++) {
        livelloIniziale = data.livello_corso[i].toLocaleLowerCase();
        if(livelloIniziale != livelloPrecedente) {
            text += '</ul><h2>DIFFICOLT&Agrave; '+ livelloIniziale.toUpperCase() +'</h2><ul>';
            livelloPrecedente = livelloIniziale;
        }
        text += '<li><strong><a href="corso.html?id='+ data.id_corso[i] +'">' + data.nome_corso[i] + '</a> - Categoria: <a href="categoria.html?id='+ data.id_categoria[i] +'">'+ data.nome_categoria[i] +'</a></strong></li>' + data.descrizione_breve_corso[i];
    }
    $('.inner_content').append(text);
}