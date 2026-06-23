"use strict";
// 2.	Створити службове авто (водій, марка, номер). Створити клас таким чином, щоб можна було створити тільки один екземпляр цього класу.
class ServiceCar {
    constructor(driver, brand, number) {
        this.driver = driver;
        this.brand = brand;
        this.number = number;
    }
    static getInstance(driver, brand, number) {
        if (!ServiceCar.instance)
            ServiceCar.instance = new ServiceCar(driver, brand, number);
        return ServiceCar.instance;
    }
    toString() {
        return `
      Водій: ${this.driver}<br>
      Марка: ${this.brand}<br>
      Номер: ${this.number}<br>
    `;
    }
}
const car1 = ServiceCar.getInstance("Іван Петренко", "Toyota", "AA1234BB");
document.write(car1.toString());
const car2 = ServiceCar.getInstance("Віктор Ющенко", "BMW", "AA1111BB");
document.write(car2.toString());
//# sourceMappingURL=task_02.js.map