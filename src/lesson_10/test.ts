// Задача. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
// При розв'язанні задач намагайтесь використовувати відповідні методи (map, filter, reduce,…) всюди, де це можливо

// Масив з рандомними числами,але для навчання я його трішки обмежу
let prices = Array.from({ length: 15 }, () =>
  Math.floor(Math.random() * (1500 - 1) + 1),
)
document.write(`${prices} <br>`)

// // 1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.

// const bigPrices = prices.filter((price) => price > 1000)
// console.log(bigPrices)

// 2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.

// const bigPricesIndex = prices.reduce(
//   (arr: number[], price: number, index: number) => {
//     if (price > 1000) arr.push(index)
//     return arr
//   },
//   [],
// )
// console.log(bigPricesIndex)

// 3)Сформувати список з тих цін, які більші за попереднє значення

// let res = prices.filter(
//   (n, index, newArr) => index !== 0 && n > newArr[index - 1],
// )
// document.write(`res = ${res}`)

// 4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального

// const maxPrice = prices.reduce((max, n) => (n > max ? n : max))

// let pricePercentMax = prices.map((n) => Math.floor((n / maxPrice) * 100))
// document.write(`res = ${pricePercentMax}`)

// 5)Підрахувати кількість змін цін

// let priceCheng = prices.reduce(
//   (newArr, n, i, arr) => (n !== arr[i - 1] && i > 0 ? newArr + 1 : newArr),
//   0,
// )

// document.write(`res: ${priceCheng}`)

// 6)Визначити, чи є ціна, що менше 1000

// const biggest1000 = prices.some((n) => n < 1000)
// let res = biggest1000

// document.write(
//   `${res ? `Тут є число менше за 1000` : `Такого числа тут немає`}`,
// )

// 7)Визначати, чи усі ціни більше за 1000

// const allPricesBiggest1000 = prices.every((n) => n > 1000)
// let res = allPricesBiggest1000

// document.write(`${res ? `Усі ціни більше за 1000` : `Є дешевше 1000`}`)

// 8)Підрахувати кількість цін, що більше за 1000

// const biggest1000 = prices.reduce((b, price) => (price > 1000 ? b + 1 : b), 0)
// document.write(`res = ${biggest1000}`)

// 9)Підрахувати суму цін, що більше за 1000

// let sumBiggest1000 = prices.reduce(
//   (sum, price) => (price > 1000 ? (sum += price) : sum),
//   0,
// )
// document.write(`Sum = ${sumBiggest1000}`)

// 10)Знайти першу ціну, що більше за 1000

// const firstBiggest1000 = prices.find((p) => p > 1000)
// document.write(`res - ${firstBiggest1000}`)

// 11)Знайти індекс першої ціни, що більше за 1000

// const firstBiggest1000Index = prices.findIndex((p, index) => p > 1000)
// document.write(`index - ${firstBiggest1000Index}`)

// 12)Знайти останню ціну, що більше за 1000

// const lastBiggest1000 = prices.findLast((p:number) => p > 1000)
// document.write(`res - ${lastBiggest1000}`)

// 13)Знайти індекс останньої ціни, що більше за 1000

const lastBiggest1000Index = prices.findLastIndex((p, index) => p > 1000)
document.write(`index - ${lastBiggest1000Index}`)
