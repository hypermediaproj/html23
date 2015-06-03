<?php
     include_once "util.php";

     $query = "SELECT id,nome,descrizione_breve,img_link FROM categoria ORDER BY nome ASC";
     $result=do_query($query);
     $i=0;
     while ( $row = mysql_fetch_assoc($result) ) {
        $id[$i]=$row["id"];
        $nome[$i]=$row["nome"];
        $img_link[$i]=$row["img_link"];
        $descrizione_breve[$i]=utf8_encode($row["descrizione_breve"]);
        $i++;
        }
     $risposta=array(
        "id" => $id,
        "nome" => $nome,
        "img_link" => $img_link,
        "descrizione_breve" => $descrizione_breve
     );     
     header("Content-Type: application/json");
     echo $_GET['callback']."(".json_encode($risposta).")";

     ?>