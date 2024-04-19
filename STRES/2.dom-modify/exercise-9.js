const divs = document.querySelectorAll(".fn-insert-here");

for (let div of divs) {
  const paragraph = document.createElement("p");
  const text = document.createTextNode("Voy dentro!");
  newText = paragraph.append(text);
  const divAndText = div.append(paragraph);
}

console.log(divs);
