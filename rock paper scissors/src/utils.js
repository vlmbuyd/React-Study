const HANDS = ["rock", "scissor", "paper"];

const WINS = {
  rock: "scissor",
  scissor: "paper",
  paper: "rock",
};

export function compareHand(a, b) {
  if (WINS[a] === b) return 1; // a 이김
  if (WINS[b] === a) return -1; // a 짐
  return 0; //  비김
}

function random(n) {
  return Math.floor(Math.random() * n);
}

export function generateRandomHand() {
  const idx = random(HANDS.length);
  return HANDS[idx];
}
