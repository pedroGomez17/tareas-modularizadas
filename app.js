//importar las operaciones 
const operations = require('./operations')
//ejecutar operaciones en base a acciones del usuario
let actions = process.argv[2];
switch(actions){
    case 'listar':
//obtener las tareas
        let tasksArray= operations.leerJSON(); 
        console.log();
        console.log('lista de tareas');
        console.log('=====================');
        console.log();

       if (tasksArray.length == 0){
       console.log('No hay tareas en la lista');
       console.log();    
       }else {
         tasksArray.forEach(function(task,i){
        console.log((i+1) + ' - ' + task.titulo   +' |'  + task.estado )
 
        })
       }
//imprimirlas a una por pantalla
    break;

    case 'crear':
//obtener del usuario los datos de la tarea crear
let titulo = process.argv[3];
let newTask= {
titulo : titulo,
estado : 'Pendiente'
}
operations.crear(newTask);
//guardar la tarea en la lista

    break;

    case 'actualizar':
        //obtener el indice de la tarea a modificar
        let indice = process.argv[3];        
        //obtener el nuevo estado.
        let nuevoEstado = process.argv[4];      
        //actualizar la tarea 
        operations.actualizar(indice, nuevoEstado);
    
break;
 
case 'eliminar':
    let taskDele = process.argv[3]; 
    operations.eliminar(taskDele);
    break;
  case undefined:
    console.log ('ingrese alguna accion');
break;
    default: console.log ('ingrese la accion correcta')
    break;
}