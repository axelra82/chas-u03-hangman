// Check whats happening
const verify = (button, letter) => {
	// Button is clicked, don't be a jerk!
	// Disable and remove listener
	button.setAttribute('disabled', 'true');
	button.removeEventListener;

	// Check if clicked letter exists in word letter array
	if (lettersArray.includes(letter)) {

		// Change placeholder(s) to correct letter(s)
		placeholderToLetter(letter);

		if (correctCount === lettersArray.length) {
			playerWins();
		}

		console.log(`Keep going! You have ${maxClick - wrongCount} chances left`);
	} else {
		// No dice!
		// Increase wrong count by one (1)
		wrongCount++;
		if (wrongCount === maxClick) {
			if (difficulty !== 'hard') {
				gameOver();
			} else {
				gameOver(true);
			}
		} else if (wrongCount < maxClick - 1) {
			console.log(`Ooops! That's ok... You still have ${maxClick - wrongCount} chances left`);
		} else {
			guessesWordEl.innerHTML = 'round';
			console.log(`Ooh.. Last chance!`);
		}
	}

	// At this point we can correct remining guess(es)
	guessesCountEl.innerHTML = maxClick - wrongCount;

	return;
}

const placeholderToLetter = (letter) => {
	const placeHolderItems = letterPlaceholders.querySelectorAll('li');
	lettersArray.forEach((l, i) => {
		if (l === letter) {
			// YEAY!
			// Increase correct count by one (1)
			correctCount++;

			// Some DOM manipulation
			const placeHolderItem = placeHolderItems[i];
			placeHolderItem.classList.remove('secret')
			placeHolderItem.classList.add('correct')
			placeHolderItem.innerHTML = letter;
		}
	});

	return;
}