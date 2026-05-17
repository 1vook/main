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
// let someArr = generateRandomTable(4, 6, 1, 10)
// document.write(`<h3>Наш масив - ${someArr}</h3>`)
// console.log(someArr)
// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців)
// 1)	номери рядків від 0 до половини, стовпці від 0 до половини
// let halfRow = Math.floor(someArr.length / 2)
// // будемо рахувати що це прямокутник, з однаковою кількістю елементів в кожному рядку
// let halfColumn = Math.floor(someArr[0].length / 2)
// let sum = 0
// for (let i = 0; i < halfRow; i++) {
//   for (let j = 0; j < halfColumn; j++) {
//     sum += someArr[i][j]
//   }
// }
// document.write(`<h3> 1) sum = ${sum}</h3>`)
// 2)	номери рядків від 0 до половини, стовпці від половини до кінця
// let halfRow = Math.floor(someArr.length / 2)
// let halfColumn = Math.floor(someArr[0].length / 2)
// let sum = 0
// for (let r = 0; r < halfRow; r++) {
//   for (let c = halfColumn; c < someArr[r].length; c++) {
//     sum += someArr[r][c]
//   }
// }
// document.write(`<h3> 2) sum = ${sum}</h3>`)
// 3)номери рядків (від половини до кінця, стовпці від 0 до половини
// let halfRow = Math.floor(someArr.length / 2)
// let halfColumn = Math.floor(someArr[0].length / 2)
// let sum = 0
// for (let r = halfRow; r < someArr.length; r++) {
//   for (let c = 0; c < halfColumn; c++) {
//     sum += someArr[r][c]
//   }
// }
// document.write(`<h3> 3) sum = ${sum}</h3>`)
// 4) номери рядків від половини до кінця , стовпці від половини до кінця
// let halfRow = Math.floor(someArr.length / 2)
// let halfColumn = Math.floor(someArr[0].length / 2)
// let sum = 0
// for (let r = halfRow; r < someArr.length; r++) {
//   for (let c = halfColumn; c < someArr[r].length; c++) {
//     sum += someArr[r][c]
//   }
// }
// document.write(`<h3> 4) sum = ${sum}</h3>`)
// 5) Суму парних рядків
// Рахую що 0 це не парне
// let sum = 0
// for (let r = 2; r < someArr.length; r += 2) {
//   for (let c = 0; c < someArr[r].length; c++) {
//     sum += someArr[r][c]
//   }
// }
// document.write(`<h3> 5) sum = ${sum}</h3>`)
// Можна було і через %2
// 6)Суму непарних стовпців
// let sum = 0
// for (let r = 0; r < someArr.length; r++) {
//   for (let c = 1; c < someArr[r].length; c += 2) {
//     sum += someArr[r][c]
//   }
// }
// document.write(`<h3> 6) sum = ${sum}</h3>`)
// 7) У парних рядках – непарні стовпці, у непарних – парні.
// let sum = 0
// for (let r = 2; r < someArr.length; r += 2) {
//   for (let c = 1; c < someArr[r].length; c += 2) {
//     sum += someArr[r][c]
//   }
// }
// document.write(`<h3> 7) sum = ${sum}</h3>`)
//# sourceMappingURL=task_01.js.map