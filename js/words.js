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
			'lie',
			'gem',
			'jam',
			'cup',
			'ash',
			'fun',
			'hay',
			'fan',
			'kid',
			'ton',
		];
		break;

	case 'medium':
		maxClick = 6;
		wordArray = [
			'biography',
			'glimpse',
			'rhetoric',
			'circulation',
			'dividend',
			'stuff',
			'sequence',
			'abortion',
			'diagram',
			'attraction',
		];
		break;

	case 'hard':
		maxClick = 3;
		wordArray = [
			'execution',
			'advertising',
			'calendar',
			'depressed',
			'attachment',
			'mechanical',
			'anticipation',
			'sickness',
			'brilliance',
			'terminal',
		];
		break;

	default:
		break;
}

// Show initial guess count
const guessesCountEl = document.querySelector('body section#game h2 span.guesses-left');
const guessesWordEl = document.querySelector('body section#game h2 span.sing-plur');
guessesCountEl.innerHTML = maxClick;

// Get random word from word array
const randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];

// Create array of letters from random word using split
const lettersArray = randomWord.split('');

const letterPlaceholders = document.querySelector('ul#secretWord');
lettersArray.forEach(() => {
	const liEl = document.createElement('li');
	liEl.classList.add('secret');
	letterPlaceholders.appendChild(liEl);
});