// Allowed trials
const maxClick = 5;

// Click counters
let wrongCount = 0;
let correctCount = 0;

// Set up array of words
const wordArray = [
	// 'stol',
	// 'flygplats',
	'axelkudde',
	// 'konservöppnare',
	// 'pseudopseudohypoparathyroidism'
];

// Get random word from word array
const randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];

// Create array of letters from random word using split
const lettersArray = randomWord.split('');

const letterPlaceholders = document.querySelector('ul#secretWord');
lettersArray.forEach(() => {
	const liEl = document.createElement('li');
	liEl.innerHTML = '_';
	letterPlaceholders.appendChild(liEl);
});

// –––––––––––––––––––––––––––––––––––––––––

// Create alphabet and create array using split
const alphabet = 'abcdefghijklmnopqrstuvwxyzåäö'.split('');

// Get alphabet UL element from document
const alphabetList = document.querySelector('#letters');

// Loop each letter in alphabet
alphabet.forEach(letter => {

	// Create list item element
	const liEl = document.createElement('li');
	const buttonEl = document.createElement('button');

	// Add letter from alphabet
	// to list item element
	buttonEl.innerHTML = letter;

	// Add new list item with letter
	// to existing alphabet list
	liEl.appendChild(buttonEl);
	alphabetList.appendChild(liEl);

	// Add click event listner for each letter
	buttonEl.addEventListener('click', () => {

		// Button is clicked, don't be a jerk!
		// Disable and remove listener
		buttonEl.setAttribute('disabled', 'true');
		buttonEl.removeEventListener;

		// Check if clicked letter exists in word letter array
		if (lettersArray.includes(letter)) {

			const placeHolderItems = letterPlaceholders.querySelectorAll('li');
			lettersArray.forEach((l, i) => {
				if (l === letter) {
					// YEAY!
					// Increase correct count by one (1)
					correctCount++;
					placeHolderItems[i].innerHTML = letter;
				}
			});

			if (correctCount === lettersArray.length) {
				youWin();
			}

			console.log(`Keep going! You have ${maxClick - wrongCount} chances left`);
		} else {
			// No dice!
			// Increase wrong count by one (1)
			wrongCount++;
			if (wrongCount === maxClick) {
				gameOver();
			} else if (wrongCount < maxClick - 1) {
				console.log(`Ooops! That's ok... You still have ${maxClick - wrongCount} chances left`);
			} else {
				console.log(`Ooh.. Last chance!`);
			}
		}

	});
});

// Tuff non-luck!
const gameOver = () => {
	document.body.innerHTML = '<h1>GAME OVER</h1>';
	disableButtons();
}

// Are you a prodigy or did you just cheat?
const youWin = () => {
	document.body.innerHTML = '<h1>YOU WIN!</h1>';
	disableButtons();
}

// No more buttons for you!
const disableButtons = () => {
	const letterButtons = document.querySelectorAll('ul#letters li button');
	letterButtons.forEach(letterButton => {
		letterButton.setAttribute('disabled', true);
	});
}