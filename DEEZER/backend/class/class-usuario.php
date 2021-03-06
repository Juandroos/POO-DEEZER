<?php
include_once('class-persona.php');
class Usuario extends Persona{
    private $playlist;

    public function __construct(
        $id,    
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
            $id,
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
                 $this->id.", "
                .$this->nombre.", "
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
        $archivo = fopen('../data/usuarios.json','w');
        fwrite($archivo, json_encode($usuarios));
        fclose($archivo);   
    }  
    
    public function actualizar($id){
        $contenidoArchivo = file_get_contents('../data/usuarios.json'); 
        $usuarios = json_decode($contenidoArchivo,true);
        $usuario= array(
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
        $usuarios[$id]= $usuario;
        $archivo = fopen('../data/usuarios.json','w');
        fwrite($archivo, json_encode($usuarios));
        fclose($archivo); 
    }

    public static function obtenerUsuarios()
    {
        $contenidoArchivo = file_get_contents('../data/usuarios.json');
        echo $contenidoArchivo;
    }

    public static function obtenerUsuario($id)
    {
        $contenidoArchivo = file_get_contents('../data/usuarios.json');
        $usuarios = json_decode($contenidoArchivo,true);
        echo json_encode($usuarios[$id]);
    } 

    
}
