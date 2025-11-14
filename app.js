
const getRandomItem = (items) => {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
};


const CARD_SUITS = ["♦", "♥", "♠", "♣"];
const CARD_VALUES = ["A", "2", "3", "4", "5", "6", "7",
  "8", "9", "10", "J", "Q", "K"
];



const createRandomCard = () => {
  const suit = getRandomItem(CARD_SUITS);
  const value = getRandomItem(CARD_VALUES);
  const isRedSuit = suit === "♥" || suit === "♦";

  return {
    suit,
    value,
    colorClass: isRedSuit ? "red" : "black"
  };
};



const getCardElements = () => ({
  topSuit: document.getElementById("top-suit"),
  bottomSuit: document.getElementById("bottom-suit"),
  value: document.getElementById("value")
});

const applyCardToDOM = (card) => {
  const { topSuit, bottomSuit, value } = getCardElements();

  if (!topSuit || !bottomSuit || !value) return;

  topSuit.textContent = card.suit;
  bottomSuit.textContent = card.suit;
  value.textContent = card.value;

  topSuit.className = `top-suit ${card.colorClass}`;
  bottomSuit.className = `bottom-suit ${card.colorClass}`;
  value.className = `value ${card.colorClass}`;
};

const showNewCard = () => {
  const randomCard = createRandomCard();
  applyCardToDOM(randomCard);
};



const setupEvents = () => {
  const button = document.getElementById("btn");
  if (!button) return;

  button.addEventListener("click", showNewCard);
};

window.addEventListener("load", () => {
  showNewCard();
  setupEvents();      
});
