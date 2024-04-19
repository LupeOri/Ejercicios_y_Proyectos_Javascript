const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
const listaOrdenada = document.getElementById('pokedex');

const getPokemons = async (url) =>{
    try {
        const response = await fetch(url);
        const pokemonData = await response.json();
        return pokemonData;
    } catch(error) {
        console.log(error);
    }
}

const getPokemonsResult = async () => {
    const pokemons = [];

    for (let i = 1; i <= 150; i++) {
        const baseUrlPokemon = `${baseUrl}${i}`;
        const pokemon = await getPokemons(baseUrlPokemon);
        pokemons.push(pokemon);
    }

    return pokemons;
}

const drawPokemons = async () => {
    try {
        const pokedexElements = await getPokemonsResult();

        for (const pokemon of pokedexElements){
            const li$$ = document.createElement('li');
            li$$.classList = 'card';
            const img$$ = document.createElement('img');
            img$$.src = pokemon.sprites.front_default;
            img$$.alt = pokemon.name;
            img$$.classList = 'card-image';
            li$$.append(img$$);
            const p$$ = document.createElement('p');
            p$$.textContent = pokemon.name;
            p$$.classList = 'card-title';
            li$$.append(p$$);
            const secondp = document.createElement('p');
            secondp.textContent = "Type: " + pokemon.types.map((type) => type.type.name).join(', ');
            secondp.classList = 'card-subtitle';
            li$$.append(secondp);
            const thirdp = document.createElement('p');
            thirdp.textContent = "ID: " + pokemon.id;
            thirdp.classList = 'card-subtitle';
            li$$.append(thirdp);
            listaOrdenada.append(li$$);
        }
    } catch(error) {
        console.log(error);
    }
}

drawPokemons();