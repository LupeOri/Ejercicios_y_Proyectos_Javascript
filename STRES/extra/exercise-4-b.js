const countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

const container = document.createElement("div");

for (const country of countries) {
  const h4 = document.createElement("h4");
  const img = document.createElement("img");
  const div = document.createElement('div');
  const countryTitle = country.title;
  const countryImgurl = country.imgUrl;
  h4.textContent = countryTitle;
  img.src = countryImgurl;
  div.append(h4);
  div.append(img);
  container.append(div);
}

document.body.append(container);

const deleteButton = document.querySelector('button');
deleteButton.addEventListener('click', function() {
  const divs = container.querySelectorAll('div');
  if (divs.length > 0) {
    const lastDiv = divs[divs.length - 1];
    lastDiv.remove();
  }
});