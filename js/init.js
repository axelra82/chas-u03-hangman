// Preloading images will result in better UX
const preloadImages = () => {
	for (i = 0; i < 12; i++) {
		const assets = `/assets/graphics/stages/${i}.svg`;
		new Image().src = !isGitHub ? `${assets}` : `/${myRepo}${assets}`;
	}
}
preloadImages();

// Initiate intro and game elements
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

// In game top section
const gameTopEl = document.querySelector('div#top');

// Current stage graphic element
const currentStage = gameTopEl.querySelector('#current-stage');

// Some global variables
let gameLevel = null;
let hasTimer = false;
let timer;

// Loop all difficulty level buttons
const difficultyEls = introSectionEl.querySelectorAll('ul#difficulty li button');
difficultyEls.forEach(button => {

	// Wait and see what the player chooses
	button.addEventListener('click', () => {

		// Initial character graphic
		currentStage.classList.add('player-stage-0');

		// Get string value from button and turn it to integer number
		gameLevel = parseInt(button.value);

		// Someone wants to play tough
		if (gameLevel === 3) {
			// Instantiate timer with two minutes
			timer = new Timer(2);
			timer.start();

			// Set global timer check to true
			hasTimer = true;

			// Wake the dragon
			timerEl.classList.remove('hide');
		}

		// Create script elements once the player has selected a difficulty
		// It's only at this point that we can load everything in the following scripts
		// Since they rely on data from this file that is available to us only once
		// the player has selected difficulty level
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

		// Let the games begin
		gameEl.classList.remove('hide');

		// These sections have done their part
		introSectionEl.remove();
		introArticleEl.remove();
	});
});