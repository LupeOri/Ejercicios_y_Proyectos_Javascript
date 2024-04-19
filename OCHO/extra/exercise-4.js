const baseUrlPlanets = "http://localhost:3000/planets";
const baseUrlCharacters = "http://localhost:3000/characters";
const planetsDiv = document.querySelector('[data-function="planets"]');
const searchDiv = document.querySelector('[data-function="search"]');
const charactersDiv = document.querySelector('[data-function="characters"]');

async function getData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error en la petición");
  }
  return response.json();
}

async function planetsApp() {
  try {
    const planets = await getData(baseUrlPlanets);

    for (let i = 0; i < planets.length; i++) {
      const planet = planets[i];
      const planetDiv = document.createElement("div");
      const planetNameElement = document.createElement("h3");
      planetNameElement.textContent = planet.name;
      const planetImageElement = document.createElement("img");
      planetImageElement.src = planet.image;
      planetImageElement.alt = planet.name;
      planetDiv.appendChild(planetNameElement);
      planetDiv.appendChild(planetImageElement);
      planetDiv.addEventListener("click", async () => {
        charactersDiv.textContent = "";
        const characters = await getData(
          `${baseUrlCharacters}?idPlanet=${planet.id}`
        );
        for (let j = 0; j < characters.length; j++) {
          const character = characters[j];
          const characterDiv = document.createElement("div");
          const characterNameElement = document.createElement("h2");
          characterNameElement.textContent = character.name;
          const characterAvatarElement = document.createElement("img");
          characterAvatarElement.src = character.avatar;
          characterAvatarElement.alt = character.name;
          characterDiv.appendChild(characterNameElement);
          characterDiv.appendChild(characterAvatarElement);
          characterDiv.addEventListener("click", () => {
            const descriptionParagraph = document.createElement("p");
            descriptionParagraph.textContent = character.description;
            if (!characterDiv.contains(descriptionParagraph)) {
              characterDiv.appendChild(descriptionParagraph);
            } else {
              characterDiv.removeChild(descriptionParagraph);
            }
          });
          charactersDiv.appendChild(characterDiv);
        }
        searcher();
      });
      planetsDiv.appendChild(planetDiv);
    }
  } catch (error) {
    console.error(error);
  }
}

function searcher() {
  const searcherElement = document.createElement("input");
  searcherElement.setAttribute("type", "text");
  searcherElement.setAttribute("placeholder", "Buscar personaje por nombre...");
  searchDiv.appendChild(searcherElement);

  searcherElement.addEventListener("input", () => {
    const searchTerm = searcherElement.value.trim().toLowerCase();
    const characterDivs = charactersDiv.querySelectorAll("div");

    characterDivs.forEach((characterDiv) => {
      const characterName = characterDiv
        .querySelector("h2")
        .textContent.toLowerCase();
      if (characterName.includes(searchTerm)) {
        characterDiv.style.display = "block";
      } else {
        characterDiv.style.display = "none";
      }
    });
  });
}

planetsApp();
