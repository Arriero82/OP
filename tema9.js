class Persona{

    #edad;
    #nombre = '';
    #telefono;

    setEdad(edad){
        this.#edad = edad;
    }
    getEdad(){
        console.log(this.#edad);
    }

    setNombre(nombre){
        this.#nombre = nombre;
    }
    getNombre(){
        console.log(this.#nombre);
    }

    setTelefono(telefono){
        this.#telefono = telefono;
    }
    getTelefono(){
        console.log(this.#telefono);
    }
}

class Cliente extends Persona{
    #credito;
    
    setCredito(credito){
        this.#credito = credito;
    }
    getCredito(){
        console.log(this.#credito);
    }
}

const maxi = new Cliente()
maxi.setEdad(70)
maxi.setNombre('Maximo Meridio')
maxi.setTelefono(12345678)
maxi.setCredito(10000)
maxi.getEdad()
maxi.getNombre()
maxi.getTelefono()
maxi.getCredito()

class Trabajador extends Persona{
    #salario

    setSalario(salario){
        this.#salario = salario;
    }
    getSalario(){
        console.log(this.#salario);
    }
}
