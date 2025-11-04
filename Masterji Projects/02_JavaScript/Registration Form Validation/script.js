const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirmPassword-error");
const submitBtn = document.getElementById("submitBtn");

// Disable button by default
submitBtn.disabled = true;

function clearValidation(input) {
  input.classList.remove("is-valid", "is-invalid");
}

function isFormValid() {
  return validateEmail() && validatePassword() && validateConfirmPassword();
}

// Email
function validateEmail() {
  const email = emailInput.value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  clearValidation(emailInput);

  if (email === "") {
    emailError.textContent = "Email is required";
    emailInput.classList.add("is-invalid");
    return false;
  }
  if (!emailRegex.test(email)) {
    emailError.textContent = "Invalid email format";
    emailInput.classList.add("is-invalid");
    return false;
  }

  emailError.textContent = "";
  emailInput.classList.add("is-valid");
  return true;
}

// Password
function validatePassword() {
  const password = passwordInput.value;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  clearValidation(passwordInput);

  if (password === "") {
    passwordError.textContent = "Password is required";
    passwordInput.classList.add("is-invalid");
    return false;
  }
  if (!passwordRegex.test(password)) {
    passwordError.textContent =
      "Must have 8+ chars, uppercase, lowercase, number, and symbol (@$!%*?&)";
    passwordInput.classList.add("is-invalid");
    return false;
  }

  passwordError.textContent = "";
  passwordInput.classList.add("is-valid");
  return true;
}

// Confirm Password
function validateConfirmPassword() {
  const confirmPassword = confirmPasswordInput.value;
  const password = passwordInput.value;

  clearValidation(confirmPasswordInput);

  if (confirmPassword === "") {
    confirmPasswordError.textContent = "Confirm Password is required";
    confirmPasswordInput.classList.add("is-invalid");
    return false;
  }
  if (confirmPassword !== password) {
    confirmPasswordError.textContent = "Passwords do not match";
    confirmPasswordInput.classList.add("is-invalid");
    return false;
  }

  confirmPasswordError.textContent = "";
  confirmPasswordInput.classList.add("is-valid");
  return true;
}

// Update button state
function updateSubmitButton() {
  submitBtn.disabled = !isFormValid();
}

// Real-time validation + button update
emailInput.addEventListener("input", () => {
  validateEmail();
  updateSubmitButton();
});

passwordInput.addEventListener("input", () => {
  validatePassword();
  // Re-validate confirm password when password changes
  validateConfirmPassword();
  updateSubmitButton();
});

confirmPasswordInput.addEventListener("input", () => {
  validateConfirmPassword();
  updateSubmitButton();
});

// Form submission
document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  if (isFormValid()) {
    alert("Registration successful!");
    // form.submit(); // uncomment in real app
  }
});
