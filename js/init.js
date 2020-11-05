// Init
const introEl = document.querySelector('body section#intro');
const gameEl = document.querySelector('body section#game');

// Let's go
let difficulty = null;
const difficultyEls = document.querySelectorAll('body section#intro ul#difficulty li button');
difficultyEls.forEach(button => {
	button.addEventListener('click', () => {
		difficulty = button.value;

		// Create script elements
		const wordsScriptEl = document.createElement('script');
		const alphaScriptEl = document.createElement('script');
		const eventsScriptEl = document.createElement('script');
		const verifyScriptEl = document.createElement('script');
		const statesScriptEl = document.createElement('script');

		// Add source to elements
		wordsScriptEl.src = "/js/words.js";
		alphaScriptEl.src = "/js/alphabet.js";
		eventsScriptEl.src = "/js/events-listener-key.js";
		verifyScriptEl.src = "/js/verify.js";
		statesScriptEl.src = "/js/game-states.js";

		// Append scripts to body
		document.body.appendChild(wordsScriptEl);
		document.body.appendChild(alphaScriptEl);
		document.body.appendChild(eventsScriptEl);
		document.body.appendChild(verifyScriptEl);
		document.body.appendChild(statesScriptEl);

		gameEl.classList.remove('hide');

		introEl.remove();
	});
});