let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");

let turn0 = true; // player-1
let count = 0;

const winChance = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "0";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    count++;
    let isWinner = checkWinner();
    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});
const gameDraw = () => {
  alert("Game Draw");
  disableBoxes();
};

const disableBoxes = () => [
  boxes.forEach((box) => {
    box.disabled = true;
  }),
];

const enableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
};

const checkWinner = () => {
  for (let pattern of winChance) {
    let box1 = boxes[pattern[0]].innerText;
    let box2 = boxes[pattern[1]].innerText;
    let box3 = boxes[pattern[2]].innerText;
    if (box1 === box2 && box2 === box3 && box1 !== "") {
      alert(`${box1} wins the game`);
      disableBoxes();
    }
  }
};

const resetgame = () => {
  turn0 = true;
  count = 0;
  enableBoxes();
};

resetbtn.addEventListener("click", resetgame);
