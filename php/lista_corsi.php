<?php
     include_once "util.php";

$ordine="alfabetico";
if(isset($_GET['ordine']))
   $ordine=$_GET['ordine'];

if($ordine=="alfabetico"){
    $query = "SELECT a.id,a.nome,a.livello,a.descrizione_breve,a.img_link,b.id as id_categoria, b.nome as nome_categoria FROM corso AS a JOIN categoria AS b ON a.id_categoria=b.id ORDER BY nome ASC";
}

if($ordine=="categoria"){
    if(isset($_GET['id_categoria'])){
        $id_categoria=$_GET['id_categoria'];
        $query="SELECT a.id,a.nome,a.livello,a.descrizione_breve,a.img_link,b.id as id_categoria, b.nome as nome_categoria FROM corso AS a JOIN categoria AS b ON a.id_categoria=b.id WHERE id_categoria=".$id_categoria." ORDER BY nome ASC";
    }
    else
        $query = "SELECT a.id,a.nome,a.livello,a.descrizione_breve,a.img_link,b.id as id_categoria, b.nome as nome_categoria FROM corso AS a JOIN categoria AS b ON a.id_categoria=b.id ORDER BY b.nome ASC";
}
if($ordine=="livello"){
    $query = "(SELECT a.id,a.nome,a.livello,a.descrizione_breve,a.img_link,b.id as id_categoria, b.nome as nome_categoria FROM corso AS a JOIN categoria AS b ON a.id_categoria=b.id WHERE livello='Facile' ORDER BY nome ASC) UNION (SELECT a.id,a.nome,a.livello,a.descrizione_breve,a.img_link,b.id as id_categoria, b.nome as nome_categoria FROM corso AS a JOIN categoria AS b ON a.id_categoria=b.id WHERE livello='Media' ORDER BY nome ASC) UNION (SELECT a.id,a.nome,a.livello,a.descrizione_breve,a.img_link,b.id as id_categoria, b.nome as nome_categoria FROM corso AS a JOIN categoria AS b ON a.id_categoria=b.id WHERE livello='Difficile' ORDER BY nome ASC)";

}
     $result=do_query($query);
     $i=0;
     while ( $row = mysql_fetch_assoc($result) ) {
        $id_corso[$i]=$row["id"];
        $nome_corso[$i]=$row["nome"];
        $livello_corso[$i]=$row["livello"];
        $descrizione_breve_corso[$i]=utf8_encode($row["descrizione_breve"]);
        $img_link_corso[$i]=$row["img_link"];
        $id_categoria[$i]=$row["id_categoria"];
        $nome_categoria[$i]=$row["nome_categoria"];
        $i++;
        }
     $risposta=array(
        "id_corso" => $id_corso,
        "nome_corso" => $nome_corso,
        "descrizione_breve_corso" => $descrizione_breve_corso,
        "livello_corso" => $livello_corso,
        "img_link_corso" => $img_link_corso,
        "id_categoria" => $id_categoria,
        "nome_categoria" => $nome_categoria
     );     
     header("Content-Type: application/json");
     echo $_GET['callback']."(".json_encode($risposta).")";
     ?>