"use strict";
// Дано 10 рядків тексту «Hello!» у окремих div. При кліку на якийсь із них усі наступні повинні бути зафарбовані у червоний колір.
const divs = document.querySelectorAll("div");
divs.forEach((div, index) => {
    div.addEventListener("click", () => {
        for (let i = index; i < divs.length; i++) {
            divs[i].style.color = "red";
        }
    });
});
//# sourceMappingURL=task_01.js.map