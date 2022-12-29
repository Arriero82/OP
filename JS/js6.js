const array = [1, 2, 3, 4, 5, 6];
//console.log(array);
array.splice(2, 1); //elimina 1 elemento a partir de la posicion 2. en este caso el 3
//console.log(array);
array.splice(2, 0, 3); //elimina 0 elemento a partir de la posicion 2 y pone en su lugar el 3er parametro, en este caso el 3.
//console.log(array);
array.splice(0, 1, 9);
//console.log(array); //elimina 1 elemento a partir de la posicion 0 y pone en su lugar el 9

const lista1 = ["a", "b", "c", "d"];
const lista2 = [1, 2, 3, 4];
const lista3 = lista1.concat(lista2);
//console.log(lista3);

const lista4 = [...lista1, ...lista2]; //concatenar usando spread ...
//console.log(lista4);

//slice, no modifica el array original
const array5 = [1, 2, 3, 4, 5, 6];

const array6 = array5.slice(1, 4);
//console.log(array5);
//console.log(array6);

//iterar valores de una lista
let suma = 0;
array5.forEach((el) => {
  suma += el;
});
//console.log(suma);

const variable = array5.find((el) => {
  if (el === 6) {
    //console.log(el);
  }
});

const listaPersonas = [
  { nombre: "Pollo", edad: 35 },
  { nombre: "Leo", edad: 2 },
  { nombre: "Flor", edad: 19 },
];

const persona = listaPersonas.find((el) => {
  if (el.nombre === "Leo") {
    //console.log(`${el.nombre} tiene ${el.edad} años`);
  }
});

const { edad, nombre } = listaPersonas.find((el) => el.nombre === "Flor");
//console.log(`${nombre} tiene ${edad} años`);

const ciudades = ["San Sebastian", "Madrid", "Barcelona", "Alicante", "Bilbao"];

//ciudades.forEach(v => console.log(v))

const newCiudades = ciudades.map((elem, indice) => `${indice + 1} - ${elem}`);
//console.log(newCiudades);

listaPersonas.filter((elem) => {
  if (elem.edad > 10) {
    //console.log(`${elem.nombre} tiene mas de 10 años`);
  }
});

const personasMayores = listaPersonas.filter((persona) => persona.edad > 15);
const nuevaLista = listaPersonas.filter((persona) => persona.nombre !== "Flor");
//console.log(personasMayores);
//console.log(nuevaLista);

const array3 = [
  { a: 2, b: 5 },
  { a: 3, b: 6 },
  { a: 4, b: 6 },
];
//console.log(array3[0].a);

const array4 = listaPersonas.reduce((a, b) => {
  return a + b.edad;
}, 0);

//console.log(array4);

const arrayNums = [5, 89, 70, 1, -1, -100, 500, 9864];
//console.log(arrayNums);
arrayNums.sort((a, b) => a - b);
//console.log(arrayNums);
arrayNums.sort((a, b) => b - a);
//console.log(arrayNums);

const ordenPersonas = listaPersonas.sort((a,b) => a.edad - b.edad)
//console.log(ordenPersonas);

/* const resultado = arrayNums.every( valor => {
    if(valor > 0){
        return true
    }else{
        return false
    }
}) */

const resultado =  arrayNums.every( valor => valor > 0)

//console.log(resultado);

const ar1 = [1,2,3,4]
const ar2 = [4,3,2,1]


//console.log(ar1 === ar2); //false, no se puede comparar asi

const compararArray = (array_1, array_2) => {
    if(array_1.length !== array_2.length) return false //1ero chequea si la longitud es la misma, es rapido y ocupa poco hacer una comprobacion basica
    const res = array_1.every( (valor, indice) => valor === array_2[indice]) //con el metodo every(), compara valor de array_1 con array_2[indice], de esta manera compara uno a uno
    return res
}

//console.log(compararArray(ar1, ar2));
//console.log(compararArray(ar1, ar2.sort( (a,b) => a - b))); //cuando lo ordeno son iguales

const existe = listaPersonas.some(persona => persona.nombre === 'Leo')
//console.log(existe);

const strg = 'soy un gabo';
const ar_strg = Array.from(strg)
console.log(ar_strg);

const set = new Set([2,3, 'hola', '4'])
const ar_set = Array.from(set);
console.log(set);
console.log(ar_set);

const keys = array.keys()
console.log(array);
console.log(keys);
const ar_keys = Array.from(keys)
console.log(ar_keys);
