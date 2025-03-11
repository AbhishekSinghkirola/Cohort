const addTaskBtnEl = document.querySelectorAll(".add-task");
const boardEl = document.querySelectorAll(".board-cards");
const cardEl = document.querySelectorAll(".card");

const addNewTask = (e) => {
  const targetElement = e.target;
  const parentBoardEl = targetElement.closest(".board");
  const task = prompt("Enter your task:");

  if (task) {
    const newTaskCard = document.createElement("div");

    newTaskCard.innerHTML = `<p>${task}</p>`;
    newTaskCard.classList.add("card");
    newTaskCard.setAttribute("draggable", "true");

    parentBoardEl.appendChild(newTaskCard);

    newTaskCard.addEventListener("dragstart", addCardFlying);
    newTaskCard.addEventListener("dragend", removeCardFlying);
  }
};

const handleBoard = (e) => {
  const targetedBoard = e.target;

  const flyingCard = document.querySelector(".flying");

  if (flyingCard) {
    if (targetedBoard.classList.contains("board-cards")) {
      targetedBoard.appendChild(flyingCard);
    }
  }
};

const addCardFlying = (e) => {
  const targetedCard = e.target;
  targetedCard.classList.add("flying");
};

const removeCardFlying = (e) => {
  const targetedCard = e.target;
  targetedCard.classList.remove("flying");
};

addTaskBtnEl.forEach((btn) => {
  btn.addEventListener("click", addNewTask);
});

boardEl.forEach((board) => {
  board.addEventListener("dragover", handleBoard);
});

cardEl.forEach((card) => {
  card.addEventListener("dragstart", addCardFlying);
  card.addEventListener("dragend", removeCardFlying);
});
