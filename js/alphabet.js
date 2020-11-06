// Create alphabet and create array using split
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

// Get alphabet UL element from document
const alphabetList = document.querySelector('ul#letterButtons');

// Create a button in a list item for
// each letter in alphabet
alphabet.forEach(letter => {

	// Create list item element
	const liEl = document.createElement('li');
	const buttonEl = document.createElement('button');

	// Add letter from alphabet
	// to list item element
	buttonEl.innerHTML = letter;

	// Add new list item with letter
	// to existing alphabet list
	liEl.appendChild(buttonEl);
	alphabetList.appendChild(liEl);

	// Add click event listner for each letter
	buttonEl.addEventListener('click', () => {
		verify(buttonEl, letter);
	});
});