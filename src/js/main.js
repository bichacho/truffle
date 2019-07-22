console.log('main.js');
var nomArray = [];

const nameInput = document.getElementById('name');
const miflagaInput = document.getElementById('miflaga');
const ageInput = document.getElementById('age');
const addButton = document.getElementById('addNom');
const startButton = document.getElementById('start');
var timerValue = document.getElementById('timerValue');
var pass = document.getElementById('pass');

addButton.addEventListener('click', addNewNom);
startButton.addEventListener('click', startClock);

function addNewNom() {
	const name = nameInput.value;
	const miflaga = miflagaInput.value;
	const age = ageInput.value;

	nameInput.value = '';
	miflagaInput.value = '';
	ageInput.value = '';
	nomArray.push({ name, miflaga, age, votes: 0 });

	console.log(nomArray);
	localStorage.setItem('nomsArray', JSON.stringify(nomArray));
}

function startClock() {
	if (pass.value == '111' && (timerValue.value > 0 && timerValue.value <= 30)) {
		localStorage.setItem('timerValue', timerValue.value);
	}
	window.location.href = './index2.html';
}
