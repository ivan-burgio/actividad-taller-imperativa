// Actividad del Taller de Programación Imperativa 7.1.1
// Nombre ficticio

// Todos los datos del estudiante
// Datos del estudiante
const estudiante = {
    nombre: 'Pepe',
    apellido: 'Lopez',
    departamento: 'Artigas'
}

// Puntajes
const fundProgramacion = numRandom();
const progImperativa = numRandom();
const pOO = numRandom();

// Evidencia
const eviFundProgramacion = boolRandom();
const eviProgImperativa = boolRandom();
const eviPOO = boolRandom();

// Promedio Ingles
const promedioIngles = numRandom();

// Lecciones de Competencias transversales
const lecciones = boolRandom();

// Almacenamos datos del mismo tipo en arrays
// Array con todos los puntajes
const puntajes = [
    fundProgramacion,
    progImperativa,
    pOO,
    promedioIngles
]

// Array con los bools
const bools = [
    eviFundProgramacion,
    eviProgImperativa,
    eviPOO,
    lecciones
]

// Objeto con todos los datos del estudiante
const resumen = {
    estudiante,
    puntajes,
    bools
}

// Zona de funciones
// Devulve un numero random entre 0 y 100
function numRandom() {
    return Math.trunc(Math.random()*100);
}

// Devulve true or false de manera random
function boolRandom() {
    return numRandom() > 50;
}

// Evalua Competencias transversales
function completoCT(completo) {
    let resultado = '';
    if(completo) {
        resultado = 'Aprobado';
    } else {
        resultado = 'Faltan lecciones';
    }
    return resultado;
}

// Evalua la parte Tecnica
function completoTecnico(completo) {

}

// Muestra en pantalla el estado del estudiante
function detallesStatus(datos) {
    const mensaje = document.querySelector('.contenido');
    const resultado = document.createElement('P');
    resultado.innerHTML = `
        Estimado ${datos.estudiante.nombre}, sus calificaciones son:
        Competencias Transversales: ${completoCT(datos.bools[3])}
        Introducción a la Programación: $
    `;
    mensaje.appendChild(resultado);
}

detallesStatus(resumen);