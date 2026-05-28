"use strict";
// Виведіть всі можливі наступні комбінації ходів користувачів у грі“Хрестики-нулики”, починаючи з деякої заданої ситуації (тобто маємо двовимірний масив з елементами : 0 - нулик, Х - хрестик, пробіл - ще не зайнято, і вам треба самостійно вивести всі можливі шляхи заповнення ще незаповнених клітинок (де пробіли). Поки можна не підраховувати чи вже є 3 хрестики чи 3 нулики у рядок.
// У нас є поле:
const board = [
    ["X", "0", " "],
    [" ", "X", " "],
    ["0", " ", " "],
];
// Створимо масив з  координатами пустих клітинок
let emptyArr = [];
for (let i = 0; i < board.length; i++) {
    for (let w = 0; w < board[i].length; w++) {
        if (board[i][w] === " ")
            emptyArr.push([i, w]);
    }
}
console.log(emptyArr);
// Рекурсія
function generateBoards(index, board) {
    if (index === emptyArr.length) {
        console.log(board);
        return;
    }
    else {
        const [row, col] = emptyArr[index];
        board[row][col] = "X";
        generateBoards(index + 1, board);
        board[row][col] = "0";
        generateBoards(index + 1, board);
    }
}
generateBoards(0, board);
//# sourceMappingURL=task_02.js.map