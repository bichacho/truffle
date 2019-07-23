console.log('main2.js');
var ethJSABI = require("ethjs-abi");
var BlockchainUtils = require("truffle-blockchain-utils");
var Web3 = require("web3");


var nomList = document.getElementById('nomList');
var final = document.querySelector('.final');
var voteBtn = document.querySelector('.voteBtn');
var resultList = document.querySelector('.resultList')



voteBtn.addEventListener('click', setVote);

var nomArray = JSON.parse(localStorage.getItem('nomsArray'));
const timerValue = localStorage.getItem('timerValue');
localStorage.setItem('timerValue', 0); // clear storage

renderNoms(nomArray);

// on vote
function setVote() {
	var name = nomList.value;
	var person = nomArray.find(function(nom) {
		return nom.name === name;
	});
	if (person) {
		console.log(person);
		person.votes++;
	}
	
	console.log('person', person);
}

function sortByVotes() {
	// console.log('sort', nomArray);
	nomArray = nomArray.sort(function(a, b) {
		return b.votes - a.votes;
	});

	// console.log('sort2', nomArray);
}

function renderResult() {
   sortByVotes();
   console.log('before render',nomArray)
   for( var nom of nomArray ){
      var li = document.createElement('li');
		li.innerHTML = nom.name;
		resultList.appendChild(li);
   }
}

function renderNoms(noms) {
	for (var nom of noms) {
		var option = document.createElement('option');
		option.text = nom.name;
		option.value = nom.name;
		nomList.appendChild(option);
	}
}

// Set the date we're counting down to
 var countDownDate = 1000 * 60 * timerValue || 1000 * 60 * 5; //real time
//var countDownDate = 1000 * 30;

// Update the count down every 1 second
var x = setInterval(function() {
	// Time calculations for days, hours, minutes and seconds
	var hours = Math.floor((countDownDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((countDownDate % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((countDownDate % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	document.getElementById('clock').innerHTML = hours + 'h ' + minutes + 'm ' + seconds + 's ';

	// If the count down is over, write some text
	if (!countDownDate) {
		clearInterval(x);
		document.getElementById('clock').innerHTML = 'הצבעה הסתיימה';
		final.style.display = 'block';
		renderResult();
	}

	countDownDate -= 1000;
}, 1000);
