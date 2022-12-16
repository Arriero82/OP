const factorial = (numero) => {
    let factorialNum = 1;
    for(let i = 1; i <= numero; i++){
        factorialNum*=i;
    }
    return factorialNum;
}

console.log(factorial(10));