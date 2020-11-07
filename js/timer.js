let timerId = false;
class Timer {

	constructor(time) {
		this.second = 1000; // One second in milliseconds
		this.minute = 60; // One minute in seconds
		this.time = this.minute * time; // Timer time in seconds
		this.init = Date.now();
	}

	start() {
		// Start timer

		// Account for initial second
		// run once now
		//this.countDown();

		// Init interval
		timerId = false;
		timerId = setInterval(() => {
			// Number of seconds passed since timer started
			const current = this.time - (((Date.now() - this.init) / this.second) | 0);

			// Set remaining time variables
			const minutes = parseInt(current / this.minute);
			const seconds = parseInt(current % this.minute);

			// Check what to display
			const minSingPlur = minutes < 2 ? 'minute' : 'minutes';
			const secSingPlur = seconds < 2 ? 'second' : 'seconds';

			const timeLeft = minutes < 1 ? `${seconds} ${secSingPlur}` : seconds !== 0 ?
				`${minutes} ${minSingPlur} ${seconds} ${secSingPlur}`
				:
				`${minutes} ${minSingPlur}`;

			timerEl.textContent = `${timeLeft} remaining`

			this.timeLeft = current;
			console.log(this.timeLeft);

			if (this.current === 0) {
				// Run game over scenario
				// with timer option
				gameOver(true);
			}
		}, this.second);
	}

	pause() {
		console.log('pause');
		this.reset();
	}

	resume() {
		console.log('resume');
		this.time = this.timeLeft;
		this.start();
	}

	reset() {
		console.log('reset');
		clearInterval(timerId);
		timerId = false;
	}
}

// const timer = ({ timerTime = 2, action }) => {
// 	const second = 1000; // One second in milliseconds
// 	const minute = 60; // One minute in seconds
// 	const time = minute * timerTime; // Timer time in seconds
// 	const init = Date.now();

// 	const interval = () => setInterval(intervalLoop, second);

// 	const start = () => {
// 		console.log(action);
// 		console.log(time);
// 		interval();
// 	}

// 	const intervalLoop = () => {
// 		console.log('interval loop');
// 	}


// 	switch (action) {
// 		case 'start':
// 			start();
// 			break;

// 		default:
// 			break;
// 	}
// 	// start = () => {
// 	// 	console.log('start');
// 	// 	timerEl.textContent = `Timer started and set to ${time} seconds`;
// 	// 	setInterval(interval, second);
// 	// }

// 	// pause = () => {
// 	// 	console.log('pause');
// 	// 	timerEl.textContent = `Timer paused`;
// 	// }

// 	// reset = () => {
// 	// 	console.log('reset');
// 	// 	timerEl.textContent = `Timer reset`;
// 	// 	clearInterval(start());
// 	// }

// 	// interval = () => {
// 	// 	const diff = time - (((Date.now() - init) / second) | 0);
// 	// 	console.log(minute);
// 	// 	// console.log(Date.now());
// 	// 	// console.log(this.init);
// 	// 	// console.log(this.second);
// 	// 	console.log('interval');
// 	// 	// console.log(diff);
// 	// }

// 	// timerEl.textContent = `timeLeft remaining`;
// }
// const timer = timerFunc(2);

// Instantiate timer with two minutes
// const timer = new Timer(2);

/*
timer.start(0, timerEl);
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
*/