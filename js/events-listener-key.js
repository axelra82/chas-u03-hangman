// Our buttons now exist in the list
// so we can match keypress for them
document.addEventListener('keydown', pressed => {
	// Get acctual key value
	const keyValue = pressed.key;

	// Make sure the value is in our alphabet
	const isInAlphabet = alphabet.includes(keyValue);

	if (isInAlphabet) {
		// We need to find the corresponding button (and check if it's dissabled or not) for the key value that was logged
		const buttonListItems = alphabetList.querySelectorAll('li button:not([disabled])');
		buttonListItems.forEach(buttonEl => {
			const letter = buttonEl.textContent;
			if (keyValue === letter) {
				verify(buttonEl, letter);
			}
		})
	}
});