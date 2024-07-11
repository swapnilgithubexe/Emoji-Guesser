const emojiDetails = [
  { description: "cake", emoji: "🍰" },
  { description: "Nigga", emoji: "👨🏿‍🦱" },
  { description: "Fuck you", emoji: "🖕🏻" },
  { description: "Gay", emoji: "💅" },
  { description: "Lesbian", emoji: "👩‍❤️‍💋‍👩" },
  { description: "Gloves", emoji: "🧤" },
  { description: "Panda", emoji: "🐼" },
  { description: "Pizza", emoji: "🍕" },
  { description: "Milk", emoji: "🍼" },
  { description: "Beer", emoji: "🍺" },
  { description: "Football", emoji: "⚽️" },
  { description: "Golf", emoji: "⛳️" },
  { description: "Bus", emoji: "🚌" },
  { description: "911", emoji: "✈️🏢" },
  { description: "Me", emoji: "🗿" },
  {
    description: "Watch", emoji: "⌚️"
  },
  { description: "Link", emoji: "🔗" },
  {
    description: "Her", emoji: "💔"
  },
  { description: "Queen", emoji: "♛" },

  // Add more emoji descriptions here
];

let currentEmojiIndex = 0;
let score = 0;
let colorArray = ["#E99A9A", "#F1BF57", "#F1EC57", "#D4F157", "#57F1A5", "#57F1C6", "#7ECFE3", "#A094BF", "#EC81EE", "#F138BD"];
setInterval(() => {
  let random = (Math.random() * 10).toFixed(0)
  document.body.style.backgroundColor = String(colorArray[random])
}, 500);
const guessInput = document.getElementById("guess-input");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");

function displayEmoji() {
  const descriptionElement = document.getElementById("description");
  descriptionElement.textContent = emojiDetails[currentEmojiIndex].emoji;
}

function checkGuess() {
  const guess = guessInput.value.trim().toLowerCase();
  const correctEmoji = emojiDetails[currentEmojiIndex].description.trim().toLowerCase();

  if (guess === correctEmoji) {
    resultElement.textContent = "Correct!";
    score++;

  } else {
    resultElement.textContent = "Wrong!";
  }
  console.log(score);
  scoreElement.textContent = `Score: ${score}`;
  guessInput.value = "";
  guessInput.focus();
  nextEmoji();
}

function nextEmoji() {
  currentEmojiIndex++;

  if (currentEmojiIndex === emojiDetails.length) {
    currentEmojiIndex = 0;
    score = 0;
  }

  displayEmoji();
}

document
  .getElementById("guess-input")
  .addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      checkGuess();
    }
  });

document.addEventListener("DOMContentLoaded", () => {
  displayEmoji();
});

