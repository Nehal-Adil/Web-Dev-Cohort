const questionElem = document.getElementById("question");
const answerElem = document.getElementById("answer");
const nextBtn = document.getElementById("next-btn");
const resultElem = document.getElementById("result");

let currentIndex = 0;
let score = 0;

function startQuiz() {
  currentIndex = 0;
  score = 0;
  resultElem.innerHTML = "";
  nextBtn.innerText = "Next";
  nextBtn.style.display = "none";
  showQuestions();
}

function showQuestions() {
  resetState();

  const currentQuestion = questions[currentIndex];
  questionElem.innerText = currentQuestion.question;

  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.innerText = answer;
    button.classList.add("option");
    button.addEventListener("click", () => selectAnswer(index));
    answerElem.appendChild(button);
  });
}

function selectAnswer(selectedIndex) {
  const correctIdx = questions[currentIndex].correct;
  const allButtons = answerElem.querySelectorAll(".option");

  // Disable all buttons and apply styles
  allButtons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === correctIdx) {
      btn.classList.add("correct");
    }
    if (idx === selectedIndex && idx !== correctIdx) {
      btn.classList.add("wrong");
    }
  });

  if (selectedIndex === correctIdx) {
    score++;
  }

  // Show Next button after selection
  nextBtn.style.display = "block";
}

function showResult() {
  resetState();
  questionElem.innerText = ""; // Clear question
  resultElem.innerHTML = `
    <h2>Your Score: ${score} / ${questions.length}</h2>
    <button class="btn" onclick="startQuiz()">Play Again</button>
  `;
}

function resetState() {
  // Hide Next button
  nextBtn.style.display = "none";

  // ✅ Clear answer buttons from answerElem
  while (answerElem.firstChild) {
    answerElem.removeChild(answerElem.firstChild);
  }
}

function handleNext() {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestions();
  } else {
    showResult();
  }
}

nextBtn.addEventListener("click", handleNext);

// Start the quiz
startQuiz();
