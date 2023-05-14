'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

console.log(students.length)

const targetElement = document.getElementById("target");

for (let i = 0; i < students.length; i++) {
  const newOption = document.createElement("option");
  newOption.setAttribute('value', students[i].id);
  newOption.textContent = students[i].name;
  targetElement.appendChild(newOption);
}

targetElement.appendChild(targetElement);