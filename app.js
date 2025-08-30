let questions = [
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "let", "const", "All of the above"],
    correctanswer: "All of the above",
    time: 60,
    marks: 2
  },
  {
    question: "What is the output of: console.log(typeof null)?",
    options: ["null", "undefined", "object", "string"],
    correctanswer: "object",
    time: 60,
    marks: 2
  },
  {
    question: "Which operator is used to compare both value and type in JavaScript?",
    options: ["==", "===", "!=", "="],
    correctanswer: "===",
    time: 60,
    marks: 2
  },
  {
    question: "What is the default value of an uninitialized variable in JavaScript?",
    options: ["null", "undefined", "0", "false"],
    correctanswer: "undefined",
    time: 60,
    marks: 2
  },
  {
    question: "Which built-in method converts a JSON string into a JavaScript object?",
    options: ["JSON.parse()", "JSON.stringify()", "parse.JSON()", "JSON.toObject()"],
    correctanswer: "JSON.parse()",
    time: 60,
    marks: 2
  },
  {
    question: "What will be the output of: console.log(2 + '2')?",
    options: ["22", "4", "Error", "NaN"],
    correctanswer: "22",
    time: 60,
    marks: 2
  },
  {
    question: "Which array method is used to add an element at the end?",
    options: ["shift()", "pop()", "push()", "unshift()"],
    correctanswer: "push()",
    time: 60,
    marks: 2
  },
  {
    question: "What does the 'this' keyword refer to inside a regular function?",
    options: ["The function itself", "The global object", "undefined", "The parent scope"],
    correctanswer: "The global object",
    time: 60,
    marks: 2
  },
  {
    question: "Which loop is guaranteed to run at least once?",
    options: ["for loop", "while loop", "do...while loop", "for...of loop"],
    correctanswer: "do...while loop",
    time: 60,
    marks: 2
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["Number", "Boolean", "Character", "Undefined"],
    correctanswer: "Character",
    time: 60,
    marks: 2
  }
];

let questionIndex = 0;
let totalMarks = 0;

let displayQuestion = document.getElementById("displayQuestion");
let displayOption = document.getElementById("displayOption");
let currentQuestionNo = document.getElementById("currentQuestionNo");
let totalQuestionNumber = document.getElementById("totalQuestionNumber");
let timer = questions[0].time
let timerDisplay = document.getElementById("timerDisplay")

let checkAnswer = (userAnswer, correctAnswer, questionmarks) => {
  if (userAnswer === correctAnswer) {
    totalMarks += questionmarks;
    alert("Correct! Marks: " + totalMarks);
  } else {
    alert(" Wrong Answer!");
  }
  nextQuestion()
};

let renderQuestion = () => {
  let currentQuestion = questions[questionIndex];
  currentQuestionNo.innerHTML = questionIndex + 1;
  totalQuestionNumber.innerHTML = questions.length;
  displayQuestion.innerHTML = currentQuestion.question;

  displayOption.innerHTML = "";

  for (let i = 0; i < currentQuestion.options.length; i++) {
    let option = currentQuestion.options[i];
    displayOption.innerHTML += `
      <button onclick="checkAnswer('${option}','${currentQuestion.correctanswer}',${currentQuestion.marks})">  
        ${option} 
      </button>`;
  }
};

renderQuestion();

let nextQuestion = () => {
  if (questionIndex < questions.length - 1) {
    questionIndex++;
    renderQuestion();
    timer = questions[questionIndex].time
    timerDisplay.innerHTML =timer
  } else {
    alert("Quiz Finished! 🎉 Your Total Marks: " + totalMarks);
  }
};

let previousQuestion = () => {
  if (questionIndex > 0) {
    questionIndex--;
    renderQuestion();
  }
};


const checktimer = ()=>{
  const currentquestion = questions[questionIndex]
  if(timer === 0){
    nextQuestion()
    timer = currentquestion.time
  }else{
    timer--
  }
  timerDisplay.innerHTML = timer
}

setInterval(checktimer,1000)