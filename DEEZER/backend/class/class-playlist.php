<?php
class Playlist{
    private $idPlaylist;
    private $tipoPlaylist;
    private $nombrePlaylist;
    private $sencillos;
    private $albums;

    public function __construct(
        $idPlaylist,
        $tipoPlaylist,
        $nombrePlaylist,
        $sencillos,
        $albums
    )
    {
        $this->idPlaylist =$idPlaylist;
        $this->tipoPlaylist =$tipoPlaylist;
        $this->nombrePlaylist =$nombrePlaylist;
        $this->sencillos =$sencillos;
        $this->albums =$albums;
    }

    /**
     * Get the value of idPlaylist
     */ 
    public function getIdPlaylist()
    {
        return $this->idPlaylist;
    }

    /**
     * Set the value of idPlaylist
     *
     * @return  self
     */ 
    public function setIdPlaylist($idPlaylist)
    {
        $this->idPlaylist = $idPlaylist;

        return $this;
    }

    /**
     * Get the value of nombrePlaylist
     */ 
    public function getNombrePlaylist()
    {
        return $this->nombrePlaylist;
    }

    /**
     * Set the value of nombrePlaylist
     *
     * @return  self
     */ 
    public function setNombrePlaylist($nombrePlaylist)
    {
        $this->nombrePlaylist = $nombrePlaylist;

        return $this;
    }

    /**
     * Get the value of tipoPlaylist
     */ 
    public function getTipoPlaylist()
    {
        return $this->tipoPlaylist;
    }

    /**
     * Set the value of tipoPlaylist
     *
     * @return  self
     */ 
    public function setTipoPlaylist($tipoPlaylist)
    {
        $this->tipoPlaylist = $tipoPlaylist;

        return $this;
    }

    /**
     * Get the value of sencillos
     */ 
    public function getSencillos()
    {
        return $this->sencillos;
    }

    /**
     * Set the value of sencillos
     *
     * @return  self
     */ 
    public function setSencillos($sencillos)
    {
        $this->sencillos = $sencillos;

        return $this;
    }

    /**
     * Get the value of albums
     */ 
    public function getAlbums()
    {
        return $this->albums;
    }

    /**
     * Set the value of albums
     *
     * @return  self
     */ 
    public function setAlbums($albums)
    {
        $this->albums = $albums;

        return $this;
    }
    public static function obtenerPlaylists()
    {
        $contenidoArchivo = file_get_contents('../data/playlists.json');
        echo $contenidoArchivo;
    }

    public static function obtenerPlaylist($id)
    {
        $contenidoArchivo = file_get_contents('../data/playlists.json');
        $playlists = json_decode($contenidoArchivo,true);
        echo json_encode($playlists[$id]);
    } 
    public function guardarPlaylist()
    {
        $contenidoArchivo = file_get_contents('../data/playlists.json'); 
        $playlists = json_decode($contenidoArchivo,true);
        $playlists[]= array(
            "idPlaylist"=>$this->idPlaylist,
            "tipoPlaylist"=>$this->tipoPlaylist,
            "nombrePlaylist"=>$this->nombrePlaylist,
            "sencillos"=>$this->sencillos,
            "albums"=>$this->albums
        );
        $archivo = fopen('../data/playlists.json','w');
        fwrite($archivo, json_encode($playlists));
        fclose($archivo);  
    }
}
?>