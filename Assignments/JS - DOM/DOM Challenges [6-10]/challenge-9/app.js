const panel = document.querySelector(".panel");
const toggleBtn = document.querySelector(".toggle-btn");
const para = document.querySelector(".content p");
const closeBtn = document.querySelector(".close-btn");
const menuItems = document.querySelectorAll(".panel .menu-item");

function showPanel() {
  panel.classList.add("active");
  document.body.classList.add("no-scroll");
  toggleBtn.textContent = "Close Menu";
  para.textContent = "Click the button to close the sliding menu";
}

function closePanel() {
  panel.classList.remove("active");
  document.body.classList.remove("no-scroll");
  toggleBtn.textContent = "Open Menu";
  para.textContent = "Click the button to open the sliding menu";
}

toggleBtn.addEventListener("click", () => {
  if (panel.classList.contains("active")) {
    closePanel();
  } else {
    showPanel();
  }
});

closeBtn.addEventListener("click", closePanel);

// close when clicking outside the panel
document.addEventListener("click", (e) => {
  if (
    panel.classList.contains("active") &&
    !panel.contains(e.target) &&
    !toggleBtn.contains(e.target)
  ) {
    // console.log(panel.contains(e.target));
    closePanel();
  }
});

// if (
//   panel is currently open
//   AND the user clicked outside the panel
//   AND the user didn’t click the toggle button
// ) {
//   close the panel
// }

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    alert(`You clicked ${item.textContent}`);
    closePanel();
  });
});
