const divs = document.querySelectorAll('div');
const div1 = divs[0];
const parrafo = document.createElement('p');
const texto = document.createTextNode('Voy en medio!');
parrafo.append(texto);
div1.after(parrafo);

