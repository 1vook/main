// Задача 2. Створити об’єкт «Авто».

// ================================
// Авто
// Поля(властивості)	Марка
// Розмір бака
// Кількість наявних літрів
// Кількість місць
// Кількість пасажирів

// ===============================
// Методи (дії)	Заправка на вказану кількість літрів
// Виведення кількості пасажирів
// Додавання пасажирів
// Висадка пасажирів

const car: {
  brand: string
  tankSize: number
  currentFuel: number
  seats: number
  passengers: number

  fillUp(liters: number): void
  showPassengers(): void
  addPassengers(count: number): void
  removePassengers(count: number): void
} = {
  brand: "Toyota",
  tankSize: 200,
  currentFuel: 20,
  seats: 8,
  passengers: 2,

  fillUp(liters: number) {
    if (this.currentFuel + liters <= this.tankSize) {
      this.currentFuel += liters
      document.write(`Заправлено ${liters} л.<br>`)
    } else {
      document.write("Недостатньо місця в баку.<br>")
    }
  },

  showPassengers() {
    document.write(`Кількість пасажирів: ${this.passengers}<br>`)
  },

  addPassengers(count: number) {
    if (this.passengers + count <= this.seats) {
      this.passengers += count
      document.write(`Додано ${count} пасажирів.<br>`)
    } else {
      document.write("Недостатньо місць в автомобілі.<br>")
    }
  },

  removePassengers(count: number) {
    if (this.passengers - count >= 0) {
      this.passengers -= count
      document.write(`Висаджено ${count} пасажирів.<br>`)
    } else {
      document.write("Неможливо висадити більше пасажирів, ніж є.<br>")
    }
  },
}

car.showPassengers()

car.fillUp(Number(prompt("Скільки літрів заправити?")))

car.addPassengers(Number(prompt("Скільки пасажирів додати?")))

car.removePassengers(Number(prompt("Скільки пасажирів висадити?")))

car.showPassengers()
