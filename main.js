const questions = [
  {
    question:
      "________ is a conceptualization of some aspect of nursing communicated for the purpose of describing, explaining , predicting, and or prescribing nursing care.",
    answers: [
      { text: "Nursing Practice", correct: false },
      { text: "Nursing Ethics", correct: false },
      { text: "Nursing Theory", correct: true },
      { text: "Nursing Care", correct: false },
    ],
  },
  {
    question:
      "The systematic problem-solving approach towards providing individualized nursing care is known as ___________________.",
    answers: [
      { text: "Nursing Care Plan", correct: false },
      { text: "Nurses practice act", correct: false },
      { text: "Nursing method", correct: false },
      { text: "Nursing process", correct: true },
    ],
  },
  {
    question:
      "This step of the nursing process includes the systematic collection of all subjective and objective data about the client in which the nurse focuses holistically on the client- physical, psychological, emotional, sociocultural, and spiritual. Name this step. ",
    answers: [
      { text: "Assessment", correct: true },
      { text: "Implementation", correct: false },
      { text: "Planning ", correct: false },
      { text: "Diagnosis", correct: false },
    ],
  },
  {
    question:
      "Which is not a benefit of becoming a member of the American Nurses Association?",
    answers: [
      { text: "Access to Monthly Journals", correct: false },
      { text: "Professional Liability discounts", correct: false },
      { text: "Pay Raise", correct: true },
      { text: "Continuing education", correct: false },
    ],
  },
  {
    question: "What is the yearly cost to join the ANA (per year)?",
    answers: [
      { text: "$80", correct: false },
      { text: "$350", correct: false },
      { text: "$200", correct: false },
      { text: "$240", correct: true },
    ],
  },
  {
    question:
      "One of these is not a reason to join a nursing professional organization?",
    answers: [
      { text: "to maintain a current knowledge base", correct: false },
      { text: "stay current in clinical specialty or role", correct: false },
      { text: "You get paid for joining", correct: true },
      { text: "Leadership development", correct: false },
    ],
  },
  {
    question:
      "A nurse is starting a shift in the morning. After receiving report on the clients, the nurse reviews what needs to be done and starts to prioritize tasks. The nurse has the following clients: A: A 68-year-old client who must take his medication with breakfast whose tray has just arrived B: A 42-year-old client who has become unresponsive in the last 5 minutes C: A 51-year-old client who is complaining of pain when he moves his shoulder D: A 38-year-old client who wants to take a shower right away In which order should the nurse prioritize activities?",
    answers: [
      { text: "B, C, A, D", correct: false },
      { text: "C, B, A, D", correct: false },
      { text: "A, B, D, C", correct: false },
      { text: "B, A, C, D", correct: true },
    ],
  },
  {
    question:
      "A nurse is working in the emergency department when a client is brought in via ambulance for care. The nurse glances at the client and realizes that there are many factors to consider regarding his care and the nurse needs to focus on one area to begin. Which of the following items should the nurse consider to determine the first priority intervention?",
    answers: [
      {
        text: "Is the client in a life-threatening situation?",
        correct: true,
      },
      { text: "Is the client in pain?", correct: false },
      { text: "Does the client require an IV?", correct: false },
      { text: "Does the client have a neurological deficit?", correct: false },
    ],
  },
  {
    question:
      "In comparing the American Nurses Association (ANA) and International Council of Nurses (ICN) definitions of nursing, what component does the ICN mention that is not included in ANA's definition and is indicative of a more global focus?",
    answers: [
      {
        text: "Prevention of illness",
        correct: false,
      },
      { text: "Holistic health model", correct: false },
      { text: "Health promotion", correct: false },
      { text: "Shaping health policy", correct: true },
    ],
  },
  {
    question:
      "A nurse makes a medication error, immediately assesses the patient, and reports the error to the nurse manager and the primary care provider (PCP). Which characteristics of a professional is the nurse demonstrating?",
    answers: [
      {
        text: "Autonomy",
        correct: false,
      },
      { text: "Collaboration ", correct: false },
      { text: "Accountability ", correct: true },
      { text: "Altruism", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const explainButton = document.getElementById("Explain");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
  explainButton.style.display = "none";
}
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
  explainButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
