/* 

METHODS

 Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

```js
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
```

*/

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

for (let i = 0; i < products.length; i++) {
    if (products[i].includes("Camiseta")) {
        console.log(products[i]);
    }
}

/* 
CONDITIONALS

Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruebalo con un console.log.

```js
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
```
*/

const alumns = [
    { name: 'Pepe Viruela', T1: false, T2: false, T3: true },
    { name: 'Lucia Aranda', T1: true, T2: false, T3: true },
    { name: 'Abel Cabeza', T1: false, T2: true, T3: true },
    { name: 'Alfredo Blanco', T1: false, T2: false, T3: false },
    { name: 'Raquel Benito', T1: true, T2: true, T3: true }
  ];
  
  for (let i = 0; i < alumns.length; i++) {
    const objAlumns = alumns[i];

    let trimestresAprobados = 0;
  
    if (objAlumns.T1) {
      trimestresAprobados++;
    }

    if (objAlumns.T2) {
      trimestresAprobados++;
    }
  
    if (objAlumns.T3) {
      trimestresAprobados++;
    }
  
    if (trimestresAprobados >= 2) {
        objAlumns.isApproved = true;
    } else {
        objAlumns.isApproved = false;
    }
}

console.log(alumns);

/*
LOOPS

1. Usa un bucle forof para recorrer todos los destinos del array. Imprime en un console log sus valores.
```js
const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']
*/

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for (let destinos of placesToTravel){
console.log(destinos);
}


/*
2. Usa un forin para imprimir por consola los datos del alienigena.
```js
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
```
*/
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (let datos in alien){
    console.log(datos + ": " + alien[datos]);
    }

/*
3. 

Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array.
```js
const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]
```
*/
for (let j = 0; j < placesToTravel.length; j++) {
    const objPlace = placesToTravel[j];
    
    if (objPlace.id === 11 || objPlace.id === 40) {
        placesToTravel.splice(j, 1);
    }
}

console.log(placesToTravel);

/*
.4

Usa un bucle forof para recorrer todos los juguetes y elimina los que incluyan la palabra `gato`. Recuerda que puedes usar la función `.includes()` para comprobarlo.
```js
const toys = [{id: 5, name: 'Buzz MyYear'}, {id: 11, name: 'Action Woman'}, {id: 23, name: 'Barbie Man'}, {id: 40, name: 'El gato con Guantes'},{id: 40, name: 'El gato felix'}]
```
*/

const toys = [{id: 5, name: 'Buzz MyYear'}, {id: 11, name: 'Action Woman'}, {id: 23, name: 'Barbie Man'}, {id: 40, name: 'El gato con Guantes'},{id: 40, name: 'El gato felix'}];

for (let eachToy of toys) {
    if (eachToy.name.includes('gato')) {
        toys.splice(toys.indexOf(eachToy), 1);
    }
}

console.log(toys);

/*
5.
Usa un bucle forof para recorrer todos los juguetes y añade los que tengan más de 15 ventas (`sellCount`) al array `popularToys`. Imprimelo por consola.

const popularToys = [];
const toys = [{id: 5, name: 'Buzz MyYear', sellCount: 10}, {id: 11, name: 'Action Woman', sellCount: 24}, {id: 23, name: 'Barbie Man', sellCount: 15}, {id: 40, name: 'El gato con Guantes', sellCount: 8},{id: 40, name: 'El gato felix', sellCount: 35}]
*/

let popularToys = [];
const toys2 = [{id: 5, name: 'Buzz MyYear', sellCount: 10}, {id: 11, name: 'Action Woman', sellCount: 24}, {id: 23, name: 'Barbie Man', sellCount: 15}, {id: 40, name: 'El gato con Guantes', sellCount: 8},{id: 40, name: 'El gato felix', sellCount: 35}]

for (let xToy of toys2) {
    if (xToy.sellCount > 15) {
        popularToys.push(xToy);
    }
}
console.log(popularToys);

