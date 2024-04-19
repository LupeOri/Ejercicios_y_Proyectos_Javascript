const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 
const colors2 = [...colors];

colors2.splice(2, 1);
console.log(colors2);