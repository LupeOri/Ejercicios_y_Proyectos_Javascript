const inputElement = document.querySelector('input[type="text"]');
inputElement.addEventListener('input', function(){
    console.log(inputElement.value);
})