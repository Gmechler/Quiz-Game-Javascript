$(document).ready(function() {
  var startBtn = document.querySelector("#start");
  var startCard = document.querySelector("#startCard");
  var quiz = document.querySelector("#quiz");
  var questionDis = document.querySelector("#question");
  var answerChoices = document.querySelector(".answer-choices");
  var progressBar = document.querySelector("#progress");
  var timeDisplay = document.querySelector("#timer");
  var select = document.querySelector(".select");

  var runningQuestionIndex = 0;
  var initials;
  var interval;
  var time = 60;

  console.log(runningQuestionIndex);
  console.log(select);
  startBtn.addEventListener("click", startQuiz);

  // intro page//
  function startQuiz() {
    startCard.style.display = "none";
    quiz.style.display = "block";
    // countRender()
    questionRender();
    timer();
  }

  // questions array//
  function questionRender() {
    answerRender();
  }

  let lastQuestionIndex = questions.length - 1;
  var q = questions[runningQuestionIndex];

  function answerRender() {
    for (var i = 0; i < q.choices.length; i++) {
      questionDis.textContent = q.question;
      var answBtn = document.createElement("BUTTON");
      var br = document.createElement("br");
      answBtn.className = "btn " + "btn-primary " + "mt-2 " + "select";
      answBtn.textContent = q.choices[i];
      answBtn.setAttribute("value", q.choices.indexOf(q.choices[i]));
      answerChoices.append(br, answBtn);
    }
    answBtn.addEventListener("click", incrementer(runningQuestionIndex));
  }

  // questionRender();
  function incrementer(questionIndex) {
    questionIndex++;
    console.log(questionIndex);
  }
  console.log(runningQuestionIndex);

  function timer() {
    interval = setInterval(function() {
      time--;
      timeDisplay.textContent = time;
      if (time <= 0) {
        time = 0;
        // pause();
        // done();
      }
      if (time < 10) {
        timeDisplay.style.color = "red";
        timeDisplay.style.fontSize = "25px";
        timeDisplay.style.padding = "5px";
      }
    }, 1000);
  }
});
