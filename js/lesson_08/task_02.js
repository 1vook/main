"use strict";
// Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
// ●	номери днів, протягом яких кількість відвідувачів була меншою за 20;
// ●	номери днів, коли кількість відвідувачів була мінімальною;
// ●	номери днів, коли кількість відвідувачів була максимальною;
// ●	загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.
// Створюємо функцію яка заповнить масив числами
function inputNumbersOfVisitors(days) {
    // Створюємо масив в який будемо додавати кількість відвідувачів
    let arrNumbers = [];
    //   заповнюємо масив
    for (let i = 0; i < days; i++) {
        let visitorsNumberForDay = parseInt(prompt(`Яка кількість відвідувачів була в ${i + 1} день?`, "4"));
        arrNumbers.push(visitorsNumberForDay);
    }
    return arrNumbers;
}
// -----------------------------------------------
// -----------------------------------------------
//   Дізнаємось скільки днів будемо рахувати
const days = parseInt(prompt(`Введіть скільки днів ми будемо рахувати відвідувачів`, "3"));
// Створюємо константу з нашим масивом
const arrVisitors = inputNumbersOfVisitors(days);
// -------------------------------------------------------------------
// Виводимо на екран номери днів, протягом яких кількість відвідувачів була меншою за 20;
function outputDaysVisitors20(arrVisitors) {
    for (let index = 0; index < arrVisitors.length; index++) {
        if (arrVisitors[index] < 20) {
            document.write(`У ${index + 1} день було менше 20 відвідувачів, а саме - ${arrVisitors[index]} <br>`);
        }
    }
}
outputDaysVisitors20(arrVisitors);
// --------------------------------------------------------
// номери днів, коли кількість відвідувачів була мінімальною;
function outputMinVisitors(arrVisitors) {
    // Цикл який знаходить мінімальне значення
    let min = +Infinity;
    for (let index = 0; index < arrVisitors.length; index++) {
        if (arrVisitors[index] < min) {
            min = arrVisitors[index];
        }
    }
    //   Знову перебираю цикл поки не знайду під яким днем мінімальне число
    for (let i = 0; i < arrVisitors.length; i++) {
        if (arrVisitors[i] === min) {
            document.write(`У ${i + 1} день було найменше відвідувачів - ${min} <br>`);
        }
    }
}
outputMinVisitors(arrVisitors);
// --------------------------------------------------------
// номери днів, коли кількість відвідувачів була максимальною
function outputMaxVisitors(arrVisitors) {
    // Цикл який знаходить мінімальне значення
    let max = -Infinity;
    for (let index = 0; index < arrVisitors.length; index++) {
        if (arrVisitors[index] > max) {
            max = arrVisitors[index];
        }
    }
    //   Знову перебираю цикл поки не знайду під яким днем мінімальне число
    for (let i = 0; i < arrVisitors.length; i++) {
        if (arrVisitors[i] === max) {
            document.write(`У ${i + 1} день було найбільше відвідувачів - ${max} <br>`);
        }
    }
}
outputMaxVisitors(arrVisitors);
// --------------------------------------------------------
// загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.
// Функцію яка перебирає масив та визначає остачу ділення на 7, якщо це буде < 5 то це будній день, якщо 5 АБО 6 це вихідний
let sumWorksDay = 0;
let sumWeekendDay = 0;
function weekSum(arrVisitors) {
    for (let d = 0; d < arrVisitors.length; d++) {
        if (d % 7 < 5)
            sumWorksDay += arrVisitors[d];
        else
            sumWeekendDay += arrVisitors[d];
    }
}
weekSum(arrVisitors);
document.write(`Загальну кількість клієнтів у робочі дні - ${sumWorksDay} <br>
  Загальну кількість клієнтів у вихідні дні - ${sumWeekendDay}`);
//# sourceMappingURL=task_02.js.map