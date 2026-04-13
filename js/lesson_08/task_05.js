"use strict";
// Задача 5. Дано послідовність оцінок учня. Підрахувати кількість:
// 1)	двійок
// 2)	кількість хороших оцінок (добре, відмінно);
// 3)	кількість оцінок, які нижче середнього.
const grades = [12, 10, 8, 7, 5, 3, 2, 11, 9, 6, 4, 2, 12, 8, 7];
function checkDeuces(grades) {
    let deuces = 0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] === 2)
            deuces++;
    }
    return deuces;
}
const deuces = checkDeuces(grades);
document.write(`Двійок - ${deuces} шт <br>`);
// 2)	кількість хороших оцінок (добре, відмінно);
function checkGoodGrades(grades) {
    let goodGrades = 0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 7)
            goodGrades++;
    }
    return goodGrades;
}
const goodGrades = checkGoodGrades(grades);
document.write(`Хороших оцінок - ${goodGrades} шт <br>`);
// 3)	кількість оцінок, які нижче середнього.
function checkBadGrades(grades) {
    let badGrades = 0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 7)
            badGrades++;
    }
    return badGrades;
}
const badGrades = checkBadGrades(grades);
document.write(`Поганих оцінок - ${badGrades} шт`);
//# sourceMappingURL=task_05.js.map