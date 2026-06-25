"use strict";
var _a, _b, _c, _d;
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");
(_a = document.getElementById("addBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    result.value = String(Number(num1.value) + Number(num2.value));
});
(_b = document.getElementById("subBtn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
    result.value = String(Number(num1.value) - Number(num2.value));
});
(_c = document.getElementById("mulBtn")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
    result.value = String(Number(num1.value) * Number(num2.value));
});
(_d = document.getElementById("divBtn")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
    result.value = String(Number(num1.value) / Number(num2.value));
});
//# sourceMappingURL=task_01.js.map