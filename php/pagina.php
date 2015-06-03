<?php
     include_once "util.php";

     $nome_pagina=$_GET['nome_pagina'];
     
     //query dettagli pagina
     $query1 = "SELECT nome,descrizione FROM pagina WHERE nome='".$nome_pagina."' ";
     $result=do_query($query1);
     $i=0;
     while ( $row = mysql_fetch_assoc($result) ) {
        $nome[$i]=$row["nome"];
        $descrizione[$i]=utf8_encode($row["descrizione"]);
        $i++;
        }

     $risposta=array(
        "nome" => $nome,
        "descrizione" => $descrizione,
     );     
     header("Content-Type: application/json");
     echo $_GET['callback']."(".json_encode($risposta).")";
     ?>