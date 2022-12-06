'use strict'

const input = document.querySelector('.input');
const operator = document.querySelectorAll('.operator');
const number = document.querySelectorAll('.number');
const result = document.querySelector('.result');
const clear = document.querySelector('.clear');
let resultDisplayed = false;

for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function (event) {
        const currentString = input.innerHTML;
        const lastChar = currentString[currentString.length - 1];

        if (lastChar === '+' || lastChar === '-' || lastChar === '×' ||
            lastChar === '÷' || lastChar === '.') {
            const newString = currentString.substring(0, currentString.length - 1) + event.target.innerHTML;
            input.innerHTML = newString;
        } else if (currentString.length === 0) {
            // if user enter operator as a first symbol, we will return 0
        } else {
            input.innerHTML += event.target.innerHTML;
        }
    })
};

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function (event) {
        const currentString = input.innerHTML;
        const lastChar = currentString[currentString.length - 1];
        if (!resultDisplayed) {
            input.innerHTML += event.target.innerHTML;
        } else if (resultDisplayed && lastChar === '+' || lastChar === '-' || lastChar === '×' ||
            lastChar === '÷') {
            resultDisplayed = false;
            input.innerHTML += event.target.innerHTML;
        } else {
            resultDisplayed = false;
            input.innerHTML += event.target.innerHTML;
        }
    })
};

clear.addEventListener('click', function () {
    input.innerHTML = '';
});

result.addEventListener('click', function () {
    const inputString = input.innerHTML;
    console.log('inputString ---> ', inputString);

    const lastChar = inputString[inputString.length - 1];
    if (resultDisplayed && lastChar === '+' || lastChar === '-' || lastChar === '×' ||
        lastChar === '÷' || lastChar === '.') {
        return null;
    }

    const numbers = inputString.split(/\+|\-|\×|\÷/g);
    console.log('number ---> ', numbers);

    const operators = inputString.replace(/[0-9]|\./g, '').split('');
    console.log('operators ---> ', operators);

    //find the index of first dividing operator
    let divide = operators.indexOf('÷');
    while (divide !== -1) { //do this logic until dividing operator cannot be found in the string
        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]); // find two numbers and divide
        operators.splice(divide, 1); // remove dividing operator from the list of operators
        divide = operators.indexOf('÷'); // find next dividing operator 
    }

    let multiply = operators.indexOf('×');
    while (multiply !== -1) {
        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
        operators.splice(multiply, 1);
        multiply = operators.indexOf('×');
    }

    let substract = operators.indexOf('-');
    while (substract !== -1) {
        numbers.splice(substract, 2, numbers[substract] - numbers[substract + 1]);
        operators.splice(substract, 1);
        substract = operators.indexOf('-');
    }

    let add = operators.indexOf('+');
    while (add !== -1) {
        numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
        operators.splice(add, 1);
        add = operators.indexOf('+');
    }

    input.innerHTML = numbers[0];
    console.log(numbers);
    console.log(input.innerHTML);
    resultDisplayed = true;
});