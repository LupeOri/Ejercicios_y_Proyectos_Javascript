/*

EXTRA

1. 

Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías
de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse.
Para filtrar las categorías puedes ayudarte de la función `.includes()`.

```js
const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
```
*/
const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

const categoriesList = [];

for (const movie of movies) {
  for (const category of movie.categories) {
    if (categoriesList.includes(category)) {
      continue;
    }
    categoriesList.push(category);
  }
}

console.log(categoriesList);

/*
2.

Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen
 los usuarios.

```js
const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
```
*/

const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

let totalVolume = 0;
let count = 0;

for (const user of users) {
  const sounds = user.favoritesSounds;

  for (const sound in sounds) {
    const numberVolume = sounds[sound].volume;
    totalVolume += numberVolume;
    count++;
  }
}
console.log(totalVolume / count);

/*
3.

Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a
favorito. Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para
comprender que hay muchas formas de hacer las cosas en javascript.

```js
const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
```
COMENTARIO: ESTE EJERCICIO LO DEJE PARA EL FINAL Y ME PASO LO MISMO QUE EN EL DE LOS DADOS, NO SE SI INTERPRETO BIEN LO QUE PIDE EL EJERCICIO. 
HE CREADO UN CONTADOR QUE SUME LA CANTIDAD DE VECES QUE ESTA CADA SONIDO FAVORITO (WAVES, RAIN, ETC), SI EL SONIDO O CLAVE  YA ESTA LO SUMA, SINO 
QUEDA EN 1.

*/

const users2 = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

const soundCount = {};

for (const user2 of users2) {
  const sounds2 = user2.favoritesSounds;

  for (const favoriteSound2 in sounds2) {
    if (soundCount[favoriteSound2]) {
      soundCount[favoriteSound2]++;
    } else {
      soundCount[favoriteSound2] = 1;
    }
  }
}

for (const sound2 in soundCount) {
  console.log(sound2+ ": " + soundCount[sound2] + "veces");
};

/*
4.A)

Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la 
posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.

Sugerencia de función:

```js
function findArrayIndex(array, text) {}
```

Ej array:
````js
['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
*/

let animals = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return "el texto no coincide";
}

console.log(findArrayIndex(animals, "Mosquito"));
console.log(findArrayIndex(animals, "Delfin"));

/*
4.B)

Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada 
`removeItem` que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) 
llame a la función anteriormente creada ``findArrayIndex`` y obten el indice para posteriormente usar la función de 
javascript ``.splice()`` para eliminar el elemento del array. Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.
*/

function removeItem(array, text) {
  const iRemoveElement = findArrayIndex(array, text);

  if (iRemoveElement >= 0) {
    array.splice(iRemoveElement, 1);
  }

  return array;
}

console.log(removeItem(animals, "Caracol"));

/*
5.

Crea una función llamada ``rollDice()`` que reciba como parametro el numero de caras que queramos que tenga el dado 
que deberá silumar el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular 
una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! busca 
información sobre la función de javascript ``Math.random()``
*/

/*
COMENTARIO: NO SE SI ENTENDI LO QUE SE PIDE EN EL EJERCICIO, HE INTENTADO CEAR UNA FUNCION QUE SEGUN UN NUMERO DE CARAS EN UNA 
TIRADA DEVUELVA UN NUMERO X QUE PUEDA VARIAR EN CADA TIRADA. BUSQUE MATH RANDOM Y TRAE NUMEROS DEL 0 AL 1 SIN INCLUIR 
EL UNO, LO MULTIPLIQUE POR LAS CARAS Y SUME 1 PORQUE SINO SIEMPRE SERA MENOR QUE 1. Y USE MATH FLOOR PARA REDONDEAR 
HACIA ABAJO Y QUE DE UN NUMERO ENTERO*/

function rollDice(caras) {
  const resultado = Math.floor(Math.random() * caras + 1);
  return resultado;
}
console.log(rollDice(6));
/*
6.

Crea una función llamada ``swap`` que reciba un array y dos parametros que sean indices del array. La función deberá 
intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array 
resultante.

Sugerencia de array:
````js
['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']
````
*/

const names = [
  "Mesirve",
  "Cristiano Romualdo",
  "Fernando Muralla",
  "Ronalguiño",
];

function swap(arrayX, i, j) {
  if (0 <= i && i < arrayX.length && 0 <= j && j < arrayX.length) {
    arrayX.splice(i, 1, arrayX[j]);
    arrayX.splice(j, 1, arrayX[i]);
    return arrayX;
  }
}

console.log(swap(names, 2, 1));
