var start = document.querySelector("#start");
var startCard = document.querySelector("#startCard");
var quiz = document.querySelector("#quiz");
var question = document.querySelector("#question");
var progressBar = document.querySelector("#progress");
var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("#B");
var choiceC = document.querySelector("#C");
var choiceD = document.querySelector("#D");

// let lastQuestionIndex = questions.length - 1;
// let runningQuestionIndex = 0;

start.addEventListener("click", startQuiz);

function startQuiz() {
  startCard.style.display = "none";
  quiz.style.display = "block";
  // countRender()
  progressBar.style.display = "block";
}

function renderQuestion() {
  let q = question[runningQuestionIndex];
  question.textContent = "<p>" + q.question + "</p>";
  choiceA.textContent = q.choiceA;
  choiceB.textContent = q.choiceB;
  choiceC.textContent = q.choiceC;
  choiceD.textContent = q.choiceD;
}
