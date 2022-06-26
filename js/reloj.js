// otra forma de hacer, con funcion obtenerFecha
function obtenerFecha(){
   let fecha = new Date();
// console.log(fecha)

// console.log(fecha.getDate()); /*Numeros del dia de la semana 1-31*/
// console.log(fecha.getDay()); /*numero de los dias Dom-Sab (0-6) */
// console.log(fecha.getMonth()); /*numero de meses comenzando con enero es 0 */
// console.log(fecha.getFullYear()); /*numero del año */


let Semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
let Mes = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']

let fechaReloj = document.getElementById('fecha');
fechaReloj.innerHTML = `${Semana[fecha.getDay()]} ${fecha.getDate()} de ${Mes[fecha.getMonth()]} del ${fecha.getFullYear()}`

let horaReloj = document.querySelector('#hora');
horaReloj.innerHTML = `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}` 
}

// otra forma de hacerlo, con funcion anonima
setInterval(()=>{
    let fecha = new Date();
// console.log(fecha)

// console.log(fecha.getDate()); /*Numeros del dia de la semana 1-31*/
// console.log(fecha.getDay()); /*numero de los dias Dom-Sab (0-6) */
// console.log(fecha.getMonth()); /*numero de meses comenzando con enero es 0 */
// console.log(fecha.getFullYear()); /*numero del año */


let Semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
let Mes = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']

let fechaReloj = document.getElementById('fecha');
fechaReloj.innerHTML = `${Semana[fecha.getDay()]} ${fecha.getDate()} de ${Mes[fecha.getMonth()]} del ${fecha.getFullYear()}`

// arreglar los valores de un digito
let minutos = fecha.getMinutes();
let segundos = fecha.getSeconds();
let horas = fecha.getHours();

if(minutos<10){
    minutos = `0${minutos}`
}
if(segundos<10){
    segundos = `0${segundos}`
}
if(horas<10){
    horas = `0${horas}`
}

let horaReloj = document.querySelector('#hora');
horaReloj.innerHTML = `${horas}:${minutos}:${segundos}` 
},1000)