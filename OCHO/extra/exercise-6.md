# Descripción

En este ejercicio vamos a simular una batalla de rol, con dados y estadísticas por doquier!

De nuevo, tendremos una api local que deberemos ejecutar con json-server `json-server --watch exercise-6.json` . La url en cuestión de los personajes sería
`http://localhost:3000/characters`. Ten en cuenta que como usamos imágenes locales tienes que hacer el ejercicio en esta misma carpeta o llevarte la carpeta /public (carpeta con imágenes) donde tengas tus propios ejercicios.

En este caso vamos a realizar una batalla entre dos razas a elegir por el usuario. Por lo tanto, lo primero que
deberíamos hacer es una petición a personajes para imprimir sus datos en la página web. Tanto nombre, como imágenes y
estadísticas.

Cuando el usuario elija dos personajes, aparecerá un botón que diga "Luchar!". Una vez que el usuario haga click en el
botón luchar se realizarán una serie de tiradas de dados que decidirán que raza es la ganadora (puedes simular estas
tiradas haciendo un time out para que no salgan todos los resultados directamente).

# Condiciones de victoria

Para que una raza gane el combate tiene que dejar al contrincante con 0 puntos de vida (vitality). Para ello, Los
personajes lanzarán los dados que tengan sus características (damage) de forma ordenada (primero una raza, luego la
otra) y teniendo en cuenta las siguientes condiciones.

Si la raza tiene tiene por ejemplo este daño:

`"damage": ["2d6","1d10","2d20"]`

Significa que tendrá que lanzar 2 dados de 6 caras, 1 de 10 caras y 2 de 20 caras por turno. Para simular una tirada
aleatoria de dados podéis utilizar el siguiente código `Math.floor(Math.random() * 10) + 1;`. Donde 10 es el numero
máximo del dado.

Por cada dado, tendremos que comprobar si el resultado coincide con el valor de la propiedad .critic del personaje. En
caso afirmativo, el daño de ESE dado se multiplicará x2.

```
Ejemplo de resultado de una tirada de humano:

4
2
8
10 x2 = 20
20
10 x2 = 20

Daño total = 74
```

Una vez que tengamos el daño completo, le restaremos el valor de la propiedad .defense del adversario.

`Ejemplo de la anterior tirada contra un enano que tiene 15 de defensa: 74 - 15 = 59`

Ese resultado, será el daño que el ha hecho el personaje al adversario, por lo cual, el resultado habría que restárselo
a la vitalidad del adversario (vitality).

`Ejemplo de vida restante del enano después del primer golpe del humano: 325 - 59 = 266`

Una vez concluido el golpe de un personaje pasaríamos al otro que haría el mismo proceso.

Este proceso se debería hacer constantemente hasta que uno de los personajes tenga 0 o menos puntos de vida. En cuyo
caso, el adversario sería el ganador.

Lo ideal es que una vez concluya una batalla, mostremos un botón para poder resetear el juego.

Para terminar y por hacer más justa la batalla, que raza ataca primero se decidirá de manera aleatoria.

**Mucha suerte a todos los contrincantes!**

---

const baseUrl = 'http://localhost:3000/characters';
const divCharacters = document.querySelector('[data-function="characters"]');
const avatarsSelected = [];
let jugador1Vitalidad = 0;
let jugador2Vitalidad = 0;

const getData = async () =>{
const response = await fetch(baseUrl);
if (!response.ok){
throw new Error('Error al obtener los datos');
}
return response.json();
}

async function selectingAvatars() {
try {
const personajes = await getData();
for (let personaje of personajes){
const avatarDiv = document.createElement('div');
const avatarName = document.createElement('p');
avatarName.textContent = personaje.name;
const img = document.createElement('img');
img.src = personaje.avatar; // Corregido aquí
img.alt = personaje.id;
const estadistics = document.createElement('p');
estadistics.textContent = personaje.damage.join(", ");
avatarDiv.appendChild(avatarName);
avatarDiv.appendChild(img);
avatarDiv.appendChild(estadistics);

            avatarDiv.addEventListener('click', ()=>{
                if(avatarsSelected.length < 2 && !avatarsSelected.includes(personaje)){ // Corregido aquí
                    avatarsSelected.push(personaje);
                    avatarDiv.style.pointerEvents = 'none'; // Deshabilita el avatar una vez seleccionado
                }
                if(avatarsSelected.length === 2){
                    const startMsj = document.createElement('p');
                    startMsj.className = 'startMsj';
                    startMsj.textContent = 'Ya tienes tus dos Avatars, es hora de comenzar! Presiona "A LUCHAR!" abajo ↓';
                    document.body.appendChild(startMsj);
                }
            })
            divCharacters.appendChild(avatarDiv);
        }
    } catch (error) {
        console.error('Error al obtener los datos de los personajes:', error);
    }

}

function iniciarBatalla() {
const damage1 = calcularDamage(avatarsSelected[0]);
const damage2 = calcularDamage(avatarsSelected[1]);

    const primerAtaque = Math.random() < 0.5 ? 1 : 2;
    console.log(`El jugador ${primerAtaque} comienza la batalla.`);

    atacar(primerAtaque, damage1, damage2);

}

function calcularDamage(avatar) {
let totalDamage = 0;
for (let dice of avatar.damage) {
const [numDados, caras] = dice.split('d').map(Number);
for (let i = 0; i < numDados; i++) {
totalDamage += (Math.floor(Math.random() _ caras) + 1) _ (avatar.critic ? 2 : 1);
}
}
return totalDamage;
}

function atacar(jugador, damage1, damage2) {
const adversario = jugador === 1 ? 2 : 1;
const adversarioVitalidad = adversario === 1 ? jugador2Vitalidad : jugador1Vitalidad;

    const nuevoVitalidad = adversarioVitalidad - (jugador === 1 ? damage1 : damage2);
    if (adversario === 1) {
        jugador2Vitalidad = nuevoVitalidad;
    } else {
        jugador1Vitalidad = nuevoVitalidad;
    }

    console.log(`El jugador ${jugador} inflige ${adversario === 1 ? damage1 : damage2} puntos de daño al jugador ${adversario}.`);
    console.log(`La vitalidad restante del jugador ${adversario} es ${nuevoVitalidad}.`);

    if (nuevoVitalidad <= 0) {
        console.log(`El jugador ${jugador} gana la batalla.`);
        reiniciarJuego();
    } else {
        setTimeout(() => {
            atacar(adversario, damage1, damage2);
        }, 1500);
    }

}

function reiniciarJuego() {
jugador1Vitalidad = 0;
jugador2Vitalidad = 0;
avatarsSelected.length = 0;
const startMsj = document.querySelector('.startMsj');
if (startMsj) {
startMsj.remove();
}
// Habilita todos los avatares nuevamente
const avatars = document.querySelectorAll('.c-characters\_\_item');
avatars.forEach(avatar => {
avatar.style.pointerEvents = 'auto';
});
}

const startButton = document.createElement('button');
startButton.textContent = 'A LUCHAR!';
startButton.addEventListener('click', iniciarBatalla);
document.body.appendChild(startButton);

selectingAvatars();
