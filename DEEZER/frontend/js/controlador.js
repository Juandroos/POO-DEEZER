var iconoInicio = [
  "laptop",
  "tablet-alt",
  "gamepad",
  "mobile-alt",
  "tv",
  "car-alt",
];
var planes = [
  
      {
        "nombre": "Free",
        "precio": "$0.00",
        "check": 2,
        "mensaje": "Disfrutalo",
        "boton": "Registrarse",
        "plan":"formato-plan1",
        "color":["blanco", "gris", "gris", "azul"]
    },
    ,
     {
        "nombre": "Premium",
        "precio": "$5.99",
        "check": 5,
        "mensaje": "30 días gratis",
        "boton": "Probar ahora",
        "plan":"formato-plan2",
        "color":["azul","blanco", "rosa", "blanco"]
    },{
     
        "nombre": "Familiar",
        "precio": "$8.99",
        "check": 6,
        "mensaje": "30 días gratis",
        "boton": "Probar ahora",
        "plan":"formato-plan3",
        "color":["blanco", "gris", "rosa","azul"]
    }];


function crearIconos() {
  iconoInicio.forEach((icono) => {
    document.getElementById("h2Icono"
    ).innerHTML += `<abbr title="${icono}"><i class="fas fa-${icono} m-3 p-1"></i></abbr>`;
  });
}

crearIconos();

function crearPlanes() {
  document.getElementById("divPlanes").innerHTML = '';
  
    planes.forEach(plan => {
    let premisa =["73 millones de títulos","Reproducción aleatoria","Sin publicidad","Sáltate cancione","Modo sin conexión","6 cuentas",];
    let listo = '';
    let contador=0;

    for (let i = 0; i < plan.check; i++) {
        listo += '<li class="m-2 '+plan.color[1]+'-item-plan"><i class="fas fa-check m-1"></i>'+premisa[contador]+'</li>';  
        contador ++;
    };
    for (let i = 0; i < (6-plan.check); i++) {
        listo += '<li class="m-2 normal-item-plan"><i class="fas fa-times m-1"></i>'+premisa[contador]+'</li>'; 
        contador ++; 
    };
      document.getElementById("divPlanes").innerHTML +=
      `
      <div class="col-sm-3">
      <div class="fw-bolder ${plan.color[0]}-bg-plan">
      <div class="card-body">
        <h1 class="m-4">Deezer <br>${plan.nombre}</h1>
        <h1 class="m-0">${plan.precio}</h1>
        <p>/mes</p><br>
        <ul class="text-start">
          ${listo}
        </ul>
        <h6 class="mt-5 mb-3 ${plan.color[3]}-info-plan"> ${plan.mensaje}</h6>
        <button class="btn mb-3 p-2 col-8 mx-auto ${plan.color[2]}-btn-plan">${plan.boton}</button>
        <h6 class="mb-5 ${plan.color[3]}-info-plan">Más información</h6>
        
      </div>
    </div></div>
      `;
    });
}

crearPlanes();

