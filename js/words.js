// Allowed guesses
let maxClick = 0;

// Click counters
let wrongCount = 0;
let correctCount = 0;

// Stop cheaters from finding
// words in source code
const binArr = x => {

	// This is cryptic by design, again, to ward off cheating attempts
	return x.map(c => {
		return window.atob(c);
	});
}

// Set up array of words for random selection
let wordArray = new Array;
switch (gameLevel) {
	case 1:
		maxClick = 12;
		wordArray = ['ZnVy', 'bGF5', 'Y2Fu', 'cm93', 'cmli', 'dGFw'];
		break;

	case 2:
		maxClick = 6;
		wordArray = ['YW11c2U=', 'Z3JhY2U=', 'c2lnaHQ=', 'aGF1bnQ=', 'cGlhbm8=', 'Y2xlcms='];
		break;

	case 3:
		maxClick = 3;
		wordArray = ['ZGlzY291bnQ=', 'cmVnaXN0ZXI=', 'Y2FycmlhZ2U=', 'dGVybWluYWw=', 'Y29uc3RhbnQ=', 'ZGl2aWRlbmQ='];
		break;

	default:
		break;
}
// Make lists usable
wordArray = binArr(wordArray);


// Show initial guess count
const inGameHeadingEl = gameEl.querySelector('h2');
const guessesCountEl = inGameHeadingEl.querySelector('span.guesses-left');
const guessesWordEl = inGameHeadingEl.querySelector('span.sing-plur');
guessesCountEl.innerHTML = maxClick;

// Get random word from word array
const randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];

// Create array of letters from random word using split
const lettersArray = randomWord.split('');

// Create individual buttons in list item for each letter from word
const letterPlaceholders = gameEl.querySelector('ul#secretWord');
lettersArray.forEach(() => {
	const liEl = document.createElement('li');
	liEl.classList.add('secret');
	letterPlaceholders.appendChild(liEl);
});