
const submitBtn = document.getElementById('submit');

const firstName = document.querySelector('input[name="firstname"]').value;
const lastName = document.querySelector('input[name="lastname"]').value;

document.getElementById("target").innerHTML = '';

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById("target").innerHTML = "Your name is " + firstName + " " + lastName;
})