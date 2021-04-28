<?php
    //CREATE
    header("Content-Type: application/json");
    include_once("../class/class-playlist.php");
    $_POST =json_decode(file_get_contents('php://input'),true);
    switch ($_SERVER['REQUEST_METHOD']) {
        case 'POST':
            $playlists = new Playlist(
                $_POST["idPlaylist"],
                $_POST["tipoPlaylist"],
                $_POST["nombrePlaylist"],
                $_POST["sencillos"],
                $_POST["albums"]
            );
            $playlists->guardarPlaylist();
            
            break;
        case 'GET':
            if (isset($_GET['id'])) {
                Playlist::obtenerPlaylist($_GET['id']);
            }
            else {
                Playlist::obtenerPlaylists();
            } 
            
            
            break;
        case 'PUT':
            
            break;
        case 'DELETE':
           /*  Usuario::eliminarUsuario($_GET['id']); */
            break;
    }
   

?>
