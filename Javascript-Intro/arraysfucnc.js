let frutas = ["Manzana", "Pera", "Uva"];
console.log("Arreglo original:", frutas);

// 1. Agregar un elemento al inicio (unshift)
frutas.unshift("Fresa");
console.log("Después de agregar al inicio:", frutas);

// 2. Agregar un elemento al final (push)
frutas.push("Naranja");
console.log("Después de agregar al final:", frutas);

// 3. Eliminar el último elemento (pop)
let frutaEliminada = frutas.pop();
console.log("Después de eliminar el último (pop):", frutas);
console.log("La fruta eliminada fue:", frutaEliminada);