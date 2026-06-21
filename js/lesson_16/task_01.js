"use strict";
//   	Наплічник
// Клас із полями #weight і #items. Дозвольте додавати предмети, якщо вага не перевищує 10 кг.
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
var _Backpack_weight, _Backpack_items;
class Backpack {
    constructor(weight, items) {
        _Backpack_weight.set(this, void 0);
        _Backpack_items.set(this, void 0);
        if (weight < 0 || weight > 10)
            throw new Error("Некоректна вага");
        if (items < 0)
            throw new Error("Некоректна кількість предметів");
        __classPrivateFieldSet(this, _Backpack_weight, weight, "f");
        __classPrivateFieldSet(this, _Backpack_items, items, "f");
    }
    get Weight() {
        return __classPrivateFieldGet(this, _Backpack_weight, "f");
    }
    get Items() {
        return __classPrivateFieldGet(this, _Backpack_items, "f");
    }
    addItem(itemWeight) {
        var _a;
        if (itemWeight <= 0)
            throw new Error("Вага предмета має бути більшою за 0");
        if (__classPrivateFieldGet(this, _Backpack_weight, "f") + itemWeight > 10)
            throw new Error("Предмет не влізе в наплічник");
        __classPrivateFieldSet(this, _Backpack_weight, __classPrivateFieldGet(this, _Backpack_weight, "f") + itemWeight, "f");
        __classPrivateFieldSet(this, _Backpack_items, (_a = __classPrivateFieldGet(this, _Backpack_items, "f"), _a++, _a), "f");
    }
    toString() {
        return `Предметів: ${__classPrivateFieldGet(this, _Backpack_items, "f")}, загальна вага: ${__classPrivateFieldGet(this, _Backpack_weight, "f")} кг <br>`;
    }
}
_Backpack_weight = new WeakMap(), _Backpack_items = new WeakMap();
try {
    const backpack = new Backpack(0, 0);
    document.write(`${backpack}`);
    backpack.addItem(3);
    document.write(`${backpack}`);
    backpack.addItem(8);
}
catch (error) {
    console.log(error);
}
//# sourceMappingURL=task_01.js.map