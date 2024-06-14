const button = document.querySelector(".next");
const textBox = document.querySelector(".text");

let flag = 1

button.addEventListener("click", function() {
    if (flag == 1) {
        textBox.innerHTML = "Voel je je hersenen al kraken?";
    } else if (flag == 2) {
        textBox.innerHTML = "Ga zo door!";
    } else if (flag == 3) {
        window.location.href = "index.html";
    }
    flag++;
});