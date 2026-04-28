let edad = 18

if (edad >= 18) {
    console.log("Eres mayor de edad.")
}
else {
    console.log("Eres menor de edad.")
}
Let califiacion = 8

if (calificacion >= 9) {
    console.log("Excelente")
} else if (califiaciones >= 6) {
    console.log("Aprobado")
} else {
    console.log("Reprobado")
} }
let metodoPago = "cash"

switch (metodoPago) {
    case "cash":
        console.log("Pago en efectivo ha sido recibido")
        break;
    case "credit_card":
        console.log("Pago con tarjeta ha sido recibido)
        break;
    default:
        console.log("Metodo de pago no ha sido aceptado")
        break;
}