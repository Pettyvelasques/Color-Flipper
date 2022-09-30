const colors = ["yellow", "red", "rgba(133,122,200)", "#F15025"];
const button = document.getElementById("btn");
const color = document.querySelector(".color");

function modifyColor() {
	return Math.floor(Math.random() * colors.length);
}

button.addEventListener("click", function () {
	const randomNumber = modifyColor();
	console.log(randomNumber);

	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
});
