'use strict';
const targetElement = document.getElementById("target");
const names = ['John', 'Paul', 'Jones'];

for (let i = 0; i < names.length; i++) {
  const newItem = document.createElement("li");
  newItem.textContent = names[i];
  targetElement.appendChild(newItem);
}

targetElement.appendChild(targetElement);