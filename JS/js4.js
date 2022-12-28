let cadena = 'Hola soy un string, string, string';
console.log(cadena);
console.log(cadena.slice(0,4));
console.log(cadena.substring(5,11));
//solo reemplaza la primera instancia
console.log(cadena.replace('string', 'puto'));
//utilizando la expresion regular /g (global), reemplaza todas las instancias
console.log(cadena.replace(/string/g, 'puto'));

console.log(cadena.match(/string/g));

console.log(cadena.includes('Hola'));

console.log(cadena.startsWith("Hola"));
console.log(cadena.endsWith('g'));
console.log(cadena.lastIndexOf("Hola"));