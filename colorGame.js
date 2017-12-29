var size = 9;

var colors = generateRandomColor(size);
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
h1.style.backgroundColor = "#F06292";
var resetButton = document.querySelector("#reset");

var easyBtn = document.querySelector("#easyBtn");
var mediumBtn = document.querySelector("#mediumBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function () {
    easyBtn.classList.add("selected");
    mediumBtn.classList.remove("selected");
    hardBtn.classList.remove("selected");
    size = 3;
    newGame(size);
});
mediumBtn.addEventListener("click", function () {
    easyBtn.classList.remove("selected");
    mediumBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    size = 6;
    newGame(size);
});
hardBtn.addEventListener("click", function () {
    easyBtn.classList.remove("selected");
    mediumBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    size = 9;
    newGame(size);
});

resetButton.addEventListener("click", function () {
    newGame(size);
});

for (var i = 0; i < squares.length; i++) {
    //add initial colors to the squares
    squares[i].style.background = colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click", function () {
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        console.log(clickedColor);
        //compare the grabbed color with the picked color
        if (pickedColor === clickedColor) {
            messageDisplay.textContent = "Correct !";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again !";

        } else {
            this.style.opacity = "0.1";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function generateRandomColor(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var rgb = "rgb" + "(" + r + ", " + g + ", " + b + ")";
    return rgb;
}

function pickColor() {
    return colors[(Math.floor((Math.random() * colors.length)))];
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
        squares[i].style.opacity = "1";
    }
}

function newGame(size) {
    colors = generateRandomColor(size);
    pickedColor = pickColor();
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        if(colors[i]){
            squares[i].style.display = "block";
        }
        else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "#F06292";
    resetButton.textContent = "New Game";
    messageDisplay.textContent = "";
    colorDisplay.textContent = pickedColor;
}