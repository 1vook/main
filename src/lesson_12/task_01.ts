// Функція для генерації рандомного числа
function getRandomNumber(minValue: number, maxValue: number) {
  return Math.floor(Math.random() * (maxValue - minValue) + minValue)
}

// Для генерація одного масив
function getRandomArray(
  arrayLength: number,
  minValue: number,
  maxValue: number,
) {
  const arr = []
  for (let i = 0; i < arrayLength; i++) {
    const randNum = getRandomNumber(minValue, maxValue)
    arr.push(randNum)
  }
  return arr
}

// НАШ МАСИВ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let ourArr = getRandomArray(30, 1, 100)
// document.write(`old ourArr -[${ourArr}]<br>`)
// console.log(ourArr)
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Задача 1. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування бульбашкою

// let changedCounter = 0
// function bubbleSort(ourArr: number[]): void {
//   let changed
//   let rightIndex = ourArr.length - 1

//   do {
//     changed = false
//     for (let i = 1; i <= rightIndex; i++) {
//       if (ourArr[i - 1] > ourArr[i]) {
//         const s = ourArr[i - 1]
//         ourArr[i - 1] = ourArr[i]
//         ourArr[i] = s
//         changed = true
//       }
//     }
//     rightIndex--
//     changedCounter++
//   } while (changed)
// }
// bubbleSort(ourArr)

// document.write(`new ourArr - [${ourArr}]<br>`)
// document.write(`Було зроблено ${changedCounter} обмінів`)

// Задача 2. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування змішуванням.

// let changedCounter = 0
// function cocktailSort(ourArr: number[]) {
//   let leftIndex = 0
//   let rightIndex = ourArr.length - 1

//   while (leftIndex < rightIndex) {
//     for (let i = leftIndex; i < rightIndex; i++) {
//       if (ourArr[i] > ourArr[i + 1]) {
//         const s = ourArr[i]
//         ourArr[i] = ourArr[i + 1]
//         ourArr[i + 1] = s
//       }
//     }
//     for (let x = rightIndex; x > leftIndex; x--) {
//       if (ourArr[x] < ourArr[x - 1]) {
//         const s = ourArr[x]
//         ourArr[x] = ourArr[x - 1]
//         ourArr[x - 1] = s
//       }
//     }

//     rightIndex--
//     leftIndex++
//     changedCounter++
//   }
// }
// cocktailSort(ourArr)

// document.write(`new ourArr - [${ourArr}]<br>`)
// document.write(`Було зроблено ${changedCounter} обмінів`)

// Задача 3. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування включеннями.
// let changedCounter = 0
// function insertSort(ourArr: number[]): void {
//   let key, i
//   for (let k = 0; k < ourArr.length; k++) {
//     key = ourArr[k]
//     i = k - 1
//     while (i >= 0 && ourArr[i] > key) {
//       ourArr[i + 1] = ourArr[i]
//       i--
//       changedCounter++
//     }
//     ourArr[i + 1] = key
//   }
// }

// insertSort(ourArr)

// document.write(`new ourArr - [${ourArr}]<br>`)
// document.write(`Було зроблено ${changedCounter} обмінів`)

// Задача 4. Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком. Тобто кожного разу після обміну елементів вивести поточний стан масиву на екран.

// Бульбашкою

// let changedCounter = 0
// function bubbleSort(ourArr: number[]): void {
//   let changed
//   let rightIndex = ourArr.length - 1

//   do {
//     changed = false
//     for (let i = 1; i <= rightIndex; i++) {
//       if (ourArr[i - 1] > ourArr[i]) {
//         const s = ourArr[i - 1]
//         ourArr[i - 1] = ourArr[i]
//         ourArr[i] = s
//         changed = true
//       }
//     }
//     rightIndex--
//     changedCounter++
//     document.write(`[${ourArr}]<br>`)
//   } while (changed)
// }
// bubbleSort(ourArr)

// // document.write(`new ourArr - [${ourArr}]<br>`)
// // document.write(`Було зроблено ${changedCounter} обмінів`)

// Шейкером

// let changedCounter = 0
// function cocktailSort(ourArr: number[]) {
//   let leftIndex = 0
//   let rightIndex = ourArr.length - 1

//   while (leftIndex < rightIndex) {
//     for (let i = leftIndex; i < rightIndex; i++) {
//       if (ourArr[i] > ourArr[i + 1]) {
//         const s = ourArr[i]
//         ourArr[i] = ourArr[i + 1]
//         ourArr[i + 1] = s
//       }
//     }
//     for (let x = rightIndex; x > leftIndex; x--) {
//       if (ourArr[x] < ourArr[x - 1]) {
//         const s = ourArr[x]
//         ourArr[x] = ourArr[x - 1]
//         ourArr[x - 1] = s
//       }
//     }

//     rightIndex--
//     leftIndex++
//     changedCounter++
//     document.write(`[${ourArr}]<br>`)
//   }
// }
// cocktailSort(ourArr)

// Виключенням

// let changedCounter = 0
// function insertSort(ourArr: number[]): void {
//   let key, i
//   for (let k = 0; k < ourArr.length; k++) {
//     key = ourArr[k]
//     i = k - 1
//     while (i >= 0 && ourArr[i] > key) {
//       ourArr[i + 1] = ourArr[i]
//       i--
//       changedCounter++
//     }
//     ourArr[i + 1] = key
//     document.write(`[${ourArr}]<br>`)
//   }
// }

// insertSort(ourArr)

// document.write(`new ourArr - [${ourArr}]<br>`)
// document.write(`Було зроблено ${changedCounter} обмінів`)

// Задача 5. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.
// const names = [
//   "Ivan",
//   "Anna",
//   "Petro",
//   "Maria",
//   "Olena",
//   "Sergiy",
//   "Olga",
//   "Andriy",
//   "Maksym",
//   "Natalia",
//   "Viktor",
//   "Kateryna",
//   "Dmytro",
//   "Yulia",
//   "Bohdan",
// ]

// function insertSort(names: string[]): void {
//   let current, i
//   for (let n = 0; n < names.length; n++) {
//     current = names[n]
//     i = n - 1
//     while (i >= 0 && names[i] > current) {
//       names[i + 1] = names[i]
//       i--
//     }
//     names[i + 1] = current
//   }
// }
// insertSort(names)
// document.write(`${names} <br>`)

// function binarySearch(
//   names: string[],
//   searchElement: string,
//   start: number,
//   end: number,
// ) {
//   if (start <= end) {
//     const middle = Math.floor((start + end) / 2)
//     if (names[middle] === searchElement) return middle
//     if (names[middle] < searchElement)
//       return binarySearch(names, searchElement, middle + 1, end)
//     if (names[middle] > searchElement)
//       return binarySearch(names, searchElement, start, middle - 1)
//   } else return -1
// }
// const index = binarySearch(names, "Olga", 0, names.length - 1)

// if (index === -1) document.write(`Ольги тут нема`)
// else document.write(`Індекс Ольги - ${index}`)

// Задача 6. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом.
// const names = [
//   "Ivan",
//   "Anna",
//   "Petro",
//   "Maria",
//   "Olena",
//   "Sergiy",
//   "Olga",
//   "Andriy",
//   "Maksym",
//   "Natalia",
//   "Viktor",
//   "Kateryna",
//   "Dmytro",
//   "Yulia",
//   "Bohdan",
// ]

// function insertSort(names: string[]) {
//   let current, i
//   for (let l = 0; l < names.length; l++) {
//     current = names[l]
//     i = l - 1
//     while (i >= 0 && names[i].length > current.length) {
//       names[i + 1] = names[i]
//       i--
//     }
//     names[i + 1] = current
//   }
// }
// insertSort(names)
// document.write(`${names} <br>`)

// function binarySearch(
//   names: string[],
//   searchElement: number,
//   start: number,
//   end: number,
// ) {
//   if (start <= end) {
//     const middle = Math.floor((start + end) / 2)
//     if (names[middle].length === searchElement) return middle
//     if (names[middle].length < searchElement)
//       return binarySearch(names, searchElement, middle + 1, end)
//     if (names[middle].length > searchElement)
//       return binarySearch(names, searchElement, start, middle - 1)
//   }  return -1
// }
// const indexOf5 = binarySearch(names, 5, 0, names.length - 1)
// if ((indexOf5 === -1)) document.write(`У масиві нема таких імен`)
// else document.write(`Це імя - ${names[indexOf5]}, його індекс - ${indexOf5}`)

// Задача 7. Сформувати двовимірний масив (4*8) з номерами днів (описати окремий тип для днів). Заповнити його випадковим чином. Підрахувати для кожного рядка кількість неділь.

const daysArr: number[][] = []

for (let i = 0; i < 4; i++) {
  daysArr.push(getRandomArray(8, 1, 8))
}

document.write(`Двовимірний масив:<br>`)

// Виведення масиву по рядках
for (let row = 0; row < daysArr.length; row++) {
  for (let col = 0; col < daysArr[row].length; col++) {
    document.write(`${daysArr[row][col]} `)
  }
  document.write(`<br>`)
}

document.write(`<br>`)

// Підрахунок неділь у кожному рядку
for (let row = 0; row < daysArr.length; row++) {
  let sundayCount = 0

  for (let col = 0; col < daysArr[row].length; col++) {
    if (daysArr[row][col] === 7) {
      sundayCount++
    }
  }

  document.write(`У рядку ${row + 1} кількість неділь: ${sundayCount}<br>`)
}
