/* 
사용자와 컴퓨터가 가위바위보 게임을 합니다.
사용자는 "가위", "바위", "보" 중 하나를 입력하고, 컴퓨터는 무작위로 선택합니다.
3판 2선승제로 승부를 결정하세요.

-- 출력 예시 -- 

[1라운드]
당신의 선택: 가위
컴퓨터의 선택: 보
당신이 이겼습니다! (1승 0패)

[2라운드]
당신의 선택: 보
컴퓨터의 선택: 바위
당신이 이겼습니다! (2승 0패)

🎉 게임 종료: 당신의 승리입니다!

Math.random() - 난수 생성 함수
*/
const gameRules = {
  가위: {
    win: "보",
    lose: "바위",
  },
  바위: {
    win: "가위",
    lose: "보",
  },
  보: {
    win: "바위",
    lose: "가위",
  },
};

let gameCount = 0;

let userWinCount = 0;
let computerWinCount = 0;

const choices = ["가위", "바위", "보"];
function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

do {
  const computer = getComputerChoice();
  const userChoices = prompt("가위, 바위, 보 중 하나를 선택하세요: ");
  if (!choices.includes(userChoices)) {
    alert("잘못된 입력입니다. 가위, 바위, 보 중 하나를 선택해주세요.");
    continue;
  }
  alert(`user: ${userChoices}`);

  alert(`computer: ${computer}`);
  gameCount++;
  if (computer === userChoices) {
    alert("비겼습니다.");
  } else if (gameRules[userChoices].win === computer) {
    alert("이겼습니다.");
    userWinCount++;
  } else {
    alert("졌습니다.");
    computerWinCount++;
  }
  alert(`win: ${userWinCount} / lose: ${computerWinCount}`);
  if (userWinCount >= 2 || computerWinCount >= 2) {
    alert(
      userWinCount > computerWinCount
        ? "🎉 게임 종료: 사용자의 승리입니다!"
        : "🎉 게임 종료: 컴퓨터터의 승리입니다!"
    );
    break;
  }
} while (true);
