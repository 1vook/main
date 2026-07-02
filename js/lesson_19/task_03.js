"use strict";
const button = document.querySelector("button");
const lists = document.querySelectorAll("ol");
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    lists.forEach((list) => {
        if (list.children.length % 2 === 0) {
            list.style.color = "green";
        }
        else {
            list.style.color = "red";
        }
    });
});
//# sourceMappingURL=task_03.js.map