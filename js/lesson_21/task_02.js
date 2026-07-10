"use strict";
// Розробити клас Person (поля:ім'я, вік, адреса; методи: toString, визначення року народження). На основі класу Person  розробити клас Worker (додати поля: посада, розмір заробітної плати, кількість відсотів оподаткування; методи:визначення кількості виплачених коштів за рік, та визначення розміру податків)
class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    toString() {
        return `Ім'я: ${this.name}, вік: ${this.age}, адреса: ${this.address}`;
    }
    getBirthYear() {
        return new Date().getFullYear() - this.age;
    }
}
class Workers extends Person {
    constructor(name, age, address, position, salary, taxPercent) {
        super(name, age, address);
        this.position = position;
        this.salary = salary;
        this.taxPercent = taxPercent;
    }
    getYearTax() {
        return ((this.salary * this.taxPercent) / 100) * 12;
    }
    getYearNetIncome() {
        return this.salary * 12 - this.getYearTax();
    }
}
const worker = new Workers("Олексій", 34, "Чернігів", "Програміст", 30000, 5);
console.log(worker.toString());
console.log("Рік народження:", worker.getBirthYear());
console.log("Податки за рік:", worker.getYearTax());
console.log("Виплачено за рік:", worker.getYearNetIncome());
//# sourceMappingURL=task_02.js.map