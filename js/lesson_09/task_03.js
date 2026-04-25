"use strict";
// Користувач вводить кількість елементів. Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.
const numElements = parseInt(prompt(`Введіть кількість елементів`, "12"));
let newArr = new Array(numElements);
newArr.fill(1, 0, 5);
newArr.fill(7, 5);
document.write(`newArr: ${newArr}`);
//# sourceMappingURL=task_03.js.map