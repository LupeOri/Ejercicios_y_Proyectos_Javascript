const input = document.querySelector('[type="text"]');
const button = document.querySelector(".btn-add");
const ulVacio = document.querySelector('.li-container ul');
const emptyDiv = document.querySelector('.empty');
const tareas = [];

button.addEventListener('click', (elemento) => {
    elemento.preventDefault();
    const inputValue = input.value.trim();
    if (inputValue.length > 0) {
        const nuevaTarea = document.createElement('li');
        nuevaTarea.textContent = inputValue;
        ulVacio.appendChild(nuevaTarea);
        tareas.push(nuevaTarea);
        input.value = '';
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.className = "deleteButton"
        nuevaTarea.appendChild(deleteButton);
        emptyDiv.remove();
        deleteButton.addEventListener('click', () => {
            const confirmar = confirm("¿Seguro que deseas eliminar tu tarea?");
            if (confirmar) {
                nuevaTarea.remove();
                deleteButton.remove();
            }
        });
        if (tareas.length >= 1) {
            emptyDiv.remove();
        } else {
            emptyDiv.style.display = "none";
        }
    }
});