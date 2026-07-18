"use strict";
// ============================================================================
// ЗАДАЧА 1: Дано клас PhoneNumber. Створити функцію перетворення до string,
// при якому на основі номера виводиться оператор (050…. -> MTC, 096… -> Kyivstar, ….)
// ============================================================================
class PhoneNumber {
    constructor(number) {
        this.number = number;
    }
    [Symbol.toPrimitive](hint) {
        if (hint === "string" || hint === "default") {
            if (this.number.startsWith("050") ||
                this.number.startsWith("095") ||
                this.number.startsWith("066")) {
                return "Vodafone (MTC)";
            }
            if (this.number.startsWith("096") ||
                this.number.startsWith("097") ||
                this.number.startsWith("067")) {
                return "Kyivstar";
            }
            if (this.number.startsWith("063") ||
                this.number.startsWith("093") ||
                this.number.startsWith("073")) {
                return "Lifecell";
            }
            return "Unknown Operator";
        }
        return this.number;
    }
}
const myPhone = new PhoneNumber("0961234567");
console.log(`Оператор: ${myPhone}`);
// ============================================================================
// ЗАДАЧА 2: Дано Shop -- клас, що містить список товарів (масив об’єктів класу Product
// (назва, ціна, кількість одиниць). Додати можливість ітератора до класу Shop,
// щоб при ітеруванні для кожного елемента виводився рядок «товар-загальна вартість»
// ============================================================================
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}
class Shop {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    *[Symbol.iterator]() {
        for (let i = 0; i < this.products.length; i++) {
            const p = this.products[i];
            const totalValue = p.price * p.quantity;
            yield `${p.name} - ${totalValue} грн`;
        }
    }
}
const myShop = new Shop();
myShop.addProduct(new Product("Ноутбук", 20000, 2));
myShop.addProduct(new Product("Мишка", 500, 10));
for (const itemInfo of myShop) {
    console.log(itemInfo);
}
// ============================================================================
// ЗАДАЧА 3: Створити генератор, який би випадковим чином поступово генерував
// вказану кількість парних чисел.
// ============================================================================
function* generateEvenNumbers(count) {
    for (let i = 0; i < count; i++) {
        const randomEven = Math.floor(Math.random() * 50) * 2;
        yield randomEven;
    }
}
const evens = [...generateEvenNumbers(5)];
console.log("Згенеровані парні числа:", evens);
// ============================================================================
// ЗАДАЧА 5: Дано список з віком учнів. Підрахувати скільки разів кожне значення
// зустрічається у списку і максимальне.
// ============================================================================
const ages = [12, 14, 12, 15, 14, 16, 15, 12, 17];
const ageMap = new Map();
let maxAge = -Infinity;
for (const age of ages) {
    ageMap.set(age, (ageMap.get(age) || 0) + 1);
    if (age > maxAge) {
        maxAge = age;
    }
}
console.log("Статистика за віком:", Object.fromEntries(ageMap)); // Перетворив для гарного виводу
console.log("Максимальний вік:", maxAge);
// ============================================================================
// ЗАДАЧА 6: Дано масив книг (назва, рік видання, автор). Підрахувати кількість книг
// для кожного автора.
// ============================================================================
const books = [
    { title: "Кобзар", year: 1840, author: "Т. Шевченко" },
    { title: "Катерина", year: 1838, author: "Т. Шевченко" },
    { title: "Тіні забутих предків", year: 1911, author: "М. Коцюбинський" },
];
const authorCount = new Map();
for (const book of books) {
    authorCount.set(book.author, (authorCount.get(book.author) || 0) + 1);
}
console.log("Кількість книг по авторах:");
authorCount.forEach((count, author) => console.log(`${author}: ${count}`));
// ============================================================================
// ЗАДАЧА 7: Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача
// зберігається логін). Підрахувати для кожного клієнта кількість відвідувань.
// ============================================================================
const visits = ["user_1", "admin", "user_1", "guest", "user_1", "admin"];
const visitsCount = new Map();
for (const login of visits) {
    visitsCount.set(login, (visitsCount.get(login) || 0) + 1);
}
console.log("Кількість відвідувань (Map розмір):", visitsCount.size);
// ============================================================================
// ЗАДАЧА 8: Дано масив студентів (піб, курс, факультет). Підрахувати кількість
// різних факультетів, та кількість студентів кожного з курсів.
// ============================================================================
const students = [
    { name: "Іван", course: 1, faculty: "ФІТ" },
    { name: "Олена", course: 2, faculty: "ФІТ" },
    { name: "Петро", course: 1, faculty: "Економічний" },
];
const uniqueFaculties = new Set(students.map((s) => s.faculty));
const courseStudentsCount = new Map();
for (const student of students) {
    courseStudentsCount.set(student.course, (courseStudentsCount.get(student.course) || 0) + 1);
}
console.log(`Різних факультетів: ${uniqueFaculties.size}`);
console.log("Студентів на курсах:", Object.fromEntries(courseStudentsCount));
// ============================================================================
// ЗАДАЧА 9: Дано масив показів температур. Підрахувати кількість входжень кожного
// із показів. Заокруглити вверх значення та підрахувати кількість різних показів.
// ============================================================================
const temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9];
const roundedUniqueTemps = new Set(temperatures.map((t) => Math.ceil(t)));
console.log("Унікальні заокруглені температури:", [...roundedUniqueTemps]);
console.log("Кількість різних показів:", roundedUniqueTemps.size);
// ============================================================================
// ЗАДАЧА 10: Дано два списки прізвищ студентів, що відвідують гуртки з математики і
// історії. Підрахувати скільки студентів з гуртка з історії також відвідують
// гурток з математики. Також підрахувати скільки всього студентів відвідують
// хоча б один гурток.
// ============================================================================
const mathClub = new Set(["Шевченко", "Франко", "Леся Українка", "Стус"]);
const historyClub = new Set(["Сковорода", "Франко", "Грушевський", "Шевченко"]);
const intersection = new Set([...historyClub].filter((student) => mathClub.has(student)));
const union = new Set([...mathClub, ...historyClub]);
console.log(`Ходять на обидва гуртки (${intersection.size} учнів):`, [
    ...intersection,
]);
console.log(`Всього унікальних студентів (${union.size} учнів):`, [...union]);
//# sourceMappingURL=tasks.js.map