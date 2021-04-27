<?php
class Genero{
    private $idGenero;
    private $nombreGenero;
    private $urlGenero;
    private $cancionesGenero;

    public function __construct(
        $idGenero,
        $nombreGenero,
        $urlGenero,
        $cancionesGenero
    )
    {
        $this->idGenero = $idGenero;
        $this->nombreGenero = $nombreGenero;
        $this->urlGenero = $urlGenero;
        $this->cancionesGenero = $cancionesGenero;   
    }

    /**
     * Get the value of idGenero
     */ 
    public function getIdGenero()
    {
        return $this->idGenero;
    }

    /**
     * Set the value of idGenero
     *
     * @return  self
     */ 
    public function setIdGenero($idGenero)
    {
        $this->idGenero = $idGenero;

        return $this;
    }

    /**
     * Get the value of nombreGenero
     */ 
    public function getNombreGenero()
    {
        return $this->nombreGenero;
    }

    /**
     * Set the value of nombreGenero
     *
     * @return  self
     */ 
    public function setNombreGenero($nombreGenero)
    {
        $this->nombreGenero = $nombreGenero;

        return $this;
    }

    /**
     * Get the value of urlGenero
     */ 
    public function getUrlGenero()
    {
        return $this->urlGenero;
    }

    /**
     * Set the value of urlGenero
     *
     * @return  self
     */ 
    public function setUrlGenero($urlGenero)
    {
        $this->urlGenero = $urlGenero;

        return $this;
    }

    /**
     * Get the value of cancionesGenero
     */ 
    public function getCancionesGenero()
    {
        return $this->cancionesGenero;
    }

    /**
     * Set the value of cancionesGenero
     *
     * @return  self
     */ 
    public function setCancionesGenero($cancionesGenero)
    {
        $this->cancionesGenero = $cancionesGenero;

        return $this;
    }

    public static function obtenerGeneros()
    {
        $contenidoArchivo = file_get_contents('../data/generos.json');
        echo $contenidoArchivo;
    }
}
?>