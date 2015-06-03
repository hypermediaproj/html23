<?php
     include_once "util.php";

     $query = "SELECT id,nome,facebook,twitter,img_link FROM istruttore ORDER BY nome ASC";
     $result=do_query($query);
     $i=0;
     while ( $row = mysql_fetch_assoc($result) ) {
        $id[$i]=$row["id"];
        $nome[$i]=$row["nome"];
        $facebook[$i]=$row["facebook"];
        $twitter[$i]=$row["twitter"];
        $img_link[$i]=$row["img_link"];
        $i++;
        }
     $risposta=array(
        "id" => $id,
        "nome" => $nome,
        "facebook" => $facebook,
        "twitter" => $twitter,
        "img_link" => $img_link
     );     
     header("Content-Type: application/json");
     echo $_GET['callback']."(".json_encode($risposta).")";
     ?>