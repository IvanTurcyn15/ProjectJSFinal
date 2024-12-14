import  {openFooterModal, closeFooterModal, onCloseBackdropClick, onCloseEscapeClick} from "./footer-modal.js";
const backdrop = document.querySelector(".backdrop");
const btnFooterModalOpen = document.querySelector(".subscription-button");
const btnFooterModalClose = document.querySelector(".footer-modal-close-btn");

btnFooterModalOpen.addEventListener("click", openFooterModal);
btnFooterModalClose.addEventListener("click", closeFooterModal);
backdrop.addEventListener("click", onCloseBackdropClick);
document.addEventListener("keydown", onCloseEscapeClick);
