const problem = document.querySelector(".p1");
const answerBox = document.querySelector(".answer-box");
const checkButton = document.querySelector(".btn-check");
const checkMark = document.querySelector(".check");
const cross = document.querySelector(".cross");

let number = 1;
let a = randomNumber(0, 21);
let b = randomNumber(0, 21);
let c = randomNumber(0, 11);
let d = randomNumber(0, 11);
let e = randomNumber(0, 31);
let f = randomNumber(0, 31);

problem.innerHTML = a+"+"+b;

checkButton.addEventListener("click", function() {
    if (answerBox.value == a + b && number == 1) {
        rightAnswer();
        problem.innerHTML = c+"x"+d;
    } else if (answerBox.value == c * d && number == 2) {
        rightAnswer()
        problem.innerHTML = a+"-"+b;
    } else if (answerBox.value == a - b && number == 3) {
        rightAnswer()
        setTimeout(removeCheckmark, 1000);
        problem.innerHTML = d+"x"+e+"-"+c;
    } else if (answerBox.value == d * e - c && number == 4) {
        rightAnswer()
        setTimeout(removeCheckmark, 1000);
        problem.innerHTML = f+"-"+d+"x"+c;
    } else if (answerBox.value == f - d * c && number == 5) {
        rightAnswer()
        setTimeout(removeCheckmark, 1000);
        window.location.href = "congrats.html";
    } else { 
        cross.style.display = "block";
        answerBox.value = "";
        setTimeout(removeCross, 1000);
    }
});

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function rightAnswer() {
    answerBox.value = "";
    checkMark.style.display = "block";
    setTimeout(removeCheckmark, 1000);
     number++;
}

function removeCheckmark() {
    checkMark.style.display = "none";
}

function removeCross() {
    cross.style.display = "none";
}

