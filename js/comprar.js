
let resultado =""
let cantidadNoches= prompt ("inregese cantidad de noches: ")
const costoNoche= 15000
function costoHotel (cantidadNoches, costoNoche) {
    let resultado = cantidadNoches * costoNoche;
    alert ("el total es: " + "" + resultado);
}



costoHotel (cantidadNoches, costoNoche);
