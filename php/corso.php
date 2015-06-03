<?php
     include_once "util.php";
     
    $id_corso=$_GET['id'];


    //query dati corso
    $query1 = "SELECT id,nome,descrizione,orario FROM corso WHERE id=".$id_corso." ";
    //query immagini corso
    $query2 = "SELECT img_link FROM immagini_corso WHERE id_corso=".$id_corso." ";
    //query categoria del corso
    $query3 = "SELECT id, nome, img_link FROM categoria WHERE id=(SELECT id_categoria FROM corso WHERE id=".$id_corso." )"; 
    //query istruttori di un corso
    $query4 = "SELECT id,nome,img_link FROM istruttore JOIN istruttore_corso ON id_istruttore=id WHERE id_corso=".$id_corso." ORDER BY nome ";
    //query stanza di un corso
    $query5 = "SELECT id, nome, img_link FROM stanza WHERE id=(SELECT id_stanza FROM corso WHERE id=".$id_corso." )"; 

     $result=do_query($query1);
     $i=0;
     while ( $row = mysql_fetch_assoc($result) ) {
        $id_corso[$i]=$row["id"];
        $nome_corso[$i]=$row["nome"];
        $descrizione_corso[$i]=utf8_encode($row["descrizione"]);
        $orario_corso[$i]=utf8_encode($row["orario"]);
        $i++;
        }
     $result=do_query($query2);
     $i=0;
     while ( $row = mysql_fetch_assoc($result) ) {
        $img_link_corso[$i]=$row["img_link"];
        $i++;
        }
     $result=do_query($query3);
     $i=0;
     while ( $row = mysql_fetch_assoc($result) ) {
        $id_categoria[$i]=$row["id"];
        $nome_categoria[$i]=$row["nome"];
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
     $result=do_query($query5);
     $i=0;
     while ( $row = mysql_fetch_assoc($result) ) {
        $id_stanza[$i]=$row["id"];
        $nome_stanza[$i]=$row["nome"];
        $img_link_stanza[$i]=$row["img_link"];
        $i++;
        }


     $risposta=array(
        "id_corso" => $id_corso,
        "nome_corso" => $nome_corso,
        "descrizione_corso" => $descrizione_corso,
        "orario_corso" => $orario_corso,
        "img_link_corso" => $img_link_corso,
        "id_categoria" => $id_categoria,
        "nome_categoria"=> $nome_categoria,
        "img_link_categoria" => $img_link_categoria,
        "id_istruttore" => $id_istruttore,
        "nome_istruttore" => $nome_istruttore,
        "img_link_istruttore" => $img_link_istruttore,
        "id_stanza" => $id_stanza,
        "nome_stanza" => $nome_stanza,
        "img_link_stanza" => $img_link_stanza
     );
     header("Content-Type: application/json");
     echo $_GET['callback']."(".json_encode($risposta).")";
     ?>