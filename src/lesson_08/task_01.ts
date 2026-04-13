// Задача 1. Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).

// Функція для вводу оцінок
function inputAssessments(length: number): number[] {
  let arr: number[] = []
  for (let i = 1; i <= length; i++) {
    const assessments: number = parseInt(
      prompt(`Введіть Вашу оцінку з ${i} предмета`, "2")!,
    )
    arr.push(assessments)
  }
  return arr
}

// ---------------------------------------------------
// Функція для знаходження середнього арифметичного

function getStudentResult(assessments: number[]): number {
  let sumResult = 0
  for (let i = 0; i < assessments.length; i++) {
    sumResult += assessments[i]
  }
  let avarResult = sumResult / assessments.length
  return avarResult
}

// ----------------------------------------------------------
// Функція для визначення категорії як навчається учень та Виводу тексту
function getStudentCategory(assessments: number[]): void {
  // Створюємо змінні що б зберегти чи є в масиві оцінки 2, 3, 4
  let get2 = false
  let get3 = false
  let get4 = false

  for (let index = 0; index < assessments.length; index++) {
    switch (assessments[index]) {
      case 0:
      case 1:
      case 2:
        get2 = true
        break
      case 3:
        get3 = true
        break
      case 4:
        get4 = true
        break
    }
  }
  if (get2) document.write("Двійошник")
  else if (get3) document.write("Трійошник")
  else if (get4) document.write("Хорошист")
  else document.write("Відмінник")
}
// ----------------------------------------------------------

// Вводимо кількість предметів
const numItems: number = parseInt(
  prompt(`Скільки предметів ми будемо рахувати?`, "3")!,
)
// --------------------------------------------------------------
// Отримали масив з оцінками
const assessments: number[] = inputAssessments(numItems)
// --------------------------------------------------------------
// Отримую середнє значення з масиву
const avrAssessments = getStudentResult(assessments)
// ------------------------------------------------

document.write(`Середній бал: ${avrAssessments.toFixed(1)} <br>`)
document.write(`Категорія: `)
getStudentCategory(assessments)
