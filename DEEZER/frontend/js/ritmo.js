var generos = [
    "POP",
    "LATINO",
    "RAP/HIP HOP",
    "ROCK",
    "REGGAETÓN",
    "MÚSICA MEXICANA",
    "ALTERNATIVO",
    "R&B",
    "DANCE",
    "ELECTRO"
];

function llenarBotones() {
    generos.forEach(gen => {
        document.getElementById('botonGeneros').innerHTML += 
        `
        <button class="btn-genero text-center m-2 p-2" >${gen}</button>
        `;
    });
}

llenarBotones();