const objeto = {
  nombre: "gabo",
  apellido: "vull",
  edad: 40,
  altura: 177,
  isDeveloper: true,
};

const { edad } = objeto;

const listaObjetos = [];

const arrayObjetosAmigos = [
  {
    nombre: "Sebas",
    apellido: "Espin",
    edad: 38,
    altura: 182,
    isDeveloper: false,
  },
  {
    nombre: "Nico",
    apellido: "Agus",
    edad: 30,
    altura: 183,
    isDeveloper: true,
  },
];

listaObjetos.push(objeto, ...arrayObjetosAmigos);

const listaOrdenada = listaObjetos.sort((a, b) => b.edad - a.edad);

console.log(listaOrdenada);
