const alphabet = 'abcdefghijklmnopqrstuvwxyzåäö'.split('');
const letterBox = document.querySelector('#letters');

const ulEl = document.createElement('ul');
letterBox.appendChild(ulEl);

alphabet.forEach(letter => {
	const liEl = document.createElement('li');
	liEl.innerHTML = letter;
	ulEl.appendChild(liEl);
});

const wordArray = [
	'Stol',
	'Flygplats',
	'Axelkudde',
	'Konservöppnare',
	'pseudopseudohypoparathyroidism'
];

const wordBox = document.querySelector('#word');

wordBox.innerHTML = wordArray[Math.floor(Math.random() * wordArray.length)];