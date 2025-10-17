const gameContainer = document.querySelector("#gameContainer");
const movesElement = document.querySelector("#moves");
const timeElement = document.querySelector("#time");
const restartBtn = document.querySelector("#restartBtn");

const emojis = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼"];
let cards = [...emojis, ...emojis];

let numberOfMoves = 0;
let timetaken = 0;
let mainTimer = null;
let flippedCards = [];
let matchedPair = 0;

const shuffleCards = () => {
  cards.sort(() => Math.random() - 0.5);
};

const init = () => {
  shuffleCards();
  console.log(cards);

  // reset moves
  numberOfMoves = 0;
  timetaken = 0;
  matchedPair = 0;
  flippedCards = [];

  updateMoves();

  gameContainer.innerHTML = "";

  cards.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.index = index;

    card.innerHTML = `
      <div class="card-front"></div>
      <div class="card-back">${item}</div>
      
    `;

    card.addEventListener("click", (e) => {
      if (card.classList.contains("flipped") || flippedCards.length >= 2) {
        return;
      }

      if (!mainTimer) {
        mainTimer = setInterval(updateTimer, 1000);
      }

      card.classList.add("flipped");
      flippedCards.push(card);

      if (flippedCards.length == 2) {
        numberOfMoves++;
        updateMoves();
        checkFlippedCards();
      }
    });

    gameContainer.appendChild(card);
  });
};

function updateMoves() {
  movesElement.textContent = numberOfMoves;
}

function checkFlippedCards() {
  const [card1, card2] = flippedCards;

  // console.log("card1: ", card1 + " card2: ", card2);
  console.log(cards[card1.dataset.index]);
  console.log(cards[card2.dataset.index]);

  const isMatched = cards[card1.dataset.index] === cards[card2.dataset.index];

  if (isMatched) {
    matchedPair++;
    flippedCards = [];

    if (matchedPair == emojis.length) {
      gameContainer.classList.add("disabled");
      setTimeout(showVictoryMessage, 500);
    }
  } else {
    setTimeout(() => {
      card1.classList.remove("flipped");
      card2.classList.remove("flipped");
      flippedCards = [];
    }, 800);
  }
}

function updateTimer() {
  timetaken++;
  const minutes = Math.floor(timetaken / 60);
  const seconds = timetaken % 60;

  timeElement.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function showVictoryMessage() {
  clearInterval(mainTimer);
  const score = getScore();

  setTimeout(() => {
    alert(
      `Congratulations! 🎉\nYou won in ${numberOfMoves} moves and ${formatTime(
        timetaken
      )}! \nScore: ${score} points`
    );
  }, 300);
}

function getScore() {
  const baseScore = 1000;
  const movesPenalty = numberOfMoves * 10;
  const timePenalty = timetaken * 2;
  return Math.max(0, baseScore - movesPenalty - timePenalty);
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function restartGame() {
  init();
}

restartBtn.addEventListener("click", restartGame);

function resetTimer() {
  clearInterval(mainTimer);
  mainTimer = null;
  timetaken = 0;
  timeElement.textContent = "0:00";
}

init();
