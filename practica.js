let materias = {
    fisica : ["Sabato","pedro","juan","hernesto","jose","leandro"],
    programacion : ["Borges","pedro","juan","hernesto","jose"],
    logica : ["Cervantes","pedro","juan","hernesto",,"leandro"],
    quimica : ["Conrad","pedro","jose","leandro"]
}
const inscribir = (alumno,materia)=>{
    personas = materias[materia];
    if(personas.length >= 21){
        document.write(`${alumno} las clases de ${materia} ya estan llenas<br>`)
    }else{
        personas.push(alumno);
        if(materia == "fisica"){
        materias = {
            fisica : personas,
            programacion : materias["programacion"],
            logica : materias["logica"],
            quimica : materias["quimica"]
        }
        }
        else if(materia == "programacion"){
            materias = {
                fisica : materias["fisica"],
                programacion : personas,
                logica : materias["logica"],
                quimica : materias["quimica"]
            }
        }
        else if(materia == "logica"){
            materias = {
                fisica : materias["fisica"],
                programacion : materias["programacion"],
                logica : personas,
                quimica : materias["quimica"]
            }
        }
        else if(materia == "quimica"){
            materias = {
                fisica : materias["fisica"],
                programacion : materias["programacion"],
                logica : materias[logica],
                quimica : personas
            }
        }
        document.write(`${alumno} se inscribio con exito a ${materia}<br>`)
    }
}
document.write(materias["fisica"]+"<br>")
inscribir("jere","fisica")
document.write(materias["fisica"])