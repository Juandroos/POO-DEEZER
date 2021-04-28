var usuarios =[];
const url = '../../DEEZER/backend/api/usuarios.php';
var usuarioId = '';
var admonId ='';

/* PLAYLIST */
/* Playlist */
const urlPlaylist = '../../DEEZER/backend/api/playlists.php';
var playlistId = '';
var playlists =[];
var infoP ='';
playlistSeleccionado = '';

document.getElementById("nombre").addEventListener("keyup", nombreValidar);
function nombreValidar() { 
    var m = document.getElementById("nombre").value;
    var expreg = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;
    if(expreg.test(m)){
    verde('nombre');
    }else {
    rojo('nombre'); 
    }
} 

document.getElementById("apellido").addEventListener("keyup", apellidoValidar);
function apellidoValidar() { 
    var m = document.getElementById("apellido").value;
    var expreg = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;
    if(expreg.test(m)){
    verde('apellido');
    }else {
    rojo('apellido'); 
    }
}

document.getElementById("correo").addEventListener("keyup", correoValidar);
function correoValidar() { 
    var m = document.getElementById("correo").value;
    var expreg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(expreg.test(m)){
    verde('correo');
    }else {
    rojo('correo');
    }
} 

document.getElementById("password").addEventListener("keyup", passwordValidar);
function passwordValidar() { 
    var m = document.getElementById("password").value;
    var expreg = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    if(expreg.test(m)){
    verde('password');
    }else {
    rojo('password');
    }
}

function verde(id) {document.getElementById(id).style.backgroundColor = "rgb(193, 255, 234)"}
function rojo(id) {document.getElementById(id).style.backgroundColor = "rgb(255, 193, 193)"}

/* GUARDAR USUARIO */

function obtenerUsuarios() {
    axios({
        method:'GET',
        url:url,
        responseType:'json'
    }).then(res=>{
        console.log(res.data);
        this.usuarios = res.data;
        usuarioId = usuarios.length;
        console.log(usuarioId);
    }).catch(error=>{
        console.error(error);
    });
}
obtenerUsuarios();

function guardarUsuario() {
    let rol= 2;
    console.log(usuarioId);
    if (document.getElementById('nombre').value!='' &&document.getElementById('apellido').value!='' && document.getElementById('password').value!='' && document.getElementById('correo').value!=''){
    document.getElementById('btnGuardarAdministrador').disabled = true;
    document.getElementById('btnGuardarUsuario').disabled = true;
    document.getElementById('btnGuardarUsuario').innerHTML = 'Enviando...';
    document.getElementById('info').classList.add('info-text-verde');
    document.getElementById('info').innerHTML ="Registro Exitoso!";
    let usuario ={
        id:usuarioId,
        nombre:document.getElementById('nombre').value,
        apellido:document.getElementById('apellido').value,
        correo:document.getElementById('correo').value,
        password:document.getElementById('password').value,
        fechaNacimiento:document.getElementById('fechaNacimiento').value,
        identidad:document.getElementById('identidad').value,
        rol:rol,
        playlist:[playlistId]
    };
    console.log(usuario);
    axios({
        method:'POST',
        url:url,
        responseType:'json',
        data:usuario
    }).then(res=>{
        console.log(res);
        window.location.assign("ritmo.html"); 
    }).catch(error=>{
        console.error(error);
    });
}else{
    console.log('HOLAA');
    document.getElementById('info').classList.add('info-text-rojo');
    document.getElementById('info').innerHTML ="**Rellene los campos**";
}
}

/* PLAYLIST */
function obtenerPlaylists() {
    axios({
        method:'GET',
        url:urlPlaylist,
        responseType:'json'
    }).then(res=>{
        console.log(res.data);
        this.playlists = res.data;
        playlistId = playlists.length;
        console.log(playlistId);
        playlistId = playlistId;
    }).catch(error=>{
        console.error(error);
    });
}
obtenerPlaylists();


/* GUARDAR ADMINISTRADOR */
function guardarAdministrador() {
    console.log('PUTONNNN');
    
    redireccionar();
}







