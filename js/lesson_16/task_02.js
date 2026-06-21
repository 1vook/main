"use strict";
//   	Магазин
// Клас із полями #stock (масив з товарами (назва, кількість)) і #revenue. Дозвольте продавати товар, якщо є запас.
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Store_stock, _Store_revenue;
class Store {
    constructor(stock, revenue) {
        _Store_stock.set(this, void 0);
        _Store_revenue.set(this, void 0);
        if (revenue < 0)
            throw new Error("Виручка не може бути від’ємною");
        __classPrivateFieldSet(this, _Store_stock, stock, "f");
        __classPrivateFieldSet(this, _Store_revenue, revenue, "f");
    }
    sell(productName, amount, price) {
        if (amount <= 0)
            throw new Error("Некоректна кількість товару");
        const product = __classPrivateFieldGet(this, _Store_stock, "f").find((item) => item[0] === productName);
        if (!product)
            throw new Error("Товар не знайдено");
        if (product[1] < amount)
            throw new Error("Недостатньо товару на складі");
        product[1] -= amount;
        __classPrivateFieldSet(this, _Store_revenue, __classPrivateFieldGet(this, _Store_revenue, "f") + amount * price, "f");
    }
    toString() {
        let result = "Товари на складі:<br>";
        for (const product of __classPrivateFieldGet(this, _Store_stock, "f")) {
            result += `${product[0]} - ${product[1]} шт.<br>`;
        }
        result += `Виручка: ${__classPrivateFieldGet(this, _Store_revenue, "f")} грн.<br>`;
        return result;
    }
}
_Store_stock = new WeakMap(), _Store_revenue = new WeakMap();
try {
    const store = new Store([
        ["Молоко", 10],
        ["Хліб", 5],
        ["Сир", 3],
    ], 0);
    document.write(`${store}<br>`);
    store.sell("Молоко", 3, 50);
    store.sell("Сир", 2, 127);
    document.write(`${store}<br>`);
}
catch (error) {
    console.log(error);
}
//# sourceMappingURL=task_02.js.map