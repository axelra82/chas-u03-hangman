// Tuff non-luck!
const gameOver = () => {
	document.body.innerHTML = '<h1>GAME OVER</h1>';
	disableButtons();
}

// Are you a prodigy or did you just cheat?
const playerWins = () => {
	disableButtons();
	const gameHeader = gameEl.querySelector('h2');
	gameHeader.classList.add('text-center');
	gameHeader.innerHTML = 'YOU DID IT!';
	letterPlaceholders.classList.add('success');
}

// No more buttons for you!
const disableButtons = () => {
	const letterButtons = document.querySelectorAll('ul#letters li button');
	letterButtons.forEach(letterButton => {
		letterButton.setAttribute('disabled', true);
	});
}