const buttonicon = document.querySelector(".buttonicon");
const divmodal = document.querySelector(".modal-menu");
const modalclose = document.querySelector(".modal-close");

function onClickButtonIcon() {
  divmodal.classList.toggle("isclose");
}

buttonicon.addEventListener("click", onClickButtonIcon);
modalclose.addEventListener("click", onClickButtonIcon);
