/*
1.

Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuario menor de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuario mayor de edad:".
```js
const users = [{name: "Abel", years: 43}, {name: "Maria", years: 18}, {name: "Pedro", years: 14}, {name: "Samantha", years: 32}, {name: "Raquel", years: 16}];
```
*/

const users = [{name: "Abel", years: 43}, {name: "Maria", years: 18}, {name: "Pedro", years: 14}, {name: "Samantha", years: 32}, {name: "Raquel", years: 16}];

for (const nameuser of users) {
  if (nameuser.years < 18) {
    console.log("Usuario menor de edad: " + nameuser.name);
  } else {
    console.log("Usuario mayor de edad: " + nameuser.name);
  }
}

/*
2.

Usa un for para remplazar todas las comidas que no sean veganas con las comidas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.
```js
const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];
```
*/

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Salad", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

for (let i = 0; i < foodSchedule.length; i++) {
  const objFoodSchedule = foodSchedule[i];

  if (objFoodSchedule.isVegan === true) {
    console.log(objFoodSchedule);
  } else {
    const fruta = fruits.shift();
    objFoodSchedule.name = fruta;
    objFoodSchedule.isVegan = true;
  }  
}
console.log(foodSchedule); 

/*
3.
Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, igual o mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.
```js
const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];
```
*/
const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];

let pelipequeña = [];
let pelimediana = [];
let peligrande = [];

let j = 0;

while ( j < movies.length) {
  const objMovie = movies[j];

  if (objMovie.durationInMinutes < 100) {
    pelipequeña.push(objMovie); 
  } else if (objMovie.durationInMinutes >= 100 && objMovie.durationInMinutes < 200) {
    pelimediana.push(objMovie); 
  } else {
    peligrande.push(objMovie); 
  }

  j++;
}

console.log("Peliculas pequeñas:", pelipequeña);
console.log("Peliculas medianas:", pelimediana);
console.log("Peliculas grandes:", peligrande);

/*
4.
Usa un bucle para sumar el total de las ventas (`sellCount`) de todos los productos.
```js
const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];
```
*/

const products2 = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];

let sellCount = 0;
for (let index = 0; index < products2.length; index++) {
    const objProducts2 = products2[index];

    sellCount +=  objProducts2.sellCount;    
}

console.log(sellCount);

/*
5.
Usa un bucle para sumar el total de las ventas (`sellCount`) de todos los productos y mostrar por consola la media de ventas.
```js
const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];
```
*/

console.log(sellCount / products2.length);

/*
6.
Usa un bucle para recorrer el array de peliculas (`movies`) y añade al array `goodProducts` los que tengan más de 20 ventas (`sellCount`) y al array `badProducts` los que tengan menos.
```js
const goodProducts = [];
const badProducts = [];
const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];
```
*/

const goodProducts = [];
const badProducts = [];
const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];

let k = 0;

while (k < products.length) {
    const objProduct = products[k];

    if (objProduct.sellCount > 20) {
        goodProducts.push(objProduct);
    } else {
        badProducts.push(objProduct);
    }

    k++;
}

console.log("Productos con más de 20 ventas:", goodProducts);
console.log("Productos con 20 o menos ventas:", badProducts);
