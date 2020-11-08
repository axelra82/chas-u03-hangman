// Init. Intro and game elements
const introSectionEl = document.querySelector('body section#intro-section');
const introArticleEl = document.querySelector('body article#intro-article');
const gameEl = document.querySelector('body section#game');

// Timer element
const timerEl = gameEl.querySelector('div#timer');

// Include timer class
const timerScriptEl = document.createElement('script');
const timerFile = '/js/timer.js';
timerScriptEl.src = !isGitHub ? timerFile : `/${myRepo}${timerFile}`;
document.head.appendChild(timerScriptEl);

// In game restart button div section
const restartEl = document.querySelector('div#restart');
const restartBtnEl = restartEl.querySelector('button');
restartBtnEl.addEventListener('click', () => {
	resetGame('inGame');
});

// Let's go
let difficulty = null;
// let hasTimer = false;
let timer;

const difficultyEls = introSectionEl.querySelectorAll('ul#difficulty li button');
difficultyEls.forEach(button => {
	button.addEventListener('click', () => {
		difficulty = button.value;

		if (difficulty === 'hard') {
			// Instantiate timer with two minutes
			timer = new Timer(2);
			timer.start();
			// initTimer();
		}

		// Create script elements
		const wordsScriptEl = document.createElement('script');
		const alphaScriptEl = document.createElement('script');
		const eventsScriptEl = document.createElement('script');
		const verifyScriptEl = document.createElement('script');
		const statesScriptEl = document.createElement('script');

		// File locations
		const wordsFile = '/js/words.js';
		const alphaFile = '/js/alphabet.js';
		const eventsFile = '/js/events-listener-key.js';
		const verifyFile = '/js/verify.js';
		const statesFile = '/js/game-states.js';

		// Add source to elements
		wordsScriptEl.src = !isGitHub ? wordsFile : `/${myRepo}${wordsFile}`;
		alphaScriptEl.src = !isGitHub ? alphaFile : `/${myRepo}${alphaFile}`;
		eventsScriptEl.src = !isGitHub ? eventsFile : `/${myRepo}${eventsFile}`;
		verifyScriptEl.src = !isGitHub ? verifyFile : `/${myRepo}${verifyFile}`;
		statesScriptEl.src = !isGitHub ? statesFile : `/${myRepo}${statesFile}`;

		// Append scripts to body
		document.body.appendChild(wordsScriptEl);
		document.body.appendChild(alphaScriptEl);
		document.body.appendChild(eventsScriptEl);
		document.body.appendChild(verifyScriptEl);
		document.body.appendChild(statesScriptEl);

		gameEl.classList.remove('hide');

		introSectionEl.remove();
		introArticleEl.remove();
	});
});