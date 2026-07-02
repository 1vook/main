"use strict";
// На формі вводять 7 числових значень (вік, зріст, вага, заробітна плата, стаж, номер відділу, порядковий номер). Додати подію обробки події click на форму і якщо клік на внутрішньому input, то автоматично замінювати значення його на 0. Використати делегування
const form = document.getElementById("form");
form.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName === "INPUT") {
        target.value = "0";
    }
});
//# sourceMappingURL=task_01.js.map