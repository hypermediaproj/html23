<?php

define("DEBUG",false);

function db_connection() 
{ 
    // hostname
    $nomehost = "localhost";   
    // utente per la connessione a MySQL  
    $nomeuser = "root";
    // password per l'autenticazione dell'utente 
    $password = "hypermediaproject";

    $link = mysql_connect($nomehost, $nomeuser, $password);
    if (!$link) {
        die ('Non riesco a connettermi: ' . mysql_error());
    }

    $db_selected = mysql_select_db('technogym', $link);
    if (!$db_selected) {
        die ("Errore nella selezione del database: " . mysql_error());
    }
    
    if(DEBUG) {
        echo '<p>connesso con successo</p>';
    }
    
    return $link;
}


function db_close_connection($link) {
    mysql_close($link);
    if(DEBUG) {
        echo '<p>connessione chiusa</p>';
    }
}

function do_query($query) {
    $link = db_connection();
    $result = mysql_query($query) or die("Query non valida: " . mysql_error());
    db_close_connection($link);
    return $result;
}

function print_phpinfo() {
    phpinfo();
}

?>