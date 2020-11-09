class Timer {
	constructor(time) {
		// Private class variables
		this.__second = 1000; // One second in milliseconds
		this.__minute = 60; // One minute in seconds
		this.__time = this.__minute * time; // Timer time in seconds
		this.__timerId;
		this.__counter = 0;
	}

	start() {
		// Start timer

		// Account for initial second
		// run once now
		this.interval();

		// Initiate timer
		this.__timerId = setInterval(this.interval, this.__second)
	}

	pause() {
		this.reset();
	}

	resume() {
		this.start();
	}

	reset() {
		clearInterval(this.__timerId);
		this.__timerId = undefined;
	}

	// The acctual "timer" function
	interval = () => {
		// Increment counter and subtract from total time
		this.__currentTime = this.__time - this.__counter++;

		// Set remaining time variables
		const minutes = parseInt(this.__currentTime / this.__minute);
		const seconds = parseInt(this.__currentTime % this.__minute);

		// Check what to display
		const minSingPlur = minutes < 2 ? 'minute' : 'minutes';
		const secSingPlur = seconds < 2 ? 'second' : 'seconds';

		const timeLeft = minutes < 1 ?
			`${seconds} ${secSingPlur}` : seconds !== 0 ?
				`${minutes} ${minSingPlur} ${seconds} ${secSingPlur}`
				:
				`${minutes} ${minSingPlur}`;

		timerEl.textContent = `${timeLeft} remaining`

		if (this.__currentTime !== 0 && (
			this.__currentTime === 59 ||
			this.__currentTime === 10 ||
			this.__currentTime < 6
		)) {
			const alertEl = document.createElement('div');
			alertEl.id = 'time-alerter';
			alertEl.textContent = seconds;
			gameEl.appendChild(alertEl);
		}

		if (this.__currentTime === 0) {
			// Run game over scenario
			// with timer option
			gameOver(true);
		}
	}
}