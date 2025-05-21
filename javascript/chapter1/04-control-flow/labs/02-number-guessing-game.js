// 문제: 사용자가 정답 숫자를 맞힐 때까지 계속 입력받는 게임을 만들어보세요. (while 사용)
// Math.random()으로 1~10 중 하나를 고르고 맞힐 때까지 반복
// readline 사용
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const random = Math.floor(Math.random() * 10) + 1;

function question() {
  return new Promise((resolve) => {
    rl.question("숫자 맞추기! 숫자를 입력해 주세요: ", (answer) => {
      resolve(answer);
    });
  });
}

async function playGame() {
  while (true) {
    const answer = await question();
    const num = parseInt(answer);

    if (isNaN(num)) {
      console.log("올바른 숫자를 입력해주세요!");
      continue;
    }

    if (num === random) {
      console.log("정답!");
      rl.close();
      break;
    } else {
      console.log("틀렸습니다. 다시 입력해주세요!");
    }
  }
}

playGame();
