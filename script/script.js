// Declarando Variable de LUXON

const DateTime = luxon.DateTime;
const now = DateTime.now();


class Divisa {

    constructor(simbolo, nombre, precioCompra, precioVenta, stockDivisa) {

        this.simbolo = simbolo;
        this.nombre = nombre;
        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
        this.stockDivisa = stockDivisa;

    }
    toString() {

        return this.nombre;

    }

}

// Declaración del Vector de las diferentes Divisas

let listaDivisas = [];

// Creación de Objetos con el Constructor DIVISA dentro del Vector listaDivisas []

listaDivisas.push(new Divisa("USD $", "Dólar", 1100, 1200, 20000));
listaDivisas.push(new Divisa("EUR €", "Euro", 1300, 1400, 15000));
listaDivisas.push(new Divisa("BRL R$", "Real", 33.71, 33.74, 50000));
listaDivisas.push(new Divisa("CLP $", "Peso Chileno", 19.97, 20.04, 100000));
listaDivisas.push(new Divisa("$U", "Peso Uruguayo", 4.55, 4.55, 60000));
listaDivisas.push(new Divisa("CHF Fr", "Franco Suizo", 188.56, 188.63, 10000));
listaDivisas.push(new Divisa("GBP £", "Libra Esterlina", 210.34, 211.1, 5000));
listaDivisas.push(new Divisa("PEN S/", "Sol Peruano", 3.80, 3.84, 150000));
listaDivisas.push(new Divisa("AR$", "Pesos Argentinos", 1, 1, 5000000));

//Creación de variables para los nodos del DOM

let primerDivisa = document.querySelectorAll(".primerDivisa");
let segundaDivisa = document.querySelectorAll(".segundaDivisa");
let tercerDivisa = document.querySelectorAll(".tercerDivisa");
let cuartaDivisa = document.querySelectorAll(".cuartaDivisa");
let quintaDivisa = document.querySelectorAll(".quintaDivisa");
let sextaDivisa = document.querySelectorAll(".sextaDivisa");
let septimaDivisa = document.querySelectorAll(".septimaDivisa");
let octavaDivisa = document.querySelectorAll(".octavaDivisa");

// Asignación de elementos del Objeto a la sección Exchange

primerDivisa[0].innerText = listaDivisas[0].simbolo;
primerDivisa[1].innerText = listaDivisas[0].nombre;
primerDivisa[2].innerText = listaDivisas[0].precioCompra;
primerDivisa[3].innerText = listaDivisas[0].precioVenta;

segundaDivisa[0].innerText = listaDivisas[1].simbolo;
segundaDivisa[1].innerText = listaDivisas[1].nombre;
segundaDivisa[2].innerText = listaDivisas[1].precioCompra;
segundaDivisa[3].innerText = listaDivisas[1].precioVenta;

tercerDivisa[0].innerText = listaDivisas[2].simbolo;
tercerDivisa[1].innerText = listaDivisas[2].nombre;
tercerDivisa[2].innerText = listaDivisas[2].precioCompra;
tercerDivisa[3].innerText = listaDivisas[2].precioVenta;

cuartaDivisa[0].innerText = listaDivisas[3].simbolo;
cuartaDivisa[1].innerText = listaDivisas[3].nombre;
cuartaDivisa[2].innerText = listaDivisas[3].precioCompra;
cuartaDivisa[3].innerText = listaDivisas[3].precioVenta;

quintaDivisa[0].innerText = listaDivisas[4].simbolo;
quintaDivisa[1].innerText = listaDivisas[4].nombre;
quintaDivisa[2].innerText = listaDivisas[4].precioCompra;
quintaDivisa[3].innerText = listaDivisas[4].precioVenta;

sextaDivisa[0].innerText = listaDivisas[5].simbolo;
sextaDivisa[1].innerText = listaDivisas[5].nombre;
sextaDivisa[2].innerText = listaDivisas[5].precioCompra;
sextaDivisa[3].innerText = listaDivisas[5].precioVenta;

septimaDivisa[0].innerText = listaDivisas[6].simbolo;
septimaDivisa[1].innerText = listaDivisas[6].nombre;
septimaDivisa[2].innerText = listaDivisas[6].precioCompra;
septimaDivisa[3].innerText = listaDivisas[6].precioVenta;

octavaDivisa[0].innerText = listaDivisas[7].simbolo;
octavaDivisa[1].innerText = listaDivisas[7].nombre;
octavaDivisa[2].innerText = listaDivisas[7].precioCompra;
octavaDivisa[3].innerText = listaDivisas[7].precioVenta;





let inputGroupSelect01 = document.querySelector("#inputGroupSelect01");
inputGroupSelect01.classList.add("opciones");

inputGroupSelect01.innerHTML += "<option class='dolarCalculadora'>Dólar</option>";
inputGroupSelect01.innerHTML += "<option class='euroCalculadora'>Euro</option>";
inputGroupSelect01.innerHTML += "<option class='realCalculadora'>Real</option>";
inputGroupSelect01.innerHTML += "<option class='pesoChilenoCalculadora'>Peso Chileno</option>";
inputGroupSelect01.innerHTML += "<option class='pesoUruguayoCalculadora'>Peso Uruguayo</option>";
inputGroupSelect01.innerHTML += "<option class='francoCalculadora'>Franco Suizo</option>";
inputGroupSelect01.innerHTML += "<option class='libraCalculadora'>Libra Esterlina</option>";
inputGroupSelect01.innerHTML += "<option class='solCalculadora'>Sol Peruano</option>";

let dolarCalculadora = document.querySelector(".dolarCalculadora");
let euroCalculadora = document.querySelector(".euroCalculadora");
let realCalculadora = document.querySelector(".realCalculadora");
let pesoChilenoCalculadora = document.querySelector(".pesoChilenoCalculadora");
let pesoUruguayoCalculadora = document.querySelector(".pesoUruguayoCalculadora");
let francoCalculadora = document.querySelector(".francoCalculadora");
let libraCalculadora = document.querySelector(".libraCalculadora");
let solCalculadora = document.querySelector(".solCalculadora");
let pesoArgentino = 0;

dolarCalculadora.innerText = listaDivisas[0].nombre;
euroCalculadora.innerText = listaDivisas[1].nombre;
realCalculadora.innerText = listaDivisas[2].nombre;
pesoChilenoCalculadora.innerText = listaDivisas[3].nombre;
pesoUruguayoCalculadora.innerText = listaDivisas[4].nombre;
francoCalculadora.innerText = listaDivisas[5].nombre;
libraCalculadora.innerText = listaDivisas[6].nombre;
solCalculadora.innerText = listaDivisas[7].nombre;
pesoArgentinoCalculadora = listaDivisas[8].nombre;

// Elegir tipo de operacion a realizar

class Operacion {

    constructor(tipo) {

        this.tipo = tipo;

    }

    toString() {

        return this.tipo;

    }

}

let tipoOperacionArray = [];

tipoOperacionArray.push(new Operacion("Compra"));
tipoOperacionArray.push(new Operacion("Venta"));


let inputGroupSelect03 = document.querySelector("#inputGroupSelect03");
inputGroupSelect03.classList.add("tipoOperacion");

inputGroupSelect03.innerHTML += "<option class='operacionCompra'></option>";
inputGroupSelect03.innerHTML += "<option class='operacionVenta'></option>";

let operacionCompra = document.querySelector(".operacionCompra");
let operacionVenta = document.querySelector(".operacionVenta");

operacionCompra.innerText = tipoOperacionArray[0].tipo;
operacionVenta.innerText = tipoOperacionArray[1].tipo;

let formCalculadora = document.querySelector("#formCalculadora");
let cantidadDivisaCalcular = document.querySelector("#cantidadDivisaCalcular");

const IMPUESTO_PAIS = 0.30;
const IMPUESTO_GANANCIA = 0.45;

function compra() {

    let seleccionDivisa = inputGroupSelect01.value;

    switch (seleccionDivisa) {

        case "Dólar":
            calcularCompra("Dólares", listaDivisas[0].precioCompra);
            break;
        case "Euro":
            calcularCompra("Euros", listaDivisas[1].precioCompra);
            break;
        case "Real":
            calcularCompra("Reales", listaDivisas[2].precioCompra);
            break;
        case "Peso Chileno":
            calcularCompra("Pesos Chilenos", listaDivisas[3].precioCompra);
            break;
        case "Peso Uruguayo":
            calcularCompra("Pesos Uruguayos", listaDivisas[4].precioCompra);
            break;
        case "Franco Suizo":
            calcularCompra("Franco Suizo", listaDivisas[5].precioCompra);
            break;
        case "Libra Esterlina":
            calcularCompra("Libra Esterlina", listaDivisas[6].precioCompra);
            break;
        case "Sol Peruano":
            calcularCompra("Sol Peruano", listaDivisas[7].precioCompra);
            break;

    }

}

function venta() {

    let seleccionDivisa = inputGroupSelect01.value;

    switch (seleccionDivisa) {

        case "Dólar":
            calcularVenta("Dólares", (listaDivisas[0].precioVenta));
            break;
        case "Euro":
            calcularVenta("Euros", (listaDivisas[1].precioVenta));
            break;
        case "Real":
            calcularVenta("Reales", (listaDivisas[2].precioVenta));
            break;
        case "Peso Chileno":
            calcularVenta("Pesos Chilenos", (listaDivisas[3].precioVenta));
            break;
        case "Peso Uruguayo":
            calcularVenta("Pesos Uruguayos", (listaDivisas[4].precioVenta));
            break;
        case "Franco Suizo":
            calcularVenta("Franco Suizo", (listaDivisas[5].precioVenta));
            break;
        case "Libra Esterlina":
            calcularVenta("Libra Esterlina", (listaDivisas[6].precioVenta));
            break;
        case "Sol Peruano":
            calcularVenta("Sol Peruano", (listaDivisas[7].precioVenta));
            break;

    }

}

function calcularCompra(nombreDivisa, tasaCambio) {

    let subTotalCompra = cantidadDivisaCalcular.value * tasaCambio;
    let subTotalPaisCompra = subTotalCompra * IMPUESTO_PAIS;
    let subTotalGananciaCompra = subTotalCompra * IMPUESTO_GANANCIA;
    let totalCompra = subTotalCompra + subTotalPaisCompra + subTotalGananciaCompra;

    resumenCalculadora.innerText = ("\n Calculadora de " + tipoOperacionArray[0].tipo + "\n\n Cantidad a comprar: " + cantidadDivisaCalcular.value + " " + nombreDivisa + ".\n Subtotal: " + subTotalCompra.toFixed(2) + " Pesos Argentinos." + "\n Impuesto País: " + subTotalPaisCompra.toFixed(2) + " Pesos Argentinos." + "\n Impuesto a la Ganancia: " + subTotalGananciaCompra.toFixed(2) + " Pesos Argentinos." + ".\n Total a recibir: " + totalCompra.toFixed(2) + " Pesos Argentinos.");

}

function calcularVenta(nombreDivisa, tasaCambio) {

    console.log(nombreDivisa);
    console.log(tasaCambio);

    let subTotalCompra = cantidadDivisaCalcular.value * tasaCambio;

    resumenCalculadora.innerText = ("\n Calculadora de " + tipoOperacionArray[1].tipo + "\n\n Cantidad a Vender: " + cantidadDivisaCalcular.value + " " + nombreDivisa + ".\n Total a recibir: " + subTotalCompra.toFixed(2) + " Pesos.");

}

formCalculadora.addEventListener("submit", (event) => {

    event.preventDefault();

    if ((inputGroupSelect01.value !== "Elige el tipo de Divisa...") && (inputGroupSelect03.value !== "Elige el tipo de operación que deseas realizar...") && (cantidadDivisaCalcular.value !== "Ingrese la cantidad a consultar...")) {

        if (inputGroupSelect03.value == (tipoOperacionArray[0].tipo)) {

            isNaN(cantidadDivisaCalcular.value) ? resumenCalculadora.innerText = ("\n Debes ingresar un número permitido") : compra();

            // Agregando Alerta de SweetAlert

            Swal.fire({

                position: 'top-end',
                icon: 'success',
                title: 'Datos enviados correctamente.',
                showConfirmButton: false,
                timer: 2500

            })

        } else if (inputGroupSelect03.value == (tipoOperacionArray[1].tipo)) {

            isNaN(cantidadDivisaCalcular.value) ? resumenCalculadora.innerText = ("\n Debes ingresar un número permitido") : venta();

            Swal.fire({

                position: 'top-end',
                icon: 'success',
                title: 'Datos enviados correctamente.',
                showConfirmButton: false,
                timer: 2500

            })

        }

        inputGroupSelect01.focus();
        formCalculadora.reset();

    } else {

        resumenCalculadora.innerText = ("\n Debes seleccionar todos los campos e ingresar los datos correspondientes.");

        setTimeout(() => {

            resumenCalculadora.innerText = "";

        }, 5000);

        // Agregando Alerta de SweetAlert

        Swal.fire({

            icon: 'error',
            title: 'Error!',
            text: 'Debes seleccionar todos los campos e ingresar los datos correspondientes.',
            timer: 2500

        })

        inputGroupSelect01.focus();
        formCalculadora.reset();

    }

})