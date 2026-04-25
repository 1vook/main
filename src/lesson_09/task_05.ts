// Дано масив елементів. Знайти добуток додатних елементів

const arrLength = parseInt(
  prompt(`Введіть скільки елементів буде в масиві`, "12")!,
)

let arr = Array.from({ length: arrLength }, () =>
  Math.floor(Math.random() * (10 - -10) + -10),
)

// 1. Створюємо змінну для добутку
let product = 1

for (const element of arr) {
  // 2. Перевіряємо чи число додатне
  if (element > 0) {
    // 3. Множимо
    product *= element
  }
}

document.write(`Добуток додатних елементів: ${product}`)
