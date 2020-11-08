// Allowed trials
let maxClick = 0;

// Click counters
let wrongCount = 0;
let correctCount = 0;

// Set up array of words
let wordArray = new Array;

switch (difficulty) {
	case 'easy':
		maxClick = 12;
		wordArray = [
			'fur',
			'lay',
			'can',
			'row',
			'rib',
			'tap',
		];
		break;

	case 'medium':
		maxClick = 6;
		wordArray = [
			'amuse',
			'grace',
			'sight',
			'haunt',
			'piano',
			'clerk',
		];
		break;

	case 'hard':
		maxClick = 3;
		wordArray = [
			'discount',
			'register',
			'carriage',
			'terminal',
			'constant',
			'dividend',
		];
		break;

	default:
		break;
}

// Show initial guess count
const inGameHeadingEl = gameEl.querySelector('h2');
const guessesCountEl = inGameHeadingEl.querySelector('span.guesses-left');
const guessesWordEl = inGameHeadingEl.querySelector('span.sing-plur');
guessesCountEl.innerHTML = maxClick;

// Get random word from word array
const randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];

// Create array of letters from random word using split
const lettersArray = randomWord.split('');

const letterPlaceholders = gameEl.querySelector('ul#secretWord');
lettersArray.forEach(() => {
	const liEl = document.createElement('li');
	liEl.classList.add('secret');
	letterPlaceholders.appendChild(liEl);
});