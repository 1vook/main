"use strict";
// Задача 1. Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.
const tir = {
    field: [1, 0, 1, 0, 1],
    shoot() {
        const position = parseInt(prompt(`Введіть позицію пострілу (від 1 до 5):`, "3"));
        if (this.field[position - 1] === 1) {
            alert("Влучив!");
            this.field[position - 1] = 0;
        }
        else {
            alert("Промах!");
        }
    },
    showField() {
        alert(`${this.field}`);
    },
};
tir.shoot();
tir.showField();
//# sourceMappingURL=task_02.js.map