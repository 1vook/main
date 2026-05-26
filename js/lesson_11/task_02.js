"use strict";
// // Функція для генерації рандомного числа
// function getRandomNumber(minValue: number, maxValue: number) {
//   return Math.floor(Math.random() * (maxValue - minValue) + minValue)
// }
// // Для генерація одного масив
// function getRandomArray(
//   arrayLength: number,
//   minValue: number,
//   maxValue: number,
// ) {
//   const arr = []
//   for (let i = 0; i < arrayLength; i++) {
//     const randNum = getRandomNumber(minValue, maxValue)
//     arr.push(randNum)
//   }
//   return arr
// }
// // Генерація умовної таблиці
// function generateRandomTable(
//   rowNumber: number,
//   columnNumber: number,
//   minValue: number,
//   maxValue: number,
// ) {
//   const table = []
//   for (let i = 0; i < rowNumber; i++) {
//     const randomRow = getRandomArray(columnNumber, minValue, maxValue)
//     table.push(randomRow)
//   }
//   return table
// }
// // НАШ МАСИВ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let someArr = generateRandomTable(4, 7, 1, 300)
// document.write(`<h3>Наш масив - ${someArr}</h3>`)
// console.log(someArr)
// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Дано інформацію про прибуток К магазинів протягом тижня. Знайти :
// 1) загальний прибуток кожного масиву за тиждень;
// for (let shop = 0; shop < someArr.length; shop++) {
//   let sum = 0
//   for (let day = 0; day < someArr[shop].length; day++) {
//     sum += someArr[shop][day]
//   }
//   document.write(
//     `Загальний прибуток ${shop + 1}-го магазину за тиждень - ${sum} грн. <br>`,
//   )
// }
// 2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
// for (let day = 0; day < someArr[0].length; day++) {
//   let sum = 0
//   for (let shop = 0; shop < someArr.length; shop++) {
//     sum += someArr[shop][day]
//   }
//   document.write(
//     `У ${day + 1} загальний прибуток магазинів становить - ${sum} грн. <br>`,
//   )
// }
// 3) загальний прибуток за робочі дні
// let sum = 0
// for (let day = 0; day < 4; day++) {
//   for (let shop = 0; shop < someArr.length; shop++) {
//     sum += someArr[shop][day]
//   }
// }
// document.write(`Загальний прибуток за робочі дні становить ${sum} грн.`)
// 4) загальний прибуток за вихідні дні
// let sum = 0
// for (let day = 4; day < 6; day++) {
//   for (let shop = 0; shop < someArr.length; shop++) {
//     sum += someArr[shop][day]
//   }
// }
// document.write(`Загальний прибуток за вихідні дні становить ${sum} грн.`)
// 5) максимальний прибуток за середу
// let max = -Infinity
// for (let shop = 0; shop < someArr.length; shop++) {
//   someArr[shop][2] > max ? (max = someArr[shop][2]) : max
// }
// document.write(`Максимальний прибуток за середу становить - ${max}`)
// 6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
// let newArrBiggest200 = []
// for (let shop = 0; shop < someArr.length; shop++) {
//   for (let day = 0; day < 7; day++) {
//     someArr[shop][day] > 200 ? newArrBiggest200.push(someArr[shop][day]) : null
//   }
// }
// document.write(`Новий масив - ${newArrBiggest200}`)
// 7) відсортувати кожен тиждень за зростанням
// for (let shop = 0; shop < someArr.length; shop++) {
//   someArr[shop].sort((a, b) => a - b)
// }
// document.write(`Відсортований масив - ${someArr}`)
// 8)відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
// Спочатку думав зробити через .flat але не додумався як
// someArr.sort((a, b) => Math.max(...b) - Math.max(...a))
// document.write(`Відсортований масив - ${someArr}`)
// 9)упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).
// someArr.sort(
//   (a, b) =>
//     b.reduce((sum, el) => sum + el, 0) - a.reduce((sum, el) => sum + el, 0),
// )
// document.write(`Відсортований масив - ${someArr}`)
//# sourceMappingURL=task_02.js.map