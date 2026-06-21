//   	Наплічник
// Клас із полями #weight і #items. Дозвольте додавати предмети, якщо вага не перевищує 10 кг.

class Backpack {
  #weight: number
  #items: number

  constructor(weight: number, items: number) {
    if (weight < 0 || weight > 10) throw new Error("Некоректна вага")

    if (items < 0) throw new Error("Некоректна кількість предметів")

    this.#weight = weight
    this.#items = items
  }

  get Weight() {
    return this.#weight
  }

  get Items() {
    return this.#items
  }

  addItem(itemWeight: number) {
    if (itemWeight <= 0) throw new Error("Вага предмета має бути більшою за 0")

    if (this.#weight + itemWeight > 10)
      throw new Error("Предмет не влізе в наплічник")

    this.#weight += itemWeight
    this.#items++
  }

  toString() {
    return `Предметів: ${this.#items}, загальна вага: ${this.#weight} кг <br>`
  }
}

try {
  const backpack = new Backpack(0, 0)
  document.write(`${backpack}`)
  backpack.addItem(3)
  document.write(`${backpack}`)
  backpack.addItem(8)
} catch (error) {
  console.log(error)
}
