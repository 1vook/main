"use strict";
// Задача 1. Описати масив об’єктів – сайтів розроблених компанією з такими властивостями
// ----- Властивості ------
// -	назва компанії на час розробки (назву періодично змінюють)
// -	власник компанії
// -	споснсори (масив спонсорів)
//              * прізвище спонсора
//       * ім’я  спонсора
//       * сума вкладень спонсора
// -	рік випуску
// -	вартість сайту
// Знайти:
// 1) загальну вартість усіх сайтів
// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
// 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
// 5) знайти рік, коли прибуток був найбільшим
// 6) упорядкувати список за спаданням прибутку
// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
let companies = [
    {
        companyName: "Windows",
        owner: "Jim",
        sponsors: [
            {
                firstName: "Oliver",
                lastName: "Smith",
                investment: 20000,
            },
            {
                firstName: "John",
                lastName: "Brown",
                investment: 15000,
            },
            {
                firstName: "Olga",
                lastName: "Otto",
                investment: 35000,
            },
        ],
        yearOfRelease: 2001,
        websiteCost: 500,
    },
    {
        companyName: "Google",
        owner: "Larry Page",
        sponsors: [
            {
                firstName: "Michael",
                lastName: "Johnson",
                investment: 45000,
            },
            {
                firstName: "Emma",
                lastName: "Davis",
                investment: 28000,
            },
            {
                firstName: "Sophia",
                lastName: "Wilson",
                investment: 32000,
            },
        ],
        yearOfRelease: 2004,
        websiteCost: 1800,
    },
    {
        companyName: "Amazon",
        owner: "Jeff Bezos",
        sponsors: [
            {
                firstName: "Daniel",
                lastName: "Taylor",
                investment: 50000,
            },
            {
                firstName: "Anna",
                lastName: "Miller",
                investment: 27000,
            },
            {
                firstName: "Robert",
                lastName: "Anderson",
                investment: 39000,
            },
        ],
        yearOfRelease: 1998,
        websiteCost: 25000,
    },
];
// 1) загальну вартість усіх сайтів
let totalCostWebsite = companies.reduce((prevSum, website) => (prevSum += website.websiteCost), 0);
document.write(`Загальна вартість усіх сайтів - ${totalCostWebsite} грн. <br>`);
// 2) кількість сайтів, що було зроблено між 2000 та 2009 р
let websiteSince2000And2009 = companies.filter((company) => company.yearOfRelease > 2000 && company.yearOfRelease < 2009).length;
document.write(`кількість сайтів, що було зроблено між 2000р. та 2009р. - ${websiteSince2000And2009} шт. <br>`);
// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 10000
let investmentBiggest10000 = companies.filter((companies) => {
    let totalInvestment = companies.sponsors.reduce((prevSum, invest) => (prevSum += invest.investment), 0);
    return totalInvestment > 10000;
}).length;
document.write(`кількість сайтів, де сума спонсорських вкладень була більшою за 10000 - ${investmentBiggest10000} шт. <br>`);
// 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
let allSponsors = [];
companies.forEach((companies) => companies.sponsors.forEach((sponsor) => allSponsors.push(sponsor)));
console.log(allSponsors);
// 5) знайти рік, коли прибуток був найбільшим
// Тут трішки умову не зрозумів, прибутку в самому масиві нема, є інвестиції, є скільки коштує сайт, буду використовувати скільки коштує сайт в рік заснування
const companyWithBiggestCost = companies.reduce((prevCompany, company) => company.websiteCost > prevCompany.websiteCost ? company : prevCompany);
const yearOfTheBiggestCost = companyWithBiggestCost.yearOfRelease;
console.log(yearOfTheBiggestCost);
// 6) упорядкувати список за спаданням прибутку
const sortedCompanies = companies.sort((a, b) => b.websiteCost - a.websiteCost);
console.log(sortedCompanies);
// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
const cheapSites = companies.filter((company) => company.websiteCost <= 10000);
const expensiveSites = companies.filter((company) => company.websiteCost > 10000);
console.log(cheapSites);
console.log(expensiveSites);
//# sourceMappingURL=task_01.js.map