// Actividad del Taller de Programación Imperativa 7.1.1
// Nombre ficticio

// Funciones auxiliares
// Devulve un numero random entre 0 y 100
function numRandom() {
    return Math.trunc(Math.random()*100);
}

// Devulve true or false de manera random
function boolRandom() {
    return numRandom() > 50;
}

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
const leccionesComTrans = boolRandom();

// Almacenamos datos del mismo tipo en arrays
// Array con todos los puntajes
const puntajes = [
    fundProgramacion,
    progImperativa,
    pOO,
    promedioIngles
]

// Array con los bools
const completo = [
    eviFundProgramacion,
    eviProgImperativa,
    eviPOO
]

// Objeto con todos los datos del estudiante
const resumen = {
    estudiante,
    puntajes,
    completo
}

function detallesStatus(resumen) {
    
}