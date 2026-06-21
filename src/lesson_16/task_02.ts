//   	Магазин
// Клас із полями #stock (масив з товарами (назва, кількість)) і #revenue. Дозвольте продавати товар, якщо є запас.

class Store {
  #stock: [string, number][]
  #revenue: number

  constructor(stock: [string, number][], revenue: number) {
    if (revenue < 0) throw new Error("Виручка не може бути від’ємною")

    this.#stock = stock
    this.#revenue = revenue
  }

  sell(productName: string, amount: number, price: number) {
    if (amount <= 0) throw new Error("Некоректна кількість товару")

    const product = this.#stock.find((item) => item[0] === productName)

    if (!product) throw new Error("Товар не знайдено")

    if (product[1] < amount) throw new Error("Недостатньо товару на складі")

    product[1] -= amount
    this.#revenue += amount * price
  }

  toString() {
    let result = "Товари на складі:<br>"

    for (const product of this.#stock) {
      result += `${product[0]} - ${product[1]} шт.<br>`
    }

    result += `Виручка: ${this.#revenue} грн.<br>`

    return result
  }
}

try {
  const store = new Store(
    [
      ["Молоко", 10],
      ["Хліб", 5],
      ["Сир", 3],
    ],
    0,
  )

  document.write(`${store}<br>`)

  store.sell("Молоко", 3, 50)
  store.sell("Сир", 2, 127)

  document.write(`${store}<br>`)
} catch (error) {
  console.log(error)
}
