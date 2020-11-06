// Init. Intro and game elements
const introSectionEl = document.querySelector('body section#intro-section');
const introArticleEl = document.querySelector('body article#intro-article');
const gameEl = document.querySelector('body section#game');

// Timer element
const timerEl = gameEl.querySelector('div#timer');

// Let's go
let difficulty = null;
let timer = false;

const difficultyEls = introSectionEl.querySelectorAll('ul#difficulty li button');
difficultyEls.forEach(button => {
	button.addEventListener('click', () => {
		difficulty = button.value;

		if (difficulty === 'hard') {
			initTimer();
		}

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

		introSectionEl.remove();
		introArticleEl.remove();
	});
});

const runTimer = (time, minute, second, init, diff, minutes, seconds) => {

	// Number of seconds passed since timer started
	diff = time - (((Date.now() - init) / second) | 0);

	// Set remaining time variables
	minutes = parseInt(diff / minute);
	seconds = parseInt(diff % minute);

	// Check what to display
	const minSingPlur = minutes < 2 ? 'minute' : 'minutes';
	const secSingPlur = seconds < 2 ? 'second' : 'seconds';

	const timeLeft = minutes < 1 ? `${seconds} ${secSingPlur}` : seconds !== 0 ?
		`${minutes} ${minSingPlur} ${seconds} ${secSingPlur}`
		:
		`${minutes} ${minSingPlur}`;

	timerEl.textContent = `${timeLeft} remaining`

	// If the differens between total time and current time
	// is less than or equal to zero (0) we need to do some things
	if (diff === 0) {
		// Initilize with full time, i.e. include initial second
		init = Date.now() + second;

		// Run game over scenario
		// with timer opotion
		gameOver(true);
	}
};

const startTimer = (run) => {
	return {
		start: setInterval(run, 1000),
	}
}

const clearTimer = () => {
	clearInterval(startTimer.start);
}
const initTimer = () => {

	//Show timer
	timerEl.classList.remove('hide');

	const second = 1000; // One second in milliseconds
	const minute = 60; // One minute in seconds
	const time = minute * 2;

	// Initiate some useful timer variables
	let init = Date.now(),
		diff,
		minutes,
		seconds;

	// Since we don't want to wait a full second before
	// the timer starts we call timer function once now
	const runOnce = () => runTimer(time, minute, second, init, diff, minutes, seconds);
	runOnce();

	// And then initiate interval for timer function
	startTimer(() => runOnce()).start;
}