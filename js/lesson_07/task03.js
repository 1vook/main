"use strict";
// Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість парних, кількість додатних, кількість більших за 100.
function getNumbers(num1 = 1, num2 = 200, num3 = 3) {
    let evenNum = 0;
    let positiveNum = 0;
    let bigNum = 0;
    if (num1 % 2 === 0)
        evenNum++;
    if (num2 % 2 === 0)
        evenNum++;
    if (num3 % 2 === 0)
        evenNum++;
    if (num1 > 0)
        positiveNum++;
    if (num2 > 0)
        positiveNum++;
    if (num3 > 0)
        positiveNum++;
    if (num1 > 100)
        bigNum++;
    if (num2 > 100)
        bigNum++;
    if (num3 > 100)
        bigNum++;
    let result = document.write(`<p style="font-size: 24px;">Кількість парних - ${evenNum}, кількість додатних - ${positiveNum}, кількість більших за 100 - ${bigNum}</p>`);
    return result;
}
const userNum1 = parseInt(prompt(`Введіть перше числа`, "100"));
const userNum2 = parseInt(prompt(`Введіть друге числа`, "200"));
const userNum3 = parseInt(prompt(`Введіть третє числа`, "300"));
getNumbers(userNum1, userNum2, userNum3);
//# sourceMappingURL=task03.js.map