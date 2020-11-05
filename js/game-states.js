// Tuff non-luck!
const gameOver = () => {
	disableButtons();
	changeLayout('GAME OVER!', 'lose');
}

// Are you a prodigy or did you just cheat?
const playerWins = () => {
	disableButtons();
	changeLayout('YOU DID IT!', 'success');
}

const changeLayout = (header, listClass) => {
	const gameHeader = gameEl.querySelector('h2');
	gameHeader.classList.add('text-center');
	gameHeader.innerHTML = header;
	letterPlaceholders.classList.add(listClass);
}
// No more buttons for you!
const disableButtons = () => {
	const letterButtons = document.querySelectorAll('ul#letters li button');
	letterButtons.forEach(letterButton => {
		letterButton.setAttribute('disabled', true);
	});
}