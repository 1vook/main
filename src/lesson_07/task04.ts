// Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням).
function buildTable(row: number, column: number) {
  document.write(`<table style= "border:2px solid black;">`)
  for (let r = 0; r < row; r++) {
    document.write(`<tr>`)
    for (let c = 0; c < column; c++) {
      document.write(`<td style= "border:1px solid black;">`)
      document.write("Пан Андрій крутий!")
      document.write(`</td>`)
    }

    document.write(`</tr>`)
  }
  document.write(`</table>`)
}

let row = parseInt(
  prompt(`Давай побудуємо таблицю. Введіть кількість рядків`, "2")!,
)
let column = parseInt(prompt(`Введіть кількість стовпчиків`, "4")!)

buildTable(row, column)
