"use strict";
// Задача 2. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.
const dateObj = {
    day: 5,
    month: 8,
    year: 2026,
};
function getFutureYear(someObj, monthsToAdd) {
    // Загальна кількість місяців від початку поточного року
    const totalMonths = someObj.month - 1 + monthsToAdd;
    // Кількість повних років, що пройдуть
    const yearsToAdd = Math.floor(totalMonths / 12);
    // Майбутній рік
    return someObj.year + yearsToAdd;
}
const months = 325;
const futureYear = getFutureYear(dateObj, months);
document.write(`Дата: ${dateObj.day}.${dateObj.month}.${dateObj.year}<br>`);
document.write(`Через ${months} місяців буде ${futureYear} рік`);
//# sourceMappingURL=task_02.js.map