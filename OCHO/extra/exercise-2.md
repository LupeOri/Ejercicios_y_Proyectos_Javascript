Si tienes windows. Lo primero que tienes que hacer es abrir powerShell como ADMINISTRADOR y ejecutar el comando `Set-ExecutionPolicy Unrestricted`. Elige la opciòn SI y dale a intro. Si tu ordenador está en español La opción SI será escribiendo una `S` y si está en ingles una `Y`.

Ahora vamos a trabajar con JSON SERVER para simular una api. Es muy fácil de usar. Simplemente instálalo de manera global usando el comando `npm i -g json-server` y una vez lo tengas instalado, ejecuta este comando `json-server --watch exercise-2.json` en la posición donde esté el archivo exercise-2.json. Los datos que nos brindará serán los alojados en el archivo exercise-2.json y estarán accesibles por defecto en la url localhost:3000.

Si tienes windows tendrás que ejecutar `set-executionpolicy unrestricted –force` en una terminal abierta como administrador.

Para este ejercicio vamos a obtener y pintar en el html una serie de notas del diario de nuestro queridísimo Eliot. Para ello deberemos ejecutar el comando que comentabamos anteriormente y hacer un .fetch() a la url `http://localhost:3000/diary`.

Una vez tengas los datos tenemos que ordenarlos por fecha de menor a mayor con la propiedad .date. Nuestro carismático personaje es un poco caótico y escribe las notas en páginas salteadas...

Cuando lo tengas crea un div para cada nota del diario e introduce un `<h3>`, un `<h5>` y un `<p>` para su .title, .date y .description respectivamente.

Finalmente añade un botón para poder eliminar las notas del diario. En concreto hay una que a Eliot no le apetece recordar mucho...

const baseUrl = 'http://localhost:3000/diary';
const fetchUrl = async() => {
try{
const response = await fetch(baseUrl);
const data = await response.json();
const processedData = dataProcessor(data);
createElements(processedData);
} catch(error){
console.log(error);
}
};

function dataProcessor(data){
return data.sort((a, b) => new Date(a.date) - new Date(b.date));
}
function createElements(processedData){
for (const dataElement of processedData){
const div$$ = document.createElement('div');
const title$$ = document.createElement('h3');
title$$.textContent = dataElement.title;
        const date$$ = document.createElement('h5');
date$$.textContent = dataElement.date;
        const description$$ = document.createElement('p');
description$$.textContent = dataElement.description;
        div$$.appendChild(title$$);
        div$$.appendChild(date$$);
        div$$.appendChild(description$$);
        document.body.appendChild(div$$);
const button$$ = document.createElement('button');
button$$.textContent = 'X'
        button$$.addEventListener('click', ()=>{
div$$.remove();
            button$$.remove();
})
div$$.appendChild(button$$);

    }

}

fetchUrl();
