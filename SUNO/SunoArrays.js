/*
ARRAYS

1. Consigue el valor "Volvo" del array de cars y muestralo por consola.

*/

const cars = ["Saab", "Volvo", "BMW"];
console.log(cars[1]);

/*
2. Cambia el primer elemento de cars a "Ford"
*/

cars[0] = "Ford";
console.log(cars);

/*
3. Alerta el numero de elementos en el array usando la propiedad correcta de Array.
*/

console.log(cars.length); /*(NO PUEDO USAR ALERT EN NODE PERO SERIA alert(cars.length);)

/*
4. Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array
*/

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters[4]);


/*
5. Elimina el último elemento del array y muestra el primero y el último por consola. (HE CAMBIADO EL NOMBRE DE LA CONST PARA QUE NO ME DE ERROR YA QUE ES IGUAL AL NOMBRE DEL ANTERIOR EJERCICIO)
*/

const RickAndMortyCharacter = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

RickAndMortyCharacter.pop();
console.log(RickAndMortyCharacter[0]);
console.log(RickAndMortyCharacter[4]);

/*
6. Elimina el segundo elemento del array y muestra el array por consola. (HE CAMBIADO EL NOMBRE DE LA CONST PARA QUE NO ME DE ERROR YA QUE ES IGUAL AL NOMBRE DEL ANTERIOR EJERCICIO)
*/

const RickMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

RickMortyCharacters.splice(1, 1);
console.log(RickMortyCharacters);

