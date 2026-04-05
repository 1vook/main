// Створити функцію, яка за номером місяця повертає його назву

function getMonthName(monthNumber: number): string {
  let result

  switch (monthNumber) {
    case 1:
      result = "Січень"
      break
    case 2:
      result = "Лютий"
      break
    case 3:
      result = "Березень"
      break
    case 4:
      result = "Квітень"
      break
    case 5:
      result = "Травень"
      break
    case 6:
      result = "Червень"
      break
    case 7:
      result = "Липень"
      break
    case 8:
      result = "Серпень"
      break
    case 9:
      result = "Вересень"
      break
    case 10:
      result = "Жовтень"
      break
    case 11:
      result = "Листопад"
      break
    case 12:
      result = "Грудень"
      break
    default:
      result = "Невірний номер місяця"
  }

  return result
}

let num = parseInt(prompt("Введіть номер місяця", "11")!)

document.write(`<p>${getMonthName(num)}</p>`)
