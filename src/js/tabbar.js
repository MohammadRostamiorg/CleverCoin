const tabbarBtns = document.querySelectorAll(".tabbar-btns__btn");
const tabbarTabs = Array.from(document.querySelectorAll(".tabbar__tab"));

export default function tabbarInit() {
  tabbarBtns.forEach((btn) => btn.addEventListener("click", changeTab));
}

function changeTab(e) {
  const { category } = e.target.dataset;
  tabbarTabs.forEach((tab) => {
    tab.dataset.category == category
      ? tab.classList.add("active")
      : tab.classList.remove("active");
  });

  tabbarBtns.forEach((btn) => {
    btn == e.target
      ? btn.classList.add("active")
      : btn.classList.remove("active");
  });
}
