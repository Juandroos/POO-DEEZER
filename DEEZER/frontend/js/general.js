var enlaces = [
    {
      "id":"deezer",
      "nombre":["Planes","Ventajas", "Dispositivos","Ayuda","Quiénes somos", "Empleos"],
      "url":["plan","ventajas", "dispositivos","ayuda","empresa", "empleo"]
    },
    {
      "id":"explorar",
      "nombre":["Todos los canales","Listas de éxitos","Lanzamiento más popular","Nuevos lanzamientos","Quédate en casa"],
      "url":["canales","exitos", "popular","nuevo","quedateEnCasa"]
    },
    {
      "id":"quienesSomos",
      "nombre":["Disqueras y artistas","Desarrolladores","Prensa"],
      "url":["disqueras","exidesarrolladores", "prensa"]
    },
    {
      "id":"legal",
      "nombre":["Aviso Legal","Condiciones generales de uso","Cookies"],
      "url":["legal","condiciones", "cookies"]
    }
  
  ];

  function crearFooter() {
    enlaces.forEach(enl => {
    let element = ''; 
    document.getElementById(`${enl.id}`).innerHTML = '';
      for (let i = 0; i < enl.nombre.length; i++) {
        element += `<li><a class="link-footer" href="${enl.url[i]}">${enl.nombre[i]}</a></li>`;
      }
      document.getElementById(`${enl.id}`).innerHTML += element;
    });
  }
  crearFooter();