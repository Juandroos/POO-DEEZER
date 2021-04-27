var usuarios =[];
const url = '../../DEEZER/backend/api/usuarios.php';
var usuarioId = '';

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

function guardarUsuario(rol) {
    if (document.getElementById('nombre').value!='' &&document.getElementById('apellido').value!='' && document.getElementById('password').value!='' && document.getElementById('correo').value!=''){
    document.getElementById('btnGuardarAdministrador').disabled = true;
    document.getElementById('info').classList.add('info-text-verde');
    document.getElementById('info').innerHTML ="Registro Exitoso!";
    let usuario ={
        nombre:document.getElementById('nombre').value,
        apellido:document.getElementById('apellido').value,
        correo:document.getElementById('correo').value,
        password:document.getElementById('password').value,
        fechaNacimiento:document.getElementById('fechaNacimiento').value,
        identidad:document.getElementById('identidad').value,
        rol:rol,
        playlist:'DEEZER'
    };
    console.log(usuario);
    axios({
        method:'POST',
        url:url,
        responseType:'json',
        data:usuario
    }).then(res=>{
        console.log(res);
    }).catch(error=>{
        console.error(error);
    });
}else{
    console.log('HOLAA');
    document.getElementById('info').classList.add('info-text-rojo');
    document.getElementById('info').innerHTML ="**Rellene los campos**";
}
}

function guardarAdministrador() {
    console.log('PUTONNNN');
    window.location = "https://nueva-pagina.com"
    window.location.replace("index.html");
    redireccionar();

    console.log('id');
}

function redireccionar(){
    console.log('PUTAAA');
    window.location.replace("../index.html");
}





