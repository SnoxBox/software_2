'use strict';
const input = document.getElementById("calculation").value.trim();

const numbers = input.split(/[\+\-\*\/]/);
const operator = input.replace(/[0-9]/g, "").trim();

const start = document.getElementById('start');
const resText = document.getElementById('result');

start.addEventListener('click', function() {
    let result;
    resText.innerHTML = '';
	switch (operator) {
		case "+":
			result = Number(numbers[0]) + Number(numbers[1]);
			break;
		case "-":
			result = Number(numbers[0]) - Number(numbers[1]);
			break;
		case "*":
			result = Number(numbers[0]) * Number(numbers[1]);
			break;
		case "/":
			result = Number(numbers[0]) / Number(numbers[1]);
			break;
		default:
			result = "Invalid input";
        }
    resText.innerHTML = "Result: " + result;
})

