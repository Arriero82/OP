const funcion = val => {
    if(typeof val === 'number'){
        return val * 2;
    }
    throw new Error('El valor tiene que ser un numero')
}

//console.log(funcion('a'));

const numero = '1';

try {
    const doble = funcion(numero)
    console.log(doble);
} catch (error) {
    logger.Error(error);
    console.log(error);
}