const inputElement = document.querySelector('input[type="text"]');
inputElement.addEventListener('focus', function(){
    console.log(inputElement.value);
})