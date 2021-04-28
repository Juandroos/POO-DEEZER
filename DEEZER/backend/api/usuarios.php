<?php
    //CREATE
    header("Content-Type: application/json");
    include_once("../class/class-usuario.php");
    switch ($_SERVER['REQUEST_METHOD']) {
        case 'POST':
            echo 'Guardar usuario';
            $_POST =json_decode(file_get_contents('php://input'),true);
            $usuarios = new Usuario(
                $_POST["id"],
                $_POST["nombre"],
                $_POST["apellido"],
                $_POST["correo"],
                $_POST["password"],
                $_POST["fechaNacimiento"],
                $_POST["identidad"],
                $_POST["rol"],
                $_POST["playlist"]
            );
            $usuarios->guardar();
            $resultado["mensaje"]= "Guardar usuario, informacion: ".json_encode($_POST);
            echo json_encode( $resultado);
            break;
        case 'GET':
            if (isset($_GET['id'])) {
                Usuario::obtenerUsuario($_GET['id']);
            }
            else {
                Usuario::obtenerUsuarios();
            } 
            
            
            break;
        case 'PUT':
            $_PUT =json_decode(file_get_contents('php://input'),true);
            $usuario = new Usuario(
                $_PUT["id"],
                $_PUT["nombre"],
                $_PUT["apellido"],
                $_PUT["correo"],
                $_PUT["password"],
                $_PUT["fechaNacimiento"],
                $_PUT["identidad"],
                $_PUT["rol"],
                $_PUT["playlist"],);
            $usuario->actualizar($_GET['id']); 

            
            break;
        case 'DELETE':
           /*  Usuario::eliminarUsuario($_GET['id']); */
            break;
    }
   

?>
