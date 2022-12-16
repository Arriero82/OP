//estructuras de control

let lista = [1, 4, 6, 2, 3, 7, 10, 12, 800];

//for of
for (const iterator of lista) {
    console.log(iterator);
}
console.log('-------------------------------------------------------');

//for each
lista.forEach(elem => {
    console.log(elem);
})

let persona = {
    nombre: "Leo",
    apellido: "Vull",
    edad: 3,
    isDeveloper: false
}

//for in
for (const key in persona) {
    console.log(key);
    console.log(persona[key]);
    console.log('-----------------------');
}

//break and continue

let lista2 = [1,2,3,4,5,6,7,8]

for(let i = 0; i < lista2.length; i++){
    if(lista2[i] === 3){
        continue;
    }
    console.log(lista2[i]);
    if(lista2[i] === 5){
        break;
    }
}

//labels

