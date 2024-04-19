
const body$$ = document.querySelector('body');
const baseUrl = 'https://breakingbadapi.com/api/characters';

const getCharacters = async () => {
    try {
        const response = await fetch(baseUrl);
        const characters = await response.json();
        return characters;
    } catch (error) {
        console.error(error);
    }
}

const visualCharacters = async () => {
    const characters = await getCharacters();
    const charactersFiltered = characters.filter((character) => character.name && character.img);

    charactersFiltered.forEach((character) => {
        const div_uno = document.createElement('div');
        const div_dos = document.createElement('div');
        
        const img$$ = document.createElement('img');
        img$$.src = character.img;
        img$$.alt = character.name;

        const name$$ = document.createElement('p');
        name$$.textContent = character.name;

        div_uno.appendChild(img$$);
        div_dos.appendChild(name$$);

        body$$.appendChild(div_uno);
        body$$.appendChild(div_dos);
    });
};

visualCharacters();

LA URL NO FUNCIONA