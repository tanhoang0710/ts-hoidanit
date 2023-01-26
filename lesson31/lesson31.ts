// Rules of rest parameters in TS:
/**
 * 1. 1 function chỉ có 1 tham số rest duy nhất và phải là tham số cuối cùng
 * 2. Phải sử dụng với array type
 */

const sumNumber = (...numbers: number[]): number => {
  let total = 0;
  numbers.forEach(num => total += num)
  return total
}

console.log(sumNumber()); // 0
console.log(sumNumber(1, 2)); // 2 
console.log(sumNumber(1, 2, 3)); // 6


const multiply = (n: number, ...m: number[]): number[] => {
  return m.map(x => n * x);
}

console.log(multiply(2, 2, 3, 4));

const greet = (greeting: string, ...names: string[]): string => {
  return greeting + ' ' + names.join(', ') + '!'
}

console.log(greet('Hello', 'tanhun', 'Steve'));
console.log(greet('Hello'));