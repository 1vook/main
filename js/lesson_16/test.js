"use strict";
class Engine {
    start() {
        console.log("Двигун запущено");
    }
}
class Car {
    constructor() {
        this.engine = new Engine();
    }
    drive() {
        this.engine.start();
        console.log("Автомобіль поїхав");
    }
}
//# sourceMappingURL=test.js.map