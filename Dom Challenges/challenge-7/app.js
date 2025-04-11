const accordionBtn = document.querySelectorAll(".accordion-button");
const accordionItem = document.querySelectorAll(".accordion-item");

accordionBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const accordionItemEl = btn.closest(".accordion-item");

    accordionItemEl.classList.toggle("active");
  });
});
