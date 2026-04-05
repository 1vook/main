// Створити окремі функції, які для 4 чисел знаходять:
// 1)суму;
// 2)добуток;
// 3)середнє арифметичне;
// 4)мінімальне значення.

function getSum(
  num1: number,
  num2: number,
  num3: number,
  num4: number,
): number {
  return num1 + num2 + num3 + num4
}

function getProduct(num1 = 1, num2 = 2, num3 = 3, num4 = 4) {
  return num1 * num2 * num3 * num4
}

function getAvrNum(
  num1: number,
  num2: number,
  num3: number,
  num4: number,
): number {
  return (num1 + num2 + num3 + num4) / 4
}

function getMinNum(num1 = 1, num2 = 2, num3 = 3, num4 = 4) {
  let min = num1
  if (num2 < num1) min = num2
  else if (num3 < num1) min = num3
  else if (num4 < num1) min = num4
  return min
}

document.write(`
    <ul>
      <li>суму - ${getSum(1, 2, 3, 4)}</li>
      <li>добуток - ${getProduct()}</li>
      <li>середнє арифметичне -  ${getAvrNum(1, 2, 3, 4).toFixed(1)}</li>
      <li>мінімальне значення -  ${getMinNum()}</li>
    </ul>`)
