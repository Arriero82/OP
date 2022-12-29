const listaCompras = ["harina", "azucar", "huevos", "arroz", "mayonesa"];
listaCompras.push("Aceite de Girasol");
listaCompras.pop();
const peliculas = [
  {
    titulo: "Matrix",
    director: "Hermanas Wachowski",
    fecha: new Date(1999, 2, 31),
  },
  { titulo: "Watchmen", director: "Zack Snyder", fecha: new Date(2011, 6, 25) },
  {
    titulo: "Star Wars: Episodio IV - Una nueva esperanza",
    director: "George Lucas",
    fecha: new Date(1977, 4, 25),
  },
];
const lista2010 = peliculas.filter((elem) => elem.fecha > new Date(2011, 0, 1));

const listaDirectores = peliculas.map((pelicula) => pelicula.director);

const listaTitulos = peliculas.map((pelicula) => pelicula.titulo);

const listaDirectoresTitulos = listaDirectores.concat(listaTitulos);

const listaDirectoresTitulosConSpread = [...listaDirectores, ...listaTitulos];
