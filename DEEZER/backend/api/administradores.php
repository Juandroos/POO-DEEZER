<?php
    //CREATE
    header("Content-Type: application/json");
    include_once("../class/class-usuario.php");
    $_POST =json_decode(file_get_contents('php://input'),true);
    switch ($_SERVER['REQUEST_METHOD']) {
        case 'POST':
            $administradores = new Administrador(
                $_POST["id"],
                $_POST["nombre"],
                $_POST["apellido"],
                $_POST["correo"],
                $_POST["password"],
                $_POST["fechaNacimiento"],
                $_POST["identidad"],
                $_POST["rol"],
                $_POST["album"]
            );
            $administradores->guardar();
            break;
        case 'GET':
            if (isset($_GET['id'])) {
                Administrador::obtenerAdministrador($_GET['id']);
            }
            else {
                Administrador::obtenerAdministradores();
            } 
            
            
            break;
        case 'PUT':
            $_PUT =json_decode(file_get_contents('php://input'),true);
            $administrador = new Administrador(
                $_PUT["id"],
                $_PUT["nombre"],
                $_PUT["apellido"],
                $_PUT["correo"],
                $_PUT["password"],
                $_PUT["fechaNacimiento"],
                $_PUT["identidad"],
                $_PUT["rol"],
                $_PUT["album"],);
            $administrador->actualizar($_GET['id']); 

            
            break;
        case 'DELETE':
           /*  Usuario::eliminarUsuario($_GET['id']); */
            break;
    }
   

?>
