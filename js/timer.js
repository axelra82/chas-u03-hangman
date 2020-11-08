class Timer {
	constructor(time) {
		this.second = 1000; // One second in milliseconds
		this.minute = 60; // One minute in seconds
		this.time = this.minute * time; // Timer time in seconds
		this.timerId;
		this.counter = 0;
	}

	start() {
		// Start timer

		// Account for initial second
		// run once now
		this.interval();

		// Init interval
		this.timerId = setInterval(this.interval, this.second)
	}

	pause() {
		this.reset();
	}

	resume() {
		this.start();
	}

	reset() {
		clearInterval(this.timerId);
		this.timerId = undefined;
	}

	interval = () => {
		// Increment counter and subtract from total time
		this.currentTime = this.time - this.counter++;

		// Set remaining time variables
		const minutes = parseInt(this.currentTime / this.minute);
		const seconds = parseInt(this.currentTime % this.minute);

		// Check what to display
		const minSingPlur = minutes < 2 ? 'minute' : 'minutes';
		const secSingPlur = seconds < 2 ? 'second' : 'seconds';

		const timeLeft = minutes < 1 ?
			`${seconds} ${secSingPlur}` : seconds !== 0 ?
				`${minutes} ${minSingPlur} ${seconds} ${secSingPlur}`
				:
				`${minutes} ${minSingPlur}`;

		timerEl.textContent = `${timeLeft} remaining`

		if (this.currentTime === 0) {
			// Run game over scenario
			// with timer option
			gameOver(true);
		}
	}
}