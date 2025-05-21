// 문제: prompt() 메서드를 활용해 사용자에게 숫자를 입력받아 홀수/짝수를 출력하세요.
const input = prompt("숫자를 입력해 주세요.");

let result;

if (input % 2 === 0) {
  result = `${input}은(는) 짝수 입니다.`;
} else {
  result = `${input}은(는) 홀수 입니다.`;
}

alert(result);
