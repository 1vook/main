// Задача 0,  Дано два об’єкта. Обидва містять масив цілих чисел. При цьому у одному з них є функція знаходження суми, а у іншому – функція для знаходження добутку тих, які знаходяться між заданими мінімальним і максимальних значенням.
// Використати обидва методи стосовно обидвох об’єктів (використати call, apply)

const obj1 = {
  numbers: [2, 4, 6, 8, 10],

  getSum() {
    return this.numbers.reduce((sum, num) => sum + num, 0)
  },
}

const obj2 = {
  numbers: [1, 5, 2, 8, 4],

  getProductBetweenMinMax() {
    const minIndex = this.numbers.indexOf(Math.min(...this.numbers))
    const maxIndex = this.numbers.indexOf(Math.max(...this.numbers))

    const start = Math.min(minIndex, maxIndex)
    const end = Math.max(minIndex, maxIndex)

    let product = 1

    for (let i = start + 1; i < end; i++) {
      product *= this.numbers[i]
    }

    return product
  },
}

console.log("Сума obj1:", obj1.getSum())
console.log("Добуток між min і max obj2:", obj2.getProductBetweenMinMax())

console.log("call -> сума для obj2:", obj1.getSum.call(obj2))
console.log(
  "call -> добуток для obj1:",
  obj2.getProductBetweenMinMax.call(obj1),
)

console.log("apply -> сума для obj2:", obj1.getSum.apply(obj2))
console.log(
  "apply -> добуток для obj1:",
  obj2.getProductBetweenMinMax.apply(obj1),
)
