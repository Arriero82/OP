/* const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2)
    if(i !== 0){
        resolve()
    }else{
        reject()
    }
})
 */
/* miPromesa
.then( () => console.log('se ha ejecutado correctamente'))
.catch( () => console.log('ERROR'))
.finally( () => console.log('me ejecuto siempre')) */

function* generaId() {
  let id = 0;
  while (true) {
    id++;
    if (id === 10) {
        return id;
    }
    yield id;
  }
}

const gen = generaId();
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());