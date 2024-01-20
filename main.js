const form = document.getElementById('form-number');

let formValid = false;

function numbervalid (numA, numB){
    return numB > numA;
}

form.addEventListener('submit', function(event){
    event.preventDefault(); 

    let numberA = parseFloat(document.getElementById('first-number').value);
    let numberB = parseFloat(document.getElementById('second-number').value);

    const messagesuccess = '<b> O Valor A é menor que o Valor B!</b>';
    const containermessagesuccess = document.querySelector('.success-message');
    
    formValid = numbervalid(numberA, numberB);
    
    if (formValid){
        document.querySelector('.error-message').style.display = 'none';
        containermessagesuccess.innerHTML = messagesuccess;
        containermessagesuccess.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';

        form.reset()

    } else {
        document.querySelector('.error-message').style.display = 'block';
        containermessagesuccess.style.display = 'none';
    }    
})