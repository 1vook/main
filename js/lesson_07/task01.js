"use strict";
// Створити функцію, яка за номером місяця повертає пору року, до якої
// відноситься цей місяць.
function getSeasonOfTheYear(numberOfMonth) {
    let seasonOfTheYear;
    if (numberOfMonth === 12 || numberOfMonth < 3)
        seasonOfTheYear = "Зима";
    else if (numberOfMonth < 6)
        seasonOfTheYear = "Весна";
    else if (numberOfMonth < 9)
        seasonOfTheYear = "Літо";
    else if (numberOfMonth < 12)
        seasonOfTheYear = "Осінь";
    else
        seasonOfTheYear = "Всього 12 місяців";
    return seasonOfTheYear;
}
const user = parseInt(prompt(`Вкажіть номер місяця щоб дізнатися яка це пора року`, "4"));
document.write(`<h3>${getSeasonOfTheYear(user)}</h3>`);
//# sourceMappingURL=task01.js.map