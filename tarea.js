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

// Entrego las 3 evidencias
function evidencias(completo) {
    return completo[0] && completo[1] && completo[2];
}

// Evalua Competencias transversales
function completoCT(completo) {
    let resultado = '';
    if(completo) {
        resultado = '100 puntos - Aprobado';
    } else {
        resultado = 'Faltan lecciones';
    }
    return resultado;
}

// Evalua Tecnica
function completoTecnico(completo) {
    let resultado = '';
    let porcentaje = Math.trunc(completo.puntajes[0]/3 + completo.puntajes[1]/5 + completo.puntajes[2]/2);
    if(porcentaje >= 60 && evidencias(completo.bools)) {
        resultado = 'Aprobado';
    } else if(porcentaje >= 60) {
        resultado = 'Faltan evidencias';
    } else if(evidencias(completo.bools)) {
        resultado = 'Tienes menos de 60 puntos'
    } else {
        resultado = 'Tienes menos de 60 puntos y faltan evidencias'
    }
    return porcentaje + ' puntos - ' + resultado;
}

// Evalua Ingles
function ingles(completo) {
    let resultado = '';
    if(completo >= 50) {
        resultado = completo + ' puntos - Aprobado';
    } else {
        resultado = completo + ' puntos - Desaprobado';
    }
    return resultado;
}

// Conclusion
function final(completo) {
    let resultado = '';
    let porcentaje = Math.trunc(completo.puntajes[0]/3 + completo.puntajes[1]/5 + completo.puntajes[2]/2);
    if((completo.bools[3]) && porcentaje >= 60 && evidencias(completo.bools) && completo.puntajes[3] >= 50) {
        resultado = 'Aprobado';
    } else {
        resultado = 'Desaprobado';
    }
    return resultado;
}

// Muestra en pantalla el estado del estudiante
function detallesStatus(datos) {
    const mensaje = document.querySelector('.contenido');
    const resultado = document.createElement('P');
    resultado.innerHTML = `
        Estimado <span>${datos.estudiante.nombre} ${datos.estudiante.apellido}</span>, sus calificaciones son:<br><br>
        <span>Competencias Transversales:</span> ${completoCT(datos.bools[3])}<br>
        <span>Tecnico:</span> ${completoTecnico(datos)}<br>
        <span>Ingles:</span> ${ingles(datos.puntajes[3])}<br><br>
        <span>Conclusión:</span> ${final(datos)}
    `;
    mensaje.appendChild(resultado);
}

detallesStatus(resumen);