// ==========================================
// OBJETOS BÁSICOS EN JAVASCRIPT
// ==========================================

// 1. Creación de un objeto básico (Sintaxis de Objeto Literal)
// Un objeto es una colección de pares clave-valor (propiedades y valores).
const persona = {
    nombre: "Ana",
    edad: 28,
    profesion: "Desarrolladora Web",
    esEstudiante: false
};

// 2. Acceder a las propiedades de un objeto
console.log("--- Accediendo a Propiedades ---");

// Forma 1: Notación de punto (La más común)
console.log("Nombre: " + persona.nombre);
console.log("Edad: " + persona.edad);

// Forma 2: Notación de corchetes (Útil cuando la clave es dinámica o tiene espacios)
console.log("Profesión: " + persona["profesion"]);

// 3. Modificar y Añadir nuevas propiedades
console.log("\n--- Modificando y Añadiendo Propiedades ---");

// Cambiar un valor existente
persona.edad = 29;
console.log("Nueva edad: " + persona.edad);

// Añadir una nueva propiedad
persona.ciudad = "Madrid";
console.log("Ciudad (nueva propiedad): " + persona.ciudad);

// 4. Objetos con Métodos (Funciones dentro de objetos)
console.log("\n--- Métodos en Objetos ---");

const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    encender: function () {
        console.log("El " + this.marca + " " + this.modelo + " está encendido. ¡Brum brum!");
    }
};

// Llamar al método
coche.encender();

// 5. Objetos anidados (Objetos dentro de objetos)
console.log("\n--- Objetos Anidados ---");

const usuario = {
    username: "dev_master",
    email: "dev@ejemplo.com",
    direccion: {
        calle: "Av. Principal",
        numero: 123,
        codigoPostal: "28001"
    }
};

console.log("Usuario: " + usuario.username);
// Para acceder a propiedades anidadas encadenamos los puntos:
console.log("Calle del usuario: " + usuario.direccion.calle);
