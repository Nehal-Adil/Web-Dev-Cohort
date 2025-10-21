const gallery = document.getElementById("gallery");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModalBtn = document.getElementById("closeModal");
const galleryItem = document.querySelectorAll(".gallery-item");

galleryItem.forEach((item) => {
  const img = item.querySelector("img");

  img.addEventListener("click", () => {
    modalImage.src = img.src;
    modalImage.alt = img.alt || "Enlarged Image";

    // modal.style.display = "flex";
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // prevent scrolling
  });
});

// Close modal when clicking close button
closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("active");
  document.body.style.overflow = ""; // Re-enable scrolling
});

// Close modal when clicking outside image
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
});

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
});
