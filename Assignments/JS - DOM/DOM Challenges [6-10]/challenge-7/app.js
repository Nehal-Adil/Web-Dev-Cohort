const allAccordionBtns = document.querySelectorAll(".accordion-button");
const allAccordionItems = document.querySelectorAll(".accordion-item");

allAccordionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const current = btn.parentElement;

    const isActive = current.classList.contains("active");

    allAccordionItems.forEach((item) => item.classList.remove("active"));

    if (!isActive) {
      current.classList.add("active");
    }
  });
});
