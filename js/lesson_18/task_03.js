"use strict";
var _a;
const birthYear = document.getElementById("birthYear");
const ageResult = document.getElementById("ageResult");
(_a = document.getElementById("calcAgeBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    const currentYear = new Date().getFullYear();
    ageResult.value = String(currentYear - Number(birthYear.value));
});
//# sourceMappingURL=task_03.js.map