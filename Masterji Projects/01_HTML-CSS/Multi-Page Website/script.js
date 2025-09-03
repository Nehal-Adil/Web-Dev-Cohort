// Contact form handling
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();

  // Fake "submission" for demo
  formMessage.textContent = `✅ Thank you, ${name}! Your message has been sent.`;
  formMessage.style.color = "green";

  // Reset form
  form.reset();
});
