<?php
include_once('class-persona.php');
class Administrador extends Persona{
    private $album;

    public function __construct(
        $id,
        $nombre,
        $apellido,
        $correo,
        $password,
        $fechaNacimiento,
        $identidad,
        $rol,
        $album
    )
    {
        parent::__construct(
        $id,
        $nombre,
        $apellido,
        $correo,
        $password,
        $fechaNacimiento,
        $identidad,
        $rol);
        $this->album= $album;
    }
    

    /**
     * Get the value of album
     */ 
    public function getAlbum()
    {
        return $this->album;
    }

    /**
     * Set the value of album
     *
     * @return  self
     */ 
    public function setAlbum($album)
    {
        $this->album = $album;

        return $this;
    }
    public function guardar()
    {
        $contenidoArchivo = file_get_contents('../data/administradores.json'); 
        $administradores = json_decode($contenidoArchivo,true);
        $administradores[]= array(
            "id" =>$this->id,
            "nombre" =>$this->nombre,
            "apellido" =>$this->apellido,
            "correo" =>$this->correo,
            "password" =>$this->password,
            "fechaNacimiento" =>$this->fechaNacimiento,
            "identidad" =>$this->identidad,
            "rol" =>$this->rol,
            "album" =>$this->album
        );
        $archivo = fopen('../data/administradores.json','w');
        fwrite($archivo, json_encode($administradores));
        fclose($archivo);   
    }  
    
    public function actualizar($id){
        $contenidoArchivo = file_get_contents('../data/administradores.json'); 
        $administradores = json_decode($contenidoArchivo,true);
        $administrador= array(
            "id" =>$this->id,
            "nombre" =>$this->nombre,
            "apellido" =>$this->apellido,
            "correo" =>$this->correo,
            "password" =>$this->password,
            "fechaNacimiento" =>$this->fechaNacimiento,
            "identidad" =>$this->identidad,
            "rol" =>$this->rol,
            "playlist" =>$this->playlist
        );
        $administradores[$id]= $administrador;
        $archivo = fopen('../data/administradores.json','w');
        fwrite($archivo, json_encode($administradores));
        fclose($archivo); 
    }

    public static function obtenerAdministradores()
    {
        $contenidoArchivo = file_get_contents('../data/administradores.json');
        echo $contenidoArchivo;
    }

    public static function obtenerAdministrador($id)
    {
        $contenidoArchivo = file_get_contents('../data/administradores.json');
        $administrador = json_decode($contenidoArchivo,true);
        echo json_encode($administrador[$id]);
    } 

}

?>