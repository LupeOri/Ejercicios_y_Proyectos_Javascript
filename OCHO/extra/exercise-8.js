const body$$ = document.querySelector('body');
const baseUrl = 'https://api.thecatapi.com/v1/images/search';
const button$$ = document.createElement('button');

button$$.textContent = 'Call a cat';
button$$.addEventListener('click', async () => {
    const fetchCatImage = async () => {
        try {
            const response = await fetch(baseUrl);
            const data = await response.json();
            catsImages(data);
        } catch (error) {
            console.log(error);
        }
    };
    fetchCatImage();
});

function catsImages(data) {
    const imgCat = data[0].url;
    const img$$ = document.createElement('img');
    img$$.src = imgCat;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', () => {
        body$$.removeChild(img$$);
        body$$.removeChild(deleteButton);
    });

    body$$.appendChild(img$$);
    body$$.appendChild(deleteButton);
}

body$$.appendChild(button$$);

/* LA API DE PELICULAS PARA LA SEGUNDA PARTE DEL EJERCICIO ME DA ERROR, AL IGUAL QUE LA DE BREAKING BAD DEL EJERCICIO 1*/




    




