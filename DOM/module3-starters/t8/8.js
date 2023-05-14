'use strict';

const operation = document.getElementById('operation');
const calc = document.getElementById('start');
const resText = document.getElementById('result');

const num1 = Number(document.getElementById('num1').value);
const num2 = Number(document.getElementById('num2').value);

const operationValue = operation.value;

calc.addEventListener('click', function() {
    console.log(operationValue);
    resText.innerHTML = '';
    let result;
	switch (operationValue) {
		case "add":
			result = num1 + num2;
			break;
		case "sub":
			result = num1 - num2;
			break;
		case "multi":
			result = num1 * num2;
			break;
		case "div":
			result = num1 / num2;
			break;
		default:
			result = "Invalid operation";
        }
    resText.innerHTML = "Result: " + result;
})

