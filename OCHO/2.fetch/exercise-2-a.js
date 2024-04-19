const baseUrl = 'https://api.nationalize.io?name=';
const button =  document.querySelector('button');

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
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
});