// ==========================================
// ТЕСТОВІ ДАНІ ДЛЯ ЗАДАЧ 1-5
// ==========================================
const stringArray: string[] = [
  "apple",
  "b4n4n4",
  "sky",
  "123",
  "hello!",
  "bcdfgh",
]

// --- Задача 1 ---
// Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).
console.log("--- Задача 1: Рядки з цифрами ---")
const digitsRegex = /\d/
stringArray.forEach((str) => {
  if (digitsRegex.test(str)) {
    console.log(str)
  }
})

// --- Задача 2 ---
// Дано масив рядків. Вивести ті, у яких немає цифр.
console.log("\n--- Задача 2: Рядки без цифр ---")
stringArray.forEach((str) => {
  if (!digitsRegex.test(str)) {
    console.log(str)
  }
})

// --- Задача 3 ---
// Дано масив рядків. Вивести ті, у яких є голосні літери.
console.log("\n--- Задача 3: Рядки з голосними літерами ---")
const vowelsRegex = /[aeiouyAEIOUYаеєиіїоуыэюяАЕЄИІЇОУЫЭЮЯ]/ // враховано англійські та українські голосні
stringArray.forEach((str) => {
  if (vowelsRegex.test(str)) {
    console.log(str)
  }
})

// --- Задача 4 ---
// Дано масив рядків. Вивести ті, у яких немає голосних літер.
console.log("\n--- Задача 4: Рядки без голосних літер ---")
stringArray.forEach((str) => {
  if (!vowelsRegex.test(str)) {
    console.log(str)
  }
})

// --- Задача 5 ---
// Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.
console.log("\n--- Задача 5: Рядки, що містять 1 або 3 ---")
const oneOrThreeRegex = /[13]/
stringArray.forEach((str) => {
  if (oneOrThreeRegex.test(str)) {
    console.log(str)
  }
})

// ==========================================
// ТЕСТОВІ ДАНІ ДЛЯ ЗАДАЧ 6-10
// ==========================================
const textSample =
  "Сьогодні 10.07.2026! На рахунку є 45 гривень, а в кишені — ще 5. Ого, вже 2026 рік, а мені лише 23 роки?"

// --- Задача 6 ---
// Дано рядок тексту, вивести усі числа, які є у тексті.
console.log("\n--- Задача 6: Усі числа в тексті ---")
const allNumbers = textSample.match(/\d+/g)
console.log(allNumbers ? allNumbers : "Чисел не знайдено")

// --- Задача 7 ---
// Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.
console.log("\n--- Задача 7: Знаки пунктуації ---")
const punctuationRegex = /[.,\/#!$%\^&\*;:{}=\-_`~()?—]/g
const punctuationFound = textSample.match(punctuationRegex)
// Використовуємо Set, щоб залишити тільки унікальні знаки
const uniquePunctuation = punctuationFound ? [...new Set(punctuationFound)] : []
console.log(uniquePunctuation)

// --- Задача 8 ---
// Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.
console.log("\n--- Задача 8: Складові, розділені розділовими знаками ---")
const components = textSample.split(/[.,\/#!$%\^&\*;:{}=\-_`~()?—\s]+/)
// Фільтруємо порожні рядки, які можуть виникнути при розщепленні
console.log(components.filter((c) => c.length > 0))

// --- Задача 9 ---
// Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy
console.log("\n--- Задача 9: Перевірка на наявність дати dd.mm.yyyy ---")
const dateRegex = /\b\d{2}\.\d{2}\.\d{4}\b/
console.log(dateRegex.test(textSample) ? "Містить дату" : "Не містить дати")

// --- Задача 10 ---
// Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.
console.log("\n--- Задача 10: Кількість двоцифрових чисел ---")
// Використовуємо \b для точної межі слова/числа, щоб не брати шматки від 4-цифрових чисел
const twoDigitNumbers = textSample.match(/\b\d{2}\b/g)
console.log(twoDigitNumbers ? twoDigitNumbers.length : 0)

// ==========================================
// ІНДИВІДУАЛЬНІ ЗАДАЧІ (11-16)
// ==========================================

// --- Задача 11 ---
// Визначити чи може бути рядок тексту номером банківської картки. Знайти усі такі номери.
console.log("\n--- Задача 11: Пошук номерів банківських карток ---")
const cardText =
  "Мій номер 4142-3433-2323-3434 або такий 5168123456789012, але не 123-456."
// Шукає 16 цифр поспіль АБО 4 блоки по 4 цифри через дефіс
const cardRegex = /\b(?:\d{4}-\d{4}-\d{4}-\d{4}|\d{16})\b/g
const cardsFound = cardText.match(cardRegex)
console.log(cardsFound ? cardsFound : "Карток не знайдено")

// --- Задача 12 ---
// Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”).
console.log("\n--- Задача 12: Перевірка на урядовий сайт ---")
const url1 = "https://company.gov.ua"
const url2 = "https://google.com"
const govRegex = /\.gov\b/

console.log(`${url1} є урядовим? ${govRegex.test(url1)}`)
console.log(`${url2} є урядовим? ${govRegex.test(url2)}`)

// --- Задача 13 ---
// Вибрати усі роки між 2020 та 2049 з отриманого повідомлення.
console.log("\n--- Задача 13: Роки між 2020 та 2049 ---")
const message =
  "Плани на період з 2018 по 2025 роки, а також на 2035 та 2055 роки."
const allYears = message.match(/\b\d{4}\b/g)
if (allYears) {
  const filteredYears = allYears
    .map(Number)
    .filter((year) => year >= 2020 && year <= 2049)
  console.log(filteredYears)
} else {
  console.log("Років не знайдено")
}

// --- Задача 14 ---
// Дано номер телефону. Перевірити, чи є цей телефон телефоном оператора Київстар.
console.log("\n--- Задача 14: Перевірка оператора Київстар ---")
// Коди Київстар: 067, 068, 096, 097, 098
const kyivstarRegex = /^(?:\+38)?0(67|68|96|97|98)\d{7}$/
const phone1 = "+380671234567"
const phone2 = "0501234567"

console.log(`${phone1} це Київстар? ${kyivstarRegex.test(phone1)}`)
console.log(`${phone2} це Київстар? ${kyivstarRegex.test(phone2)}`)

// --- Задача 15 ---
// Користувач вводить прізвище та ім’я в одному рядку через пробіл. Замінити пробіл на дефіс.
console.log("\n--- Задача 15: Заміна пробілу на дефіс у ПІ ---")
const fullName = "Шевченко Тарас"
const formattedName = fullName.replace(" ", "-")
console.log(formattedName)

// --- Задача 16 ---
// Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення у форматі «місяць/рік»
console.log("\n--- Задача 16: Форматування дати з dd.mm.yyyy у mm/yyyy ---")
const inputDate = "24.08.1991"
const parts = inputDate.split(".")
if (parts.length === 3) {
  const monthYear = `${parts[1]}/${parts[2]}`
  console.log(monthYear) // "08/1991"
} else {
  console.log("Неправильний формат дати")
}
