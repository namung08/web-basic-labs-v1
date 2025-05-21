/* 사용자가 입력한 비밀번호가 다음 조건을 만족하는지 확인하고 모든 조건 만족 시 "강한 비밀번호", 아니면 부족한 항목을 명시하세요.
조건:
- 길이 8자 이상
- 대문자 1개 이상
- 숫자 1개 이상
- 특수문자 1개 이상 (!@#$%^&*)
*/
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const hasUpperCase = /[A-Z]/
const hasNumberCase = /[0-9]/
const hasSpecial = /[!@#$%^&*]/

rl.question("비밀번호를 입력하세요 : ", (pass) => {
    if(pass.length < 8) {
        console.log("비밀번호의 길이는 8자 이상이어야 합니다.");
    } else if(!hasUpperCase.test(pass)) {
        console.log("비밀번호에 최소 1개 이상의 대문자가 포함되어야 합니다.");
    } else if(!hasNumberCase.test(pass)) {
        console.log("비밀번호에 최소 1개 이상의 숫자가 포함되어야 합니다.");
    } else if(!hasSpecial.test(pass)) {
        console.log("비밀번호에 최소 1개 이상의 특수문자(!@#$%^&*)가 포함되어야 합니다.");
    }
    rl.close();
});
