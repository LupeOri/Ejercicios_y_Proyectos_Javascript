const baseUrl = "http://localhost:3000/diary";
const body = document.querySelector("body");
const getData = async () => {
  try {
    const response = await fetch(baseUrl);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const getNotes = async () => {
  const notes = await getData();

  notes.sort((a, b) => new Date(a.notes) - new Date(b.notes));

  for (i = 0; i < notes.length; i++) {
    const note = notes[i];
    const noteTitle = note.title;
    const noteDate = note.date;
    const noteDescription = note.description;
    const divNotes = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = noteTitle;
    const date = document.createElement("h5");
    date.textContent = noteDate;
    const description = document.createElement("p");
    description.textContent = noteDescription;
    body.append(divNotes);
    divNotes.append(title);
    divNotes.append(date);
    divNotes.append(description);
    const button = document.createElement("button");
    button.textContent = "Eliminar";
    divNotes.append(button);
    button.addEventListener("click", () => {
      divNotes.remove();
    });
  }
};

getNotes();

/* La primera vez que lo hice

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

*/
