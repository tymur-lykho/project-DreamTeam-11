(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-menu-open]"),
    closeModalBtn: document.querySelectorAll("[data-menu-close]"),
    modal: document.querySelector("[data-menu]"),
    body: document.body,
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  
  refs.closeModalBtn.forEach(btn => {
    btn.addEventListener("click", event => {
      if (btn.tagName === "A" && btn.hasAttribute("href")) {
        toggleModal();
      } else {
        event.preventDefault();
        toggleModal();
      }
    });
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
    refs.body.classList.toggle("scroll-lock");
  }
})();