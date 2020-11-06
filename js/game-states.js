// Tuff non-luck!
const gameOver = (timeout = false) => {

	disableButtons();
	changeLayout(
		'GAME OVER!',
		`${timeout ?
			`Time's up!`
			:
			`Sorry, no dice.`
		} <strong>The word was</strong>`,
		'lose'
	);

	// If timer is active, reset and hide
	if (timeout) {
		clearTimer();
		timerEl.classList.add('hide');
		timerEl.textContent = '';
	}

	// Set the record straight
	lettersArray.forEach(letter => {
		placeholderToLetter(letter);
	});
}

// Are you a prodigy or did you just cheat?
const playerWins = () => {
	disableButtons();
	changeLayout('YOU WIN!', 'Great success', 'win');
}

const changeLayout = (header, message, state) => {
	const gameHeader = gameEl.querySelector('h2');
	gameHeader.classList.add('text-center');
	gameHeader.innerHTML = header;

	const gameParagraph = document.createElement('p');
	gameParagraph.classList.add(state);
	gameParagraph.classList.add('text-center');
	gameParagraph.innerHTML = message;

	const buttonContainerEl = document.createElement('div');
	const replayButtonEl = document.createElement('button');
	replayButtonEl.classList.add('replay');
	replayButtonEl.innerHTML = 'Replay';

	buttonContainerEl.classList.add('text-center');
	buttonContainerEl.appendChild(replayButtonEl);

	insertElementAfter(gameHeader, gameParagraph);
	insertElementAfter(letterPlaceholders, buttonContainerEl);

	letterPlaceholders.classList.add(state);

	replayButtonEl.addEventListener('click', () => {
		resetGame(state);
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
const resetGame = (state) => {
	// Lazy reset. Works
	// Reloads page rather than staing on same difficulty
	// reseting the game and maybe having an option to change difficulty

	let userAction;
	if (state === 'win') {
		userAction = confirm(`Are you sure you don't wan't to bask in your glory a little while longer?`);
	} else {
		userAction = confirm(`That's the spirit! Remember the word (${randomWord}), it might come up again.`);
	}
	if (userAction) {
		location.reload();
	}
}