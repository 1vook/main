"use strict";
// Задача 3. Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».
// Функція для створення масиву з іменами
function nameList() {
    let arrNames = [];
    const numbers = parseInt(prompt(`Скільки імен будемо додавати?`, "3"));
    for (let i = 0; i < numbers; i++) {
        let names = prompt(`Введіть ім'я`, "Іван");
        arrNames.push(names);
    }
    return arrNames;
}
const arrNames = nameList();
// створюємо функцію яка шерстить масив та перевіряє на імя
function namesCheck(arrNames) {
    let ivan = 0;
    for (let i = 0; i < arrNames.length; i++) {
        arrNames[i] === "Іван" ? ivan++ : null;
    }
    return ivan;
}
const invanNumbers = namesCheck(arrNames);
document.write(`У Вас - ${invanNumbers} Івани`);
//# sourceMappingURL=task_03.js.map