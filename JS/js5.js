let c = 3.3;
let d = c * 3;
let e = 18597.14548784
console.log(d);
//toFixed() limitar el numero de decimales al valor que le damos por parametro
console.log(d.toFixed(3));
console.log(typeof d);
console.log(typeof d.toFixed(3));

console.log(e.toPrecision(7)); //considera la cantidad total de cifras
console.log(e.toFixed(7)); //considera la cantidad de decimales

let b = new Number(3);
console.log(b);
console.log(b+c);
console.log(b.valueOf());
let n = new Number('hola')
console.log(isNaN(n));

let numero = '5.89';
console.log(typeof numero);
console.log(typeof Number(numero));
console.log(typeof parseInt(numero));
console.log(parseInt(numero));
console.log(typeof parseFloat(numero));
console.log(parseFloat(numero));

let numHex = '0x3a5b7' //base 16
console.log(Number(numHex));

