"use strict";
var _a;
const USD_RATE = 41;
const EUR_RATE = 48;
const uah = document.getElementById("uah");
const eur = document.getElementById("eur");
const usd = document.getElementById("usd");
(_a = document.getElementById("convertBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    const amount = Number(uah.value);
    usd.value = (amount / USD_RATE).toFixed(2);
    eur.value = (amount / EUR_RATE).toFixed(2);
});
//# sourceMappingURL=task_02.js.map