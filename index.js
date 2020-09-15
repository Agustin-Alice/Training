const moment = require('moment')

function test(number){
    let fecha = moment().add(number, 'd');
    console.log(fecha.format())
}
test()
// test debe recibir un numero y mostrar la fecha actual + ese numero de dias.
// pushear con commit add test1 function
// crear repositorio 'Training excercises'
// poner linux en ingles