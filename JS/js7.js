//diferencia entre array y set es que en set no va a haber repetidos

const array = [1,2,3,4,5,6,1,2,5,'hola', {id: 5}, {id: 5}, "hola"];
const miSet = new Set(array)
//en este caso miSet va a mostrar una vez el 1,2,5 y el 'hola
//console.log(array);
//console.log(miSet);
miSet.add(9)
miSet.add(4) //este no se agrega porque ya habia un 4
//console.log(miSet);
miSet.delete('hola')
//console.log(miSet);
/* miSet.clear() //se borran todos los elementos del set
console.log(miSet); */
//console.log(miSet.has(4)); //true
//console.log(miSet.has('hola')); //false
//console.log(miSet.size);

//miSet.forEach(valor => console.log(valor))

const it_miSet = miSet.values()
//console.log(it_miSet);
const ar_miSet = [...miSet]
//console.log(ar_miSet);

const obj = {
    id: 4,
    nombre: 'Juan',
    isDeveloper: true,
    libros: ['el metodo', 'el codigo'],
    '4-juegos': [1,2,3,4]
}
//console.log(obj.id);
//console.log(obj['4-juegos']);
const prop = 'isDeveloper'
//console.log(obj[prop]);

const listaPeliculas = [
    {titulo: 'lo que el agua se llevo', anyo: 1939},
    {titulo: 'Titanic', anyo: 1997},
    {titulo: 'Moana', anyo: 2016},
    {titulo: 'El efecto mariposa', anyo: 2004},
    {titulo: 'TED', anyo: 2012}
]

const peliOrdenada = listaPeliculas.sort((a,b) => a.anyo - b.anyo)
//console.log(peliOrdenada);

const fecha = new Date(1987,9,5)
const fecha2 = new Date('October 5, 1987')
console.log(fecha.toLocaleDateString());
console.log(fecha2.toLocaleDateString('es-ar')); //se puede revisar el sitio de mozilla y ver los formatos por pais e idioma
console.log(new Date() > fecha); //posterior en el tiempo entonces true
console.log(fecha === fecha2); //no se pueden comparar fechas asi
console.log(fecha.getTime() === fecha2.getTime());


