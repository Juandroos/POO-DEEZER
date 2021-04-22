<?php
include_once('class-persona.php');
class Administrador extends Persona{
    private $album;

    public function __construct(
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
        # code...
    }

}

?>