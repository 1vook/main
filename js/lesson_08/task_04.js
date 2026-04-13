"use strict";
// Задача 4. Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :
// •	починаються на букву «А» (для отримання першої літери можна також звернутися до номера авто як string ніби як до масиву за номером 0 - autoNum[0]-перша літера);
// •	перша і остання літери співпадають;
// •	складаються з більше ніш 5 символів;
// З Вашого дозволу скористаюся готовим масивом)
const autoNumbers = [
    "AA1234BC",
    "BA5678AA",
    "AC1111CA",
    "BB2222BB",
    "AX9999XA",
    "KA3456AK",
    "AI7777IA",
    "AB123AB",
    "CA0001AC",
    "AE12E",
];
// починаються на букву «А» (для отримання першої літери можна також звернутися до номера авто як string ніби як до масиву за номером 0 - autoNum[0]-перша літера);
function autoNumbersStartedA(autoNumbers) {
    let startedA = 0;
    for (let i = 0; i < autoNumbers.length; i++) {
        autoNumbers[i][0] == "A" || autoNumbers[i][0] == "a" ? startedA++ : null;
    }
    return startedA;
}
const startedNumA = autoNumbersStartedA(autoNumbers);
document.write(`починаються на букву «А» - ${startedNumA} номерів <br>`);
// •	перша і остання літери співпадають;
function autoNumbersFirstAndLast(autoNumbers) {
    let a = 0;
    for (let i = 0; i < autoNumbers.length; i++) {
        for (let n = 0; n < autoNumbers[i].length; n++) {
            //   Ось до цього рішення я не сам додумався а підглянув в інтернеті :)
            autoNumbers[i][autoNumbers[i].length - 1] === autoNumbers[i][0]
                ? a++
                : null;
        }
    }
    return a;
}
const sumNumbersFirstAndLast = autoNumbersFirstAndLast(autoNumbers);
document.write(`Кількість номерів де перша та остання літера співпадає - ${startedNumA} шт <br>`);
// складаються з більше ніш 5 символів;
function autoNumbersLength(autoNumbers) {
    let b = 0;
    for (let i = 0; i < autoNumbers.length; i++) {
        autoNumbers[i].length > 5 ? b++ : null;
    }
    return b;
}
const sumAutoNumbersLength = autoNumbersLength(autoNumbers);
document.write(`Кількість номерів які складаються з більше ніш 5 символів - ${sumAutoNumbersLength} шт <br>`);
//# sourceMappingURL=task_04.js.map