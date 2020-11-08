// A little switcheroo magic from placeholder to letter
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

// Check whats happening
const verify = (button, letter) => {
	// Button is clicked
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
		// Would be nice to have flash card for this maybe
		// Low prio: if there is time
		// console.log(`Keep going! You have ${maxClick - wrongCount} chances left`);
	} else {
		// Increase wrong count by one (1)
		wrongCount++;
		if (wrongCount === maxClick) {
			// No dice!
			gameOver();
		} else if (wrongCount < maxClick - 1) {
			// Keep or remove? i.e. just go to last chance warning.
			// console.log(`Ooops! That's ok... You still have ${maxClick - wrongCount} chances left`);
		} else {
			guessesWordEl.innerHTML = 'inch';
			// console.log(`Ooh.. Last chance!`);
		}
	}

	// At this point we can correct remining guess(es)
	guessesCountEl.innerHTML = maxClick - wrongCount;

	return;
}