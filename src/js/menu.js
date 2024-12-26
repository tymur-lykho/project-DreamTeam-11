(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-menu-open]"),
    closeModalBtn: document.querySelectorAll("[data-menu-close]"),
    modal: document.querySelector("[data-menu]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  
  refs.closeModalBtn.forEach(btn => {
    btn.addEventListener("click", event => {
      // Якщо це <a>, перевірити наявність href
      if (btn.tagName === "A" && btn.hasAttribute("href")) {
        // Дозволяємо стандартний перехід
        toggleModal();
      } else {
        // Якщо це кнопка або елемент без href
        event.preventDefault();
        toggleModal();
      }
    });
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
  }
})();