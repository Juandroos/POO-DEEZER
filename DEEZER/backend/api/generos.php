<?php
    //CREATE
    header("Content-Type: application/json");
    include_once("../class/class-genero.php");
    $_POST =json_decode(file_get_contents('php://input'),true);
    switch ($_SERVER['REQUEST_METHOD']) {
        case 'POST':
            break;
        case 'GET':
            if (isset($_GET['id'])) {
                Genero::obtenerGenero($_GET['id']);
            }
            else {
                Genero::obtenerGeneros();
            }
            
            
            break;
        case 'PUT':
           
            
            break;
        case 'DELETE':
            
            break;
    }
   

?>