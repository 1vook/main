// Задача 3. Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».
// Функція для створення масиву з іменами
function nameList() {
  let arrNames: string[] = []
  const numbers: number = parseInt(
    prompt(`Скільки імен будемо додавати?`, "3")!,
  )
  for (let i = 0; i < numbers; i++) {
    let names: string = prompt(`Введіть ім'я`, "Іван")!
    arrNames.push(names)
  }
  return arrNames
}

const arrNames: string[] = nameList()

// створюємо функцію яка шерстить масив та перевіряє на імя

function namesCheck(arrNames: string[]) {
  let ivan: number = 0
  for (let i = 0; i < arrNames.length; i++) {
    arrNames[i] === "Іван" ? ivan++ : null
  }
  return ivan
}

const invanNumbers = namesCheck(arrNames)

document.write(`У Вас - ${invanNumbers} Івани`)
