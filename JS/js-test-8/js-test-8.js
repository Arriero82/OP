function isTrue(){
    return true
}

setTimeout( () => {
    console.log("Hola soy una promesa");
}, 5000)


function* generaPares() {
    let par = 0;
    while (true) {
      par++;
      if(par%2 === 0){
        yield par;
      }
    }

  }

  let par = generaPares()
  console.log(par.next().value);
  console.log(par.next().value);
  console.log(par.next().value);
  console.log(par.next().value);
  console.log(par.next().value);
  console.log(par.next().value);
  console.log(par.next().value);
  console.log(par.next().value);


