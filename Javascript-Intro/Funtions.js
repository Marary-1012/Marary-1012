// Ejemplos de Funciones en JavaScript

// 1. Función tradicional que determina si estás aprobado (nota mínima: 7.0)
function estaAprobado(nota) {
    if (nota >= 7.0) {
        return "Estás Aprobado";
    } else {
        return "Estás Reprobado";
    }
}

// Probando la función estaAprobado
console.log("Si saco 8.5:", estaAprobado(8.5));
console.log("Si saco 6.0:", estaAprobado(6.0));


// 2. Función flecha (Arrow Function) que suma dos números
const sumar = (a, b) => {
    return a + b;
}

// Probando la función sumar
let resultadoSuma = sumar(5, 10);
console.log("La suma de 5 y 10 es igual a:", resultadoSuma);


// 3. Función sencilla que solo imprime un mensaje (no retorna valores ni recibe parámetros)
function saludar() {
    console.log("¡Hola! Esto es una función simple.");
}

// Llamamos a la función
saludar();