var generos = [];
var genero ="";
const url = '../../DEEZER/backend/api/generos.php';
var usuarioSeleccionado ='';
var contador= 1;
var informacionGenero =[];
var informacionArtista=[];
var enviarPlaylist =[];
var enviarArtista=[];
var playlists=[];
var usuarioSeleccionado='';

/* USUARIO */
const urlUsuario = '../../DEEZER/backend/api/usuarios.php';
var usuarioId = '';
var infoU ='';
var admonId ='';
var usuarios= [];

/* Playlist */
const urlPlaylist = '../../DEEZER/backend/api/playlists.php';
var playlistId = '';
var playlists =[];
var infoP ='';
playlistSeleccionado = '';


/* BLOQUE GENERO */

function obtenerGeneros() {
    axios({
        method:'GET',
        url:url,
        responseType:'json'
    }).then(res=>{
        console.log(res.data);
        this.generos = res.data;
        llenarBotones();
    }).catch(error=>{
        console.error(error);
    });
}
obtenerGeneros();
function llenarBotones() {
    generos.forEach(gen => {
        document.getElementById('botonGeneros').innerHTML += 
        `
        <button class="btn-genero text-center m-2 p-2" onclick="obtenerGenero(${gen.idGenero})">${gen.nombreGenero}</button>
        `;
    });
    obtenerGenero(0);
}

function obtenerGenero(id) {
    axios({
        method:'GET',
        url:url+`?id=${id}`,
        responseType:'json'
    }).then(res=>{
        console.log(res.data);
        this.genero = res.data;
        llenarGenero();
    }).catch(error=>{
        console.error(error);
    });

}

function llenarGenero() {
    console.log(genero);
    var generoActual = genero;
    var lista = genero.cancionesGenero;
    console.log(lista);
    document.getElementById('imgGeneros').innerHTML='';
    lista.forEach(list => {
    document.getElementById('imgGeneros').innerHTML+=
    `
    <div class="col">
          <div class="card border-0 text-center">

          <img onclick="enviarSeleccionArtistas(${genero.idGenero},${list.idArtista})" src="img/generos/${genero.genero}/242x242-000000-80-0-0(${list.idArtista}).jpg" class="card-img-top img-generos text-center" alt="">
            <div class="card-body">
              <h5 class="card-title text-center"> ${list.nombreArtista}</h5>
            </div>
          </div>
    </div> 
    `;
    });
}

function obtenerGeneroUnico(id) {
    axios({
        method:'GET',
        url:url+`?id=${id}`,
        responseType:'json'
    }).then(res=>{
        console.log(res.data);
        this.genero = res.data;
    }).catch(error=>{
        console.error(error);
    });

}

function enviarSeleccionArtistas(idge, idAr, ) {
    informacionGenero[contador-1] = idge;
    informacionArtista[contador-1]= idAr;

    obtenerGeneroUnico(idge);
    console.error(contador);

    switch (contador) {
    case 1:
        document.getElementById('btnSeleccion').innerHTML = "ELIGE 2 ARTISTAS MAS";
        enviarArtista[0]= {
            "idGenero":generoActual.idGenero,
            "idCancion":generoActual.cancionesGenero[idAr].idCancion,
            "nombreCancion":generoActual.cancionesGenero[idAr].nombreCancion,
            "nombreArtista":generoActual.cancionesGenero[idAr].nombreArtista,
            "urlArtista":generoActual.cancionesGenero[idAr].urlArtista,
        }
        contador=2;
        break;
    case 2: 
        document.getElementById('btnSeleccion').innerHTML = "ELIGE 1 ARTISTAS MAS";
        contador=3;
        enviarArtista[1]={
            "idGenero":generoActual.idGenero,
            "idCancion":generoActual.cancionesGenero[idAr].idCancion,
            "nombreCancion":generoActual.cancionesGenero[idAr].nombreCancion,
            "nombreArtista":generoActual.cancionesGenero[idAr].nombreArtista,
            "urlArtista":generoActual.cancionesGenero[idAr].urlArtista,
        }
        break;
    case 3:
        document.getElementById('btnSeleccion').innerHTML = "CONTINUEMOS"; 
        enviarArtista[2]={
            "idGenero":generoActual.idGenero,
            "idCancion":generoActual.cancionesGenero[idAr].idCancion,
            "nombreCancion":generoActual.cancionesGenero[idAr].nombreCancion,
            "nombreArtista":generoActual.cancionesGenero[idAr].nombreArtista,
            "urlArtista":generoActual.cancionesGenero[idAr].urlArtista,
        }
        document.getElementById('btnSeleccion').disabled = true;
        document.getElementById('btnSeleccion').classList.add('btn-flotante2');
        guardarPlaylist();
        break; 
    default:
        console.log('default');
    }     
}

function guardarPlaylist() {
    enviarPlaylist[0]={
        "idPlaylist":0,
        "tipoPlaylist":"1",
        "nombrePlaylist":Deezer,
        "sencillos":enviarArtista,
    };
    axios({
        method:'POST',
        url:urlPlaylist,
        responseType:'json',
        data:enviarPlaylist
    }).then(res=>{
        
    }).catch(error=>{
        console.error(error);
    });
    
}

/* BLOQUE USUARIO
enviarGenero[0]={
            "idPlaylist":0,
            "tipoPlaylist":"1",
            "nombrePlaylist":Deezer,
            "sencillos":"",
        };
*/


/* OBTENTER PLAYLIST*/



