Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un console.log(). Para ello, es necesario que crees un .html y un .js.

const getData = async() =>{
    try {
    const response = await fetch(https://api.agify.io?name=michael);
    const data = await response.json();
    return data;
}catch (error){
    console.log("El error es: ,", error)
}
}
getData()
    .then(data => {
        console.log(data);
    });

