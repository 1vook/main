// Користувач задає місяць навчання учня (перевіряти чи є числом, чи від 1 до 12, чи не канікули) та оцінку (перевіряти чи є числом, чи від 1 до 100). Вивести чи зможе він виправити оцінку (якщо оцінка погана і це не останній місяць у семестрі) . Обробку усіх помилок зробити з використанням відповідних класів.




class MonthError extends Error {}
class GradeError extends Error {}

function canImprove(month: number, grade: number): string {
  if (month < 1 || month > 12)
    throw new MonthError("Місяць має бути від 1 до 12")

  if (month >= 6 && month <= 8) throw new MonthError("Зараз канікули")

  if (grade < 1 || grade > 100)
    throw new GradeError("Оцінка має бути від 1 до 100")

  if (grade < 60 && month !== 5 && month !== 12)
    return "Учень може виправити оцінку"

  return "Учень не може виправити оцінку"
}

try {
  console.log(canImprove(12, 90))
} catch (error) {
  if (error instanceof MonthError || error instanceof GradeError) {
    console.log((error as Error).message)
  } else {
    console.log("Невідома помилка")
  }
}
