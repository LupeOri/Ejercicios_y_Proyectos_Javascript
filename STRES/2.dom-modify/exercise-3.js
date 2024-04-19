const div = document.createElement("div");

for (let i = 0; i <= 5; i++) {
  const p = document.createElement("p");
  div.append(p);
}

console.log(div);