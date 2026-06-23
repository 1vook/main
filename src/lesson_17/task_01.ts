// 1.	Створити клас, що дозволяє виконувати такі операції над масивами: знаходження кількості додатних, кількості від’ємних, кількість входжень деякого числа (статичні методи)

class ArrayOperations {
  static getPositiveCount(arr: number[]): number {
    return arr.filter((num) => num > 0).length
  }

  static getNegativeCount(arr: number[]): number {
    return arr.filter((num) => num < 0).length
  }

  static getNumberCount(arr: number[], searchNumber: number): number {
    return arr.filter((num) => num === searchNumber).length
  }
}

const numbers = [5, -3, 8, -1, 5, 0, 5, -7]

document.write(
  `Кількість додатних: ${ArrayOperations.getPositiveCount(numbers)}<br>`,
)

document.write(
  `Кількість від'ємних: ${ArrayOperations.getNegativeCount(numbers)}<br>`,
)

document.write(
  `Кількість входжень числа 5: ${ArrayOperations.getNumberCount(numbers, 5)}<br>`,
)
