// 문제: 배열 내 최소값, 최대값을 찾아보세요.

const numbers = [15, 3, 20, 8, 42];

numbers.sort((a, b) => a - b);
console.log(numbers);

console.log(numbers[numbers.length - 1]);

console.log(numbers[0]);
