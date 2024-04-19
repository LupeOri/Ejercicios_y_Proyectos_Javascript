const baseUrl = 'https://opentdb.com/api.php?amount=';
const startButton = document.querySelector('[data-function="start-game"]');
const input = document.querySelector('[data-function="questions-number"]');
const divTablerodejuego = document.querySelector('[data-function="gameboard"]');
const checkGameButton = document.querySelector('[data-function="check-game"]');
let preguntas = [];
let amount = 0;

const StartGame = async () => {
    try {
        amount = input.value;
        const response = await fetch(baseUrl + amount);
        const data = await response.json();
        preguntas = data.results;
        preguntasTablero();
    } catch (error) {
        console.log(error);
    }
}

function preguntasTablero() {
    divTablerodejuego.textContent = "";

    preguntas.forEach(pregunta => {
        const parrafo = document.createElement('p');
        parrafo.textContent = pregunta.question;
        divTablerodejuego.appendChild(parrafo);

        const opcionesRespuestas = document.createElement('p');

        pregunta.incorrect_answers.forEach(respuesta => {
            const opcion = document.createElement('input');
            opcion.type = 'radio';
            opcion.name = pregunta.question; 
            opcion.value = respuesta;
            const label = document.createElement('label');
            label.textContent = respuesta;
            opcionesRespuestas.appendChild(opcion);
            opcionesRespuestas.appendChild(label);
        });

        const opcionCorrecta = document.createElement('input');
        opcionCorrecta.type = 'radio';
        opcionCorrecta.name = pregunta.question;
        opcionCorrecta.value = pregunta.correct_answer;
        const labelCorrecta = document.createElement('label');
        labelCorrecta.textContent = pregunta.correct_answer;
        opcionesRespuestas.appendChild(opcionCorrecta);
        opcionesRespuestas.appendChild(labelCorrecta);

        parrafo.appendChild(opcionesRespuestas);
    });
}

function checkGame() {
    let preguntasRtaCorrecta = 0;
    let preguntasRtaIncorrecta = [];
    
    preguntas.forEach(pregunta => {
        const opcionesElegidas = document.querySelectorAll(`input[name="${pregunta.question}"]:checked`);
        if (opcionesElegidas.length > 0) {
            const respuestaSeleccionada = opcionesElegidas[0].value;
            if (respuestaSeleccionada === pregunta.correct_answer) {
                preguntasRtaCorrecta++;
            } else {
                preguntasRtaIncorrecta.push(pregunta.question);
            }
        }
    });

    if (preguntasRtaCorrecta < amount) {
        const mensajePerdedor = document.createElement('p');
        mensajePerdedor.className = 'msjPerdedor'
        mensajePerdedor.textContent = 'Tienes ' + preguntasRtaCorrecta + ' respuestas correctas de ' + amount +', ¡vuelve a intentarlo!';
        divTablerodejuego.appendChild(mensajePerdedor);
    } else {
        const mensajeGanador = document.createElement('p');
        mensajeGanador.className = 'msjGanador';
        mensajeGanador.textContent = '¡Felicidades! has contestado el 100% correctamente, has ganado la trivia!';
        divTablerodejuego.appendChild(mensajeGanador);
    }
}

startButton.addEventListener('click', StartGame);
checkGameButton.addEventListener('click', checkGame);