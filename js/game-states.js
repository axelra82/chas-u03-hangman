// Tuff non-luck!
const gameOver = () => {
	document.body.innerHTML = '<h1>GAME OVER</h1>';
	disableButtons();
}

// Are you a prodigy or did you just cheat?
const youWin = () => {
	gameEl.innerHTML = '<h1>YOU WIN!</h1>';
	disableButtons();
}

// No more buttons for you!
const disableButtons = () => {
	const letterButtons = document.querySelectorAll('ul#letters li button');
	letterButtons.forEach(letterButton => {
		letterButton.setAttribute('disabled', true);
	});
}