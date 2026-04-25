"use strict";
// Дано масив елементів. Вивести на екран елементи, що більші за 100
const arrLength = parseInt(prompt(`Введіть скільки елементів буде в масиві`, "12"));
//////////////////////////////////////////////////
let arr = Array.from({ length: arrLength }, () => Math.floor(Math.random() * 140) + 1);
//////////////////////////////////////////////////////
// const result = arr.filter((arr) => arr > 100)
// document.write(`result: ${result}`)
// З використанням for-of
for (const element of arr) {
    if (element > 100)
        document.write(`${element} <br>`);
}
//# sourceMappingURL=task_04.js.map