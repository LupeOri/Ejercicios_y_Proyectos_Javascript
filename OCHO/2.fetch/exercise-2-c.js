const baseUrl = 'https://api.nationalize.io?name=';
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const inputValue = document.querySelector('input').value;
    const parametroFetch = baseUrl + inputValue;

    fetch(parametroFetch)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            return response.json();
        })
        .then(data => {
            mostrarResultados(data);
        })
        .catch(error => {
            console.error(error);
        });
});

function mostrarResultados(data) {
    const nombre = data.name;
    const countries = data.country;

    for (const country of countries) {
        const porcentaje = country.probability * 100;
        const nacionalidad = country.country_id;

        const parrafo = document.createElement('p');
        parrafo.textContent = `El ${nombre} tiene un ${porcentaje} porciento de ser de ${nacionalidad}`;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "X";
        deleteButton.addEventListener('click', ()=>{
            parrafo.remove();
            deleteButton.remove();
        })
        document.body.appendChild(parrafo);
        document.body.appendChild(deleteButton);
    }
}