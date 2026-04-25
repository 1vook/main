// Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.

const numElement: number = parseInt(
  prompt(`Введіть кількість елементів в масиві`, "6")!,
)

const avrVal = numElement / 2

let newArr: number[] = new Array(numElement)
newArr.fill(1, 0, avrVal + 1)
newArr.fill(7, avrVal)

document.write(`newArr: ${newArr}`)
