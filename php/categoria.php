<?php
     include_once "util.php";
     
    $id_categoria=$_GET['id'];


    //query dati categoria
    $query1 = "SELECT id,nome,descrizione FROM categoria WHERE id=".$id_categoria." ";
    //query immagini categoria
    $query2 = "SELECT img_link FROM immagini_categoria WHERE id_categoria=".$id_categoria." ";
    //query corsi di una categoria
    $query3 = "SELECT id,nome,img_link FROM corso WHERE id_categoria=".$id_categoria." ";
    //query istruttori di una categoria
    $query4 = "SELECT id,nome,img_link FROM istruttore JOIN istruttore_categoria ON id_istruttore=id WHERE id_categoria=".$id_categoria." ";

     $result=do_query($query1);
     $i=0;
     while ( $row = mysql_fetch_assoc($result) ) {
        $id_categoria[$i]=$row["id"];
        $nome_categoria[$i]=$row["nome"];
        $descrizione_categoria[$i]=utf8_encode($row["descrizione"]);
        $i++;
        }
     $result=do_query($query2);
     $i=0;
     while ( $row = mysql_fetch_assoc($result) ) {
        $img_link_categoria[$i]=$row["img_link"];
        $i++;
        }
     $result=do_query($query4);
     $i=0;
     while ( $row = mysql_fetch_assoc($result) ) {
        $id_istruttore[$i]=$row["id"];
        $nome_istruttore[$i]=$row["nome"];
        $img_link_istruttore[$i]=$row["img_link"];
        $i++;
        }
     $result=do_query($query3);
     $i=0;
     while ( $row = mysql_fetch_assoc($result) ) {
        $id_corso[$i]=$row["id"];
        $nome_corso[$i]=$row["nome"];
        $img_link_corso[$i]=$row["img_link"];
        $i++;
        }

     $risposta=array(
        "id_categoria" => $id_categoria,
        "nome_categoria" => $nome_categoria,
        "descrizione_categoria" => $descrizione_categoria,
        "img_link_categoria" => $img_link_categoria,
        "id_corso" => $id_corso,
        "nome_corso"=> $nome_corso,
        "img_link_corso" => $img_link_corso,
        "id_istruttore" => $id_istruttore,
        "nome_istruttore" => $nome_istruttore,
        "img_link_istruttore" => $img_link_istruttore
     );     
     header("Content-Type: application/json");
     echo $_GET['callback']."(".json_encode($risposta).")";
     ?>