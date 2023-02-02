/*

const display = {
    carro: 'bmw',
    age: '2015',
    user: 'louis'
};

agrega elemento html. 
function arp(e) {
    e = document.getElementById('display').innerHTML = `
    <h1>${display.carro}</h1>
    <p>${display.age}</p>
    <p>${display.user}</p>
    `;
};

 borra el texto.
function borrar(b) {
    b = document.getElementById('display').innerText = "";
};*/

const pc = {
    ram: '32 gb',
    procesador: 'ryzen 7',
    motherBoard: 'asus',
}

let entradaPorPantalla = prompt('introduce un valor');

switch (entradaPorPantalla) {
    case '32gb':
        document.getElementById('container').innerHTML = `
        <h1> ${pc.ram} </h1>
        `
        break;

    default:
        document.getElementById('container').innerHTML = `
        <h1> incerta un elemento en el alert </h1>
        `
        break;

}

function borrar(b) {
    b = document.getElementById('container').innerText = "";
};