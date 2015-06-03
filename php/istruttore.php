<?php
     include_once "util.php";
     
    $id_istruttore=$_GET['id'];
    //query dati istruttore
    $query1 = "SELECT id,nome,mail,descrizione,img_link,twitter,facebook FROM istruttore WHERE id=".$id_istruttore." ";
    //query corsi istruttore
    $query2 = "SELECT id,nome,img_link FROM corso JOIN istruttore_corso ON id_corso=id WHERE id_istruttore=".$id_istruttore." ";
    //query categorie istruttore
    $query3 = "SELECT id,nome,img_link FROM categoria JOIN istruttore_categoria ON id_categoria=id WHERE id_istruttore=".$id_istruttore." ";

     $result=do_query($query1);
     $i=0;
     while ( $row = mysql_fetch_assoc($result) ) {
        $id_istruttore[$i]=$row["id"];
        $nome_istruttore[$i]=$row["nome"];
        $mail[$i]=$row["mail"];
        $descrizione[$i]=utf8_encode($row['descrizione']);
        $twitter["twitter"]=$row['twitter'];
        $facebook['facebook']=$row['facebook'];
        $img_link_istruttore[$i]=$row["img_link"];
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
     $result=do_query($query3);
     $i=0;
     while ( $row = mysql_fetch_assoc($result) ) {
        $id_categoria[$i]=$row["id"];
        $nome_categoria[$i]=$row["nome"];
        $img_link_categoria[$i]=$row["img_link"];
        $i++;
        }

     $risposta=array(
        "id_istruttore" => $id_istruttore,
        "nome_istruttore" => $nome_istruttore,
        "img_link_istruttore" => $img_link_istruttore,
        "mail_istruttore" => $mail,
        "descrizione_istruttore" => $descrizione,
        "twitter_istruttore" => $twitter,
        "facebook_istruttore" => $facebook,
        "id_corso" => $id_corso,
        "nome_corso"=> $nome_corso,
        "img_link_corso" => $img_link_corso,
        "id_categoria" => $id_categoria,
        "nome_categoria" => $nome_categoria,
        "img_link_categoria" => $img_link_categoria
     );     
     header("Content-Type: application/json");
     echo $_GET['callback']."(".json_encode($risposta).")";
     ?>