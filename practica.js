const obtenerInformacion = (materia)=> {
    materias = {
        fisica : ["Sabato","pedro","juan","hernesto","jose","leandro"],
        programacion : ["Borges","pedro","juan","hernesto","jose"],
        logica : ["Cervantes","pedro","juan","hernesto",,"leandro"],
        quimica : ["Conrad","pedro","jose","leandro"]
    }
    if(materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    }else{
        return materias;
    }
}
const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);
if (informacion !== false){
    let profesor = obtenerInformacion(materia)[0][0];
    let alumnos = obtenerInformacion(materia)[0];
    alumnos.shift()
    document.write(`el profesor de ${informacion[1]} es : ${profesor} <br> y los alumnos son: ${alumnos}
    <br><br>
    `)
}
}
const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let clasesPresentes=[];
    let cantidadTotal = 0;
    for (info in informacion){
        if (informacion[info].includes(alumno)){
         cantidadTotal++;
         clasesPresentes.push(" " + info);
        }
    }
    return `${alumno} esta en ${cantidadTotal} clases: ${clasesPresentes}<br><br>`
}
mostrarInformacion("fisica")
mostrarInformacion("programacion")
mostrarInformacion("logica")
mostrarInformacion("quimica")
document.write(cantidadDeClases("leandro"))
document.write(cantidadDeClases("jose"))