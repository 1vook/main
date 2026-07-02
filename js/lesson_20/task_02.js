"use strict";
// На сторінці міститься певна кількість кнопок і інпутів. Підраховувати загальну кількість кліків окремо на кнопках і окремо на інпутах.
const buttons = document.querySelectorAll("button");
const inputs = document.querySelectorAll("input");
const btnCounter = document.getElementById("btnCounter");
const inputCounter = document.getElementById("inputCounter");
let buttonClicks = 0;
let inputClicks = 0;
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        buttonClicks++;
        btnCounter.textContent = String(buttonClicks);
    });
});
inputs.forEach((input) => {
    input.addEventListener("click", () => {
        inputClicks++;
        inputCounter.textContent = String(inputClicks);
    });
});
//# sourceMappingURL=task_02.js.map