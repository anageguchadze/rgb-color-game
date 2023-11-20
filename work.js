let numSquares = 6;
let colors = generateRandomColors(numSquares);
let pickedColor = pickColor();
let colorDisplay = document.querySelector(".color-display");
let messageDisplay = document.querySelector(".message");
let squares = document.querySelectorAll(".color-box");
let resetButton = document.querySelector(".reset");
let hardButton = document.getElementById("hard");
let easyButton = document.querySelector(".easy");

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {

  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener("click", function() {
  let clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
      resetButton.textContent = "Play Again";
    } else {
      this.style.backgroundColor = "#232323";
      this.style.display = "none";
      messageDisplay.textContent = "incorrect!";
    }
  });
}

resetButton.addEventListener("click", function() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
});

resetButton.addEventListener("click", function() {
  resetGame();
});

hardButton.addEventListener("click", function() {
  numSquares = 6;
  resetGame();
});

easyButton.addEventListener("click", function() {
  numSquares = 3;
  resetGame();
});

function resetGame() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (i < numSquares) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";

  hardButton.classList.remove('active-mode');
  easyButton.classList.remove('active-mode');

  if (numSquares === 6) {
    hardButton.classList.add('active-mode');
  } else {
    easyButton.classList.add('active-mode');
  }
}

function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.round(Math.random() * (colors.length-1));
  return colors[random];
}

function generateRandomColors(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  let r=Math.round(Math.random()*255);
  let g=Math.round(Math.random()*255);
  let b=Math.round(Math.random()*255);
  let rgb=`rgb(${r}, ${g}, ${b})`;
  return rgb;
}