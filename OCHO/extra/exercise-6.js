const baseUrl = "http://localhost:3000/characters";
const divCharacters = document.querySelector('[data-function="characters"]');
const avatarsSelected = [];
let jugador1Vitalidad = 0;
let jugador2Vitalidad = 0;

const getData = async () => {
  const response = await fetch(baseUrl);
  if (!response.ok) {
    throw new Error("Error al obtener los datos");
  }
  return response.json();
};

async function selectingAvatars() {
  try {
    const personajes = await getData();
    for (let personaje of personajes) {
      const avatarDiv = document.createElement("div");
      const avatarName = document.createElement("p");
      avatarName.textContent = personaje.name;
      const img = document.createElement("img");
      img.src = personaje.avatar;
      img.alt = personaje.id;
      const estadistics = document.createElement("p");
      estadistics.textContent = personaje.damage.join(", ");
      avatarDiv.appendChild(avatarName);
      avatarDiv.appendChild(img);
      avatarDiv.appendChild(estadistics);

      avatarDiv.addEventListener("click", () => {
        if (
          avatarsSelected.length < 2 &&
          !avatarsSelected.includes(personaje)
        ) {
          avatarsSelected.push(personaje);
          avatarDiv.style.pointerEvents = "none";
        }
        if (avatarsSelected.length === 2) {
          const startMsj = document.createElement("p");
          startMsj.className = "startMsj";
          startMsj.textContent =
            'Ya tienes tus dos Avatars, es hora de comenzar! Presiona "A LUCHAR!" abajo ↓';
          document.body.appendChild(startMsj);
        }
      });
      divCharacters.appendChild(avatarDiv);
    }
  } catch (error) {
    console.error("Error al obtener los datos de los personajes:", error);
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
    const [numDados, caras] = dice.split("d").map(Number);
    for (let i = 0; i < numDados; i++) {
      totalDamage +=
        (Math.floor(Math.random() * caras) + 1) * (avatar.critic ? 2 : 1);
    }
  }
  return totalDamage;
}

function atacar(jugador, damage1, damage2) {
  const adversario = jugador === 1 ? 2 : 1;
  const adversarioVitalidad =
    adversario === 1 ? jugador2Vitalidad : jugador1Vitalidad;

  const nuevoVitalidad =
    adversarioVitalidad - (jugador === 1 ? damage1 : damage2);
  if (adversario === 1) {
    jugador2Vitalidad = nuevoVitalidad;
  } else {
    jugador1Vitalidad = nuevoVitalidad;
  }

  console.log(
    `El jugador ${jugador} inflige ${
      adversario === 1 ? damage1 : damage2
    } puntos de daño al jugador ${adversario}.`
  );
  console.log(
    `La vitalidad restante del jugador ${adversario} es ${nuevoVitalidad}.`
  );

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
  const startMsj = document.querySelector(".startMsj");
  if (startMsj) {
    startMsj.remove();
  }

  const avatars = document.querySelectorAll(".c-characters__item");
  avatars.forEach((avatar) => {
    avatar.style.pointerEvents = "auto";
  });
}

const startButton = document.createElement("button");
startButton.textContent = "A LUCHAR!";
startButton.addEventListener("click", iniciarBatalla);
document.body.appendChild(startButton);

selectingAvatars();
