import "../../telegram-web-app.js";
import tabbarInit from "./tabbar.js";
// Init TWA
Telegram.WebApp.ready();
tabbarInit();

if (localStorage.getItem("coins") == null) {
  localStorage.setItem("coins", 1000);
}

const tapEl = document.querySelector(".tap-section__tap-btn");
const coinsCountEl = document.querySelector(".score");

function setScore() {
  coinsCountEl.innerText = localStorage.getItem("coins");
}

tapEl.addEventListener("click", () => {
  localStorage.setItem("coins", +localStorage.getItem("coins") + 2);
  setScore();
});

setScore();

const tasks = document.querySelectorAll(
  ".tasks-section__tasks-list__task-item"
);

tasks.forEach((t) => {
  t.addEventListener("click", taskHandler);
});

function taskHandler(e) {
  const { score, link } = e.target.dataset;
  Telegram.WebApp.openLink(link);
  localStorage.setItem(
    "coins",
    Number(localStorage.getItem("coins")) + Number(score)
  );
  setScore();
}