// Генерація всіх підмножин: Реалізуйте рекурсивну функцію, яка генерує всі
// можливі підмножини заданого масиву. Наприклад, для масиву [1, 2, 3]
// можливі підмножини: [], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3].

// Функція яка створює масив:
// 1) Функція для створення рандомного числа
function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min + 1)
}

// 2) Функція для створення масиву

function newArr(itemNumbers: number, min: number, max: number) {
  let arr: number[] = []
  for (let i = 0; i < itemNumbers; i++) {
    arr.push(getRandomNumber(min, max))
  }
  return arr
}
let arr = newArr(3, 0, 10)
document.write(`Маємо такий масив - [${arr}] <br><br>`)

// Рішення задачі

function allCombination(step: number, resArr: number[]) {
  if (step === arr.length) document.write(`[${resArr}]<br>`)
  else {
    allCombination(step + 1, resArr)
    allCombination(step + 1, [...resArr, arr[step]])
  }
}

allCombination(0, [])
