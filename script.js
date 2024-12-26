// Login Data
const users = {
  username: "user",
  password: "1234",
};

// Questions
const questions = [
  {
    question: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: 2,
  },
  {
    question: "What is 2 + 2?",
    answers: ["3", "4", "5", "6"],
    correct: 1,
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Mars", "Jupiter", "Venus"],
    correct: 1,
  },
];

let currentQuestionIndex = 0;
let score = 0;

// Login Functionality
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === users.username && password === users.password) {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    loadQuestion();
  } else {
    alert("Invalid username or password!");
  }
});

// Load Question
function loadQuestion() {
  const questionElement = document.getElementById("question");
  const answerButtons = document.querySelectorAll(".answer");

  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  currentQuestion.answers.forEach((answer, index) => {
    answerButtons[index].textContent = answer;
    answerButtons[index].style.backgroundColor = "#007bff";
    answerButtons[index].disabled = false;
  });

  document.getElementById("next-button").style.display = "none";
}

// Select Answer
function selectAnswer(index) {
  const currentQuestion = questions[currentQuestionIndex];
  const answerButtons = document.querySelectorAll(".answer");

  if (index === currentQuestion.correct) {
    score++;
    answerButtons[index].style.backgroundColor = "#28a745"; // Correct
  } else {
    answerButtons[index].style.backgroundColor = "#dc3545"; // Wrong
    answerButtons[currentQuestion.correct].style.backgroundColor = "#28a745"; // Highlight correct answer
  }

  answerButtons.forEach((button) => (button.disabled = true));
  document.getElementById("next-button").style.display = "block";
}

// Next Question
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// Show Result
function showResult() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("score").textContent = `${score} / ${questions.length}`;
}

// Restart Quiz
function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("result").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  loadQuestion();
}
