const button = document.getElementById("button");
const displayColor = document.getElementById("display-color");
const body = document.body;
hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]

const changeBackground = () => {
    let bgcolor = "#"
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * hex.length);
        bgcolor += hex[index]
    }
    body.style.backgroundColor = bgcolor;
    displayColor.textContent = `Color - ${bgcolor}`;
}

button.addEventListener("click", changeBackground)
