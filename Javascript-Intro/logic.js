// Operadores lógicos básicos
let a = true;
let b = false;

console.log("a && b:", a && b); // false (AND: ambas deben ser true)
console.log("a || b:", a || b); // true  (OR: al menos una debe ser true)
console.log("!a:", !a);         // false (NOT: invierte el valor de a)
console.log("!b:", !b);         // true  (NOT: invierte el valor de b)

console.log("\n--- Ejemplos Prácticos de Lógica ---");

// 1. Uso de AND (&&) para verificar que TODAS las condiciones se cumplan
let edad = 20;
let tieneLicencia = true;

if (edad >= 18 && tieneLicencia) {
    console.log("Ejemplo AND: Puedes conducir legalmente.");
} else {
    console.log("Ejemplo AND: No cumples todos los requisitos para conducir.");
}

// 2. Uso de OR (||) para verificar que AL MENOS UNA condición se cumpla
let tieneEfectivo = false;
let tieneTarjeta = true;

if (tieneEfectivo || tieneTarjeta) {
    console.log("Ejemplo OR: Puedes pagar la compra.");
} else {
    console.log("Ejemplo OR: No tienes cómo pagar.");
}

// 3. Uso de NOT (!) para negar una condición
let diaLluvioso = false;

if (!diaLluvioso) {
    console.log("Ejemplo NOT: El día está lindo, vamos al parque.");
} else {
    console.log("Ejemplo NOT: Está lloviendo, mejor nos quedamos en casa.");
}
