const button = document.getElementById('button');
const displayColor = document.getElementById('display-color');
const body = document.body;
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const changeBackground = () => {
	let bgcolor = '#';
	for (let i = 0; i < 6; i++) {
		let index = Math.floor(Math.random() * hex.length);
		bgcolor += hex[index];
	}
	body.style.backgroundColor = bgcolor;
	button.style.color = bgcolor;
	displayColor.textContent = `COLOR - ${bgcolor}`;
};

button.addEventListener('click', changeBackground);
