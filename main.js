// 네브바 클릭시 화면 이동

const menu = document.querySelector(".menu");

menu.addEventListener("click", (event) => {
  const link = event.target.dataset.link;
  const linkPosition = document.querySelector(link);
  if (link == null) {
    return;
  } else {
    linkPosition.scrollIntoView({ behavior: "smooth" });
  }
});

// 토글 버튼
const navbarToggleBtn = document.querySelector(".navbar_toggle_btn");

navbarToggleBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
});
