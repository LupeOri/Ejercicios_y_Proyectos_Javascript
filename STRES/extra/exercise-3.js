const div = document.querySelector('[data-function="printHere"]');
const ul = document.createElement('ul');

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

for(const car of cars){
    const li = document.createElement('li');
    li.textContent = car;
    ul.append(li);
}

div.append(ul);