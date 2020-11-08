// Tuff non-luck!
const gameOver = () => {

	// Set the record straight
	lettersArray.forEach(letter => {
		placeholderToLetter(letter);
	});

	changeLayout(
		'GAME OVER!',
		`${hasTimer ?
			`Time's up!`
			:
			`Sorry, no dice.`
		} <strong>The word was</strong>`,
		'lose',
	);
}

// Are you a prodigy or did you just cheat?
const playerWins = () => {
	changeLayout(
		'YOU WIN!',
		'Great success',
		'win',
	);
}

const changeLayout = (header, message, state) => {
	// Scroll to top of in game session view so player can se what's
	// going on. Extra important for smaller screens, but nice either way
	gameEl.scrollIntoView({
		behavior: 'smooth'
	});

	disableButtons();
	// If timer is active, reset and hide
	if (hasTimer) {
		timer.reset();
		timerEl.classList.add('hide');
		timerEl.textContent = '';
	}

	// Hide in game top since game is over
	gameTopEl.classList.add('hide');

	const gameHeader = gameEl.querySelector('h2');
	gameHeader.classList.add('text-center');
	gameHeader.classList.add('mt-2');
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
	}
	if (state === 'lose') {
		userAction = confirm(`That's the spirit! Remember the word (${randomWord}), it might come up again.`);
	}
	if (state === 'inGame') {
		// Only for the tuffest
		if (hasTimer) {
			timer.pause();
		}

		// Wait and see approach
		userAction = confirm(`Are you sure, or was this just an "oopsy" press? Press "OK" to restart the game.`);

		// Only for the tuffest
		if (hasTimer && !userAction) {
			timer.resume();
		}
	}
	if (userAction) {
		// That's a go, let's reload page
		location.reload();
	}
}