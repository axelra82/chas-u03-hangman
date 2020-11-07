// Init. Intro and game elements
const introSectionEl = document.querySelector('body section#intro-section');
const introArticleEl = document.querySelector('body article#intro-article');
const gameEl = document.querySelector('body section#game');

// Timer element
const timerEl = gameEl.querySelector('div#timer');

// Restart button
const restartEl = document.querySelector('div#restart button');
restartEl.addEventListener('click', () => {
	resetGame('inGame');
	pauseTimer();
});

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
		// with timer option
		gameOver(true);
	}
};

const startTimer = (run) => {
	return setInterval(run, 1000);
	// return {
	// 	start: 
	// }
}

const clearTimer = () => {
	console.log('clear');
	console.log(startTimer());
	clearInterval(startTimer());
}
const pauseTimer = () => {
	console.log('pause');
	console.log(startTimer());
	clearInterval(startTimer());
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
	startTimer(() => runOnce());
}