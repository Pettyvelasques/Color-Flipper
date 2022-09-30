const colors = [
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
];
const button = document.getElementById("btn");
const color = document.querySelector(".color");

function modifyColor() {
	return Math.floor(Math.random() * colors.length);
}

button.addEventListener("click", function () {
	let randomNumber = "#";
	for (let i = 0; i < 6; i++) {
		randomNumber += colors[modifyColor()];
		console.log(randomNumber);
	}

	document.body.style.backgroundColor = randomNumber;
	color.textContent = randomNumber;
});
