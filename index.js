/**
 * Programación Funcional
 */
let mensajeUsuario = window.prompt('Agrega tu pedido');

// USUARIOS
let usuario = {
    nombre: 'Pepe',
    edad: 41
}

// Pedido Actual
let pedido = []

// MOSTRAR MENÚ
const mostrarMenu = () => {
    console.log(`COD - PLATO - PRECIO`)
    console.log(`--------------------`)
    CARTA.forEach( plato => {
        console.log(`${plato.cod} - ${plato.nombre} - ${plato.precio}€`)
    } )
    console.log(`--------------------`)
}
// Enseñar el menú al inicio
mostrarMenu()

//Repetir prompt para más pedidos
function crearPrompt() {
mensajeUsuario = window.prompt('Agrega mas cosas a tu pedido')
comprobarCod(mensajeUsuario)
}

//Comprueba si el código coincide con el de la carta. Si coincide lo añade, sino avisa de que no está. Al final de a función vuelve a abrir el prompt.
function comprobarCod (code) {
const estaEnCarta  = CARTA.find(el => el.cod === code);
if (estaEnCarta) {
pedido.push(estaEnCarta)
imprimirPedido();
} else {
console.log('No esta en la carta')
}
crearPrompt();
}
comprobarCod(mensajeUsuario);

//Función que imprime en consola el pedido y el precio total.
function imprimirPedido() {
pedido.forEach( plato => {
        console.log(`${plato.nombre} - ${plato.precio}€`)
    })

let precioTotal = pedido.map(item => item.precio).reduce((prev, next) => prev + next);
console.log(`Precio total ${precioTotal}€\n--------------------`)
}

