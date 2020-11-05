// Tuff non-luck!
const gameOver = () => {
	disableButtons();
	changeLayout('GAME OVER!', 'Sorry, no dice. The word we were looking for was', 'lose');

	// Set the record straight
	lettersArray.forEach(letter => {
		placeholderToLetter(letter);
	});
}

// Are you a prodigy or did you just cheat?
const playerWins = () => {
	disableButtons();
	changeLayout('YOU WIN!', 'Great success.', 'win');
}

const changeLayout = (header, message, listClass) => {
	const gameHeader = gameEl.querySelector('h2');
	gameHeader.classList.add('text-center');
	gameHeader.innerHTML = header;

	const gameParagraph = document.createElement('p');
	gameParagraph.classList.add('text-center');
	gameParagraph.innerHTML = message;

	const replayButtonEl = document.createElement('button');
	replayButtonEl.innerHTML = 'Replay';

	insertElementAfter(gameHeader, gameParagraph);
	insertElementAfter(letterPlaceholders, replayButtonEl);

	letterPlaceholders.classList.add(listClass);

	replayButtonEl.addEventListener('click', () => {
		resetGame();
	});
}

// Insert new element after existing one (not appendChild)
const insertElementAfter = (parentEl, newEl) => {
	parentEl.parentNode.insertBefore(newEl, parentEl.nextSibling);
}

// No more buttons for you!
const disableButtons = () => {
	const letterButtons = document.querySelectorAll('ul#letterButtons li button');
	letterButtons.forEach(letterButton => {
		letterButton.setAttribute('disabled', true);
	});
}
const resetGame = () => {
	alert('- Reset will happen here -');
}