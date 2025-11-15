
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

  const redSuits = ["♥", "♦"];
  const isRedSuit = redSuits.includes(suit);

  const colorClass = isRedSuit ? "red" : "black";

  return {
    suit: suit,
    value: value,
    colorClass: colorClass
  };
};



const getCardElements = () => ({
  topSuit: document.getElementById("top-suit"),
  bottomSuit: document.getElementById("bottom-suit"),
  value: document.getElementById("value")
});



const applyCardToDOM = (card) => {
  const elements = getCardElements();
  const { topSuit, bottomSuit, value } = elements;

  const elementsExist = topSuit && bottomSuit && value;
  if (!elementsExist) return;

  topSuit.textContent = card.suit;
  bottomSuit.textContent = card.suit;
  value.textContent = card.value;

  const color = card.colorClass;

  topSuit.className = `top-suit ${color}`;
  bottomSuit.className = `bottom-suit ${color}`;
  value.className = `value ${color}`;
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
