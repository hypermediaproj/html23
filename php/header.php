<?php
$desc = '<div class="logo">
    <a href="index.html">
        <img src="images/utils/logo.png" alt="logo" title="logo" class="logo_image" />
    </a>
    <h1><a href="index.html" style="color: #FFFFFF;">Techno Gym</a></h1>
</div>
<div class="login_section"><a href="login.html" style="color: #FFFFFF;">Login</a> | <a href="registrati.html" style="color: #FFFFFF;">Registrati</a></div>
<div class="menu">
    <ul id="main_menu">
        <li id="1"><a href="index.html">Home</a></li>
        <li id="2"><a href="la_nostra_palestra.html">La Nostra Palestra</a></li>
        <li id="3"><a href="lista_corsi.html">Corsi</a></li>
        <li id="4"><a href="lista_categorie.html">Categorie Corsi</a></li>
        <li id="5"><a href="lista_istruttori.html">Istruttori</a></li>
        <li id="6"><a href="lista_stanze.html">Stanze</a></li> 
        <li id="7"><a href="orari.html">Orari</a></li>
        <li id="8"><a href="attrezzature.html">Attrezzature</a></li> 
        <li id="9"><a href="testimonials.html">Testimonials</a></li> 
        <li id="10"><a href="tariffe.html">Tariffe</a></li>
        <li id="11"><a href="come_trovarci.html">Come trovarci</a></li>
    </ul>
</div>';

     $risposta=array(
        "descrizione" => $desc
     );     
     header("Content-Type: application/json");
     echo $_GET['callback']."(".json_encode($risposta).")";
?>