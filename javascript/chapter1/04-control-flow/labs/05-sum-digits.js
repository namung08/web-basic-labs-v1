// TODO: prompt로 입력받은 숫자의 각 자릿수 합을 구하도록 while 루프를 사용하여 작성하세요.
const answer = prompt("5자리 이상의 숫자를 입력해 주세요");

const numbers = Array.from(String(answer), Number);

let sum = 0;
for(const number of numbers) {
    sum += number;
}

alert(`입력받은 숫자의 각 자릿수 합은 ${sum} 입니다.`);
