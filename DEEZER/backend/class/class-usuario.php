<?php
include_once('class-persona.php');
class Usuario extends Persona{
    private $playlist;

    public function __construct(
        $nombre,
        $apellido,
        $correo,
        $password,
        $fechaNacimiento,
        $identidad,
        $rol,
        $playlist)
        {
            parent::__construct(
            $nombre,
            $apellido,
            $correo,
            $password,
            $fechaNacimiento,
            $identidad,
            $rol);
            $this->playlist = $playlist;
        }


   
    
        /**
     * Get the value of playlist
     */ 
    public function getPlaylist()
    {
        return $this->playlist;
    }

    /**
     * Set the value of playlist
     *
     * @return  self
     */ 
    public function setPlaylist($playlist)
    {
        $this->playlist = $playlist;

        return $this;
    }
   

    public function __toString(){
        return 
                $this->nombre.", "
                .$this->apellido.", "
                .$this->correo.", "
                .$this->password.", "
                .$this->fechaNacimiento.", "
                .$this->identidad.", "
                .$this->rol.", "
                .$this->playlist.", "
        ;  
    }

    public function guardar()
    {
        $contenidoArchivo = file_get_contents('../data/usuarios.json'); 
        $usuarios = json_decode($contenidoArchivo,true);
        $usuarios[]= array(
            "nombre" =>$this->nombre,
            "apellido" =>$this->apellido,
            "correo" =>$this->correo,
            "password" =>$this->password,
            "fechaNacimiento" =>$this->fechaNacimiento,
            "identidad" =>$this->identidad,
            "rol" =>$this->rol,
            "playlist" =>$this->playlist
        );
        $archivo = fopen('../data/usuarios.json','w');
        fwrite($archivo, json_encode($usuarios));
        fclose($archivo);   
    }    

    
}
