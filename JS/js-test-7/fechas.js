const fechaHoy = new Date();
const fechaNac = new Date('August 1, 1982');
const isTrue = fechaHoy > fechaNac;
const diaNac = fechaNac.getDay() + 1;
const mesNac = fechaNac.getMonth() + 1;
const anyoNac = fechaNac.getFullYear()
