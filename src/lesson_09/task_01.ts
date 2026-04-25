// Користувач вводить кількість елементів. Створити масив, що складається з вказаної кількості елементів заповнених нулями.

const numElements:number = parseInt(prompt(`Введіть кількість елементів в масиві`,'4')!)

let newArr = new Array(numElements)
newArr.fill(0)

document.write(`newArr: ${newArr}`)