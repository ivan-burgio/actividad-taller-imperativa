// DATOS
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

// Auxiliar
const porcentaje = Math.trunc(fundProgramacion/3 + progImperativa/5 + pOO/2);

// FUNCIONES
// Devulve un numero random entre 0 y 100
function numRandom() {
    return Math.trunc(Math.random()*100);
}

// Devulve true or false de manera random
function boolRandom() {
    return numRandom() > 50;
}

// Entrego las 3 evidencias
function evidencias() {
    return eviFundProgramacion && eviProgImperativa && eviPOO;
}

// Evalua Competencias transversales
function completoCT() {
    let resultado = '';
    if(lecciones) {
        resultado = '100 puntos - Aprobado';
    } else {
        resultado = 'Faltan lecciones';
    }
    return resultado;
}

// Evalua Tecnica
function completoTecnico() {
    let resultado = '';
    if(porcentaje >= 60 && evidencias()) {
        resultado = 'Aprobado';
    } else if(porcentaje >= 60) {
        resultado = 'Faltan evidencias';
    } else if(evidencias()) {
        resultado = 'Tienes menos de 60 puntos'
    } else {
        resultado = 'Tienes menos de 60 puntos y faltan evidencias'
    }
    return porcentaje + ' puntos - ' + resultado;
}

// Evalua Ingles
function ingles() {
    let resultado = '';
    if(promedioIngles >= 50) {
        resultado = promedioIngles + ' puntos - Aprobado';
    } else {
        resultado = promedioIngles + ' puntos - Desaprobado';
    }
    return resultado;
}

// Conclusion
function final() {
    let resultado = '';
    porcentaje;
    if((lecciones) && porcentaje >= 60 && evidencias() && promedioIngles >= 50) {
        resultado = 'Aprobado';
    } else {
        resultado = 'Desaprobado';
    }
    return resultado;
}

// Muestra en pantalla el estado del estudiante
function detallesStatus() {
    const mensaje = document.querySelector('.contenido');
    const resultado = document.createElement('P');
    resultado.innerHTML = `
        Estimado <span>${estudiante.nombre} ${estudiante.apellido}</span>, sus calificaciones son:<br><br>
        <span>Competencias Transversales:</span> ${completoCT()}<br>
        <span>Tecnico:</span> ${completoTecnico()}<br>
        <span>Ingles:</span> ${ingles()}<br><br>
        <span>Conclusión:</span> ${final()}
    `;
    mensaje.appendChild(resultado);
}

detallesStatus();