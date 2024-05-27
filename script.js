const inputElement = document.getElementById('number');

const containerHolder = document.querySelector('#container')

const displayBtn = document.getElementById('display')


// console.log(containerHolder);


displayBtn.addEventListener('click', function () {
    let pTagElement = document.createElement('p');
    pTagElement.innerText = inputElement.value;
    console.log(pTagElement);
    containerHolder.appendChild(pTagElement);
});


const firstNumber = document.getElementById('first-number');
const secondNumber = document.getElementById('second-number');

const resultContainer = document.getElementById('add-result-container');

const addBtn = document.getElementById('add-btn');


addBtn.addEventListener('click', function () {

    //get value inside the first number input form
    let firstNumberValue = parseInt(firstNumber.value);

    // get value inside the seconde number input form
    let secondNumberValue = parseInt(secondNumber.value);

    let finalAnswer = firstNumberValue + secondNumberValue;

    console.log(finalAnswer);

});



