//importar un modulo que permita manejar archivos del sistema
const fs = require('fs');
const operations = {
//leer un archivo json con datos
leerJSON : function () {
    //preguntar si existe el archivo
    if(fs.existsSync('tasks.json')){
 //buscar un archivo JSON en las carpetas
    //retornarlo en formato operable
    let tasks = fs.readFileSync('tasks.json','utf-8');
    //trasformarlo en fprmato operable
    tasks = JSON.parse(tasks);
    return tasks;
    }
   return [];

},
//escribir una nueva tarea 
//funcion que debe agregar una tarea al array de 
//convertir datos en formatos json
//grabar en el archivo json
crear : function(task) {
    let tasksArray = this.leerJSON();
    tasksArray.push(task);
    //tasksArray = JSON.stringify(tasksArray, null, ' ' )
    //fs.writeFileSync('tasks.json', tasksArray) las remplazamos por la funcion escribirjson
    this.escribirJSON(tasksArray);
    console.log('la tarea fue agragada con exito');
    console.log();

},
//actualizar estado de una tarea
actualizar : function (indice, nuevoEstado){
//leer obtener lista de tareas 
let tasksArray = this.leerJSON ();

//recorrer el array
tasksArray.forEach(function(task,i){
if ( indice==i){
    task.estado = nuevoEstado;
}

})

this.escribirJSON(tasksArray);
console.log('El estado fue actualizado con exito');
console.log();

},
//escribira los datos en el archivo json
escribirJSON : function(datos){
   let  tasksArray = JSON.stringify(datos, null, ' ');
    fs.writeFileSync('tasks.json', tasksArray);
},

eliminar : function(taskDele){
    let tasksArray = this.leerJSON();
    let newArray = tasksArray.filter(function(taskDelete){
     return taskDele != taskDelete.titulo;
    // if(tasksArray[i]==taskDele) {
        // tasksArray.splice(i,1);
     }) 
    
    this.escribirJSON(newArray);
   
 console.log('la tarea fue Eliminada');
 console.log();

},

}
module.exports = operations;

//console.log(operations.leerJSON());
