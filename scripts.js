const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");
const card = document.querySelector(".card");

let noClicks = 0;

function moveNoButton() {
  const buttonRect = noBtn.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();
  const maxX = cardRect.width - buttonRect.width - 20;
  const maxY = cardRect.height - buttonRect.height - 20;

  const nextX = Math.max(10, Math.floor(Math.random() * maxX));
  const nextY = Math.max(10, Math.floor(Math.random() * maxY));

  noBtn.style.position = "absolute";
  noBtn.style.left = `${nextX}px`;
  noBtn.style.top = `${nextY}px`;
}

function createHearts(count) {
  for (let i = 0; i < count; i += 1) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = "💖";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${2 + Math.random() * 2}s`;
    card.appendChild(heart);
    setTimeout(() => heart.remove(), 2200);
  }
}

yesBtn.addEventListener("click", () => {
  result.textContent = "Ты ж мое любимое золото!) 💕";
  card.classList.remove("celebrate");
  void card.offsetWidth;
  card.classList.add("celebrate");
  createHearts(24);
  noBtn.style.display = "none";
});

noBtn.addEventListener("click", () => {
  noClicks += 1;

  if (noClicks === 1) {
    result.textContent = "Подумай ещё раз...";
  } else if (noClicks === 2) {
    result.textContent = "Я очень жду твоего «да»";
  } else {
    result.textContent = "Ну блин(...";
  }

  moveNoButton();
});

noBtn.addEventListener("mouseenter", moveNoButton);
