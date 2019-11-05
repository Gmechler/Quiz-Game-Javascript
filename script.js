$(document).ready(function() {
  var startBtn = document.querySelector("#start");
  var startCard = document.querySelector("#startCard");
  var quiz = document.querySelector("#quiz");
  var questionDis = document.querySelector("#question");
  var answerChoices = document.querySelector("#answer-choices");
  var progressBar = document.querySelector("#progress");
  var timeDisplay = document.querySelector("#timer");
  var select = document.querySelector(".select");
  var runningQuestionIndex = 0;
  var initials;
  var interval;
  var time = 60;

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
    var q = questions[runningQuestionIndex];
    questionDis.textContent = q.question;
    console.log(q.question);
    answerRender();
  }

  let lastQuestionIndex = questions.length - 1;
  var q = questions[runningQuestionIndex];

  function answerRender() {
    var q = questions[runningQuestionIndex];
    for (var i = 0; i < q.choices.length; i++) {
      var answBtn = document.createElement("BUTTON");
      var br = document.createElement("br");
      answBtn.className = "btn " + "btn-primary " + "mt-2 " + "select";
      answBtn.textContent = q.choices[i];
      answBtn.setAttribute("value", q.choices.indexOf(q.choices[i]));
      answerChoices.append(br, answBtn);
      answBtn.addEventListener("click", incrementer);
    }
  }

  // questionRender();
  function incrementer() {
    runningQuestionIndex++;
    questionDis.innerHTML = "";
    answerChoices.innerHTML = "";
    questionRender();
    console.log(runningQuestionIndex);
  }

  // console.log(document.querySelector(".select"));

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
