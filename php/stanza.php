<?php
     include_once "util.php";

     $id_stanza=$_GET['id'];
    
    //query dettagli stanza
    $query1 = "SELECT id,id_prev,id_next,nome,descrizione,img_link FROM stanza WHERE id=".$id_stanza." ";
    //query lista corsi tenuti nella stanza
    $query2 = "SELECT id,nome,descrizione,img_link FROM corso WHERE id_stanza=".$id_stanza." ";
     $result=do_query($query1);
     $i=0;
     while ( $row = mysql_fetch_assoc($result) ) {
        $id_stanza[$i]=$row["id"];
        $id_prev_stanza[$i]=$row["id_prev"];
        $id_next_stanza[$i]=$row["id_next"];
        $nome_stanza[$i]=$row["nome"];
        $descrizione_stanza[$i]=utf8_encode($row["descrizione"]);
        $img_link_stanza[$i]=$row["img_link"];
        $i++;
        }
     $result=do_query($query2);
     $i=0;
     while ( $row = mysql_fetch_assoc($result) ) {
        $id_corso[$i]=$row["id"];
        $nome_corso[$i]=$row["nome"];
        $img_link_corso[$i]=$row["img_link"];
        $i++;
        }


     $risposta=array(
        "id_stanza" => $id_stanza,
        "id_prev_stanza" => $id_prev_stanza,
        "id_next_stanza" => $id_next_stanza,
        "nome_stanza" => $nome_stanza,
        "descrizione_stanza" => $descrizione_stanza,
        "img_link_stanza" => $img_link_stanza,
        "id_corso" => $id_corso,
        "nome_corso" => $nome_corso,
        "img_link_corso" => $img_link_corso
     );     
     header("Content-Type: application/json");
     echo $_GET['callback']."(".json_encode($risposta).")";
     ?>