const divContainer = document.querySelector('[data-fn="characters"]');
let page = 1;

async function getData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error en la petición");
  }
  return response.json();
}

async function avatarsApp() {
  try {
    const urlPerPage = `http://localhost:3000/characters?_page=${page}&_limit=5`;
    const avatars = await getData(urlPerPage);

    for (let avatar of avatars) {
      const divAvatar = document.createElement("div");
      const parrafo = document.createElement("p");
      parrafo.textContent = avatar.name;
      const img = document.createElement("img");
      img.src = avatar.image;
      img.alt = avatar.name;
      divAvatar.appendChild(parrafo);
      divAvatar.appendChild(img);
      divContainer.appendChild(divAvatar);
    }

    if (page < 4) {
      const cargarBoton = document.createElement("button");
      cargarBoton.textContent = "Cargar más";
      cargarBoton.addEventListener("click", async () => {
        try {
          page++;
          const nextPageUrl = `http://localhost:3000/characters?_page=${page}&_limit=5`;
          const moreAvatars = await getData(nextPageUrl);
          for (let avatar of moreAvatars) {
            const divAvatar = document.createElement("div");
            const parrafo = document.createElement("p");
            parrafo.textContent = avatar.name;
            const img = document.createElement("img");
            img.src = avatar.image;
            img.alt = avatar.name;
            divAvatar.appendChild(parrafo);
            divAvatar.appendChild(img);
            divContainer.appendChild(divAvatar);
          }
          if (page === 4) {
            cargarBoton.style.display = "none";
          }
        } catch (error) {
          console.error(error);
        }
      });
      divContainer.appendChild(cargarBoton);
    }
  } catch (error) {
    console.error(error);
  }
}

avatarsApp();
