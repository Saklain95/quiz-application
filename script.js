const quizData = [
  {
    question: "Which programming language is known as the mother of all languages?",
    options: ["C", "Assembly", "Fortran", "Lisp"],
    correct: 0
  },
  {
    question: "What does HTML stand for?",
    options: ["HyperText Markup Language", "HyperText Machine Language", "HyperText Markdown Language", "HyperTool Markup Language"],
    correct: 0
  },
  {
    question: "Which company developed the Java programming language?",
    options: ["Microsoft", "Oracle", "Google", "Sun Microsystems"],
    correct: 3
  },
  {
    question: "Which algorithm is commonly used for searching a sorted array?",
    options: ["Linear Search", "Binary Search", "Depth-First Search", "Breadth-First Search"],
    correct: 1
  },
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    correct: 0
  },
  {
    question: "Which of the following is not an object-oriented programming language?",
    options: ["Java", "Python", "C", "Ruby"],
    correct: 2
  },
  {
    question: "What is the primary purpose of the OSI model in networking?",
    options: ["Error Handling", "Data Encryption", "Standardizing Communication", "Data Compression"],
    correct: 2
  },
  {
    question: "Which of the following is a NoSQL database?",
    options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
    correct: 2
  },
  {
    question: "Which version control system is most commonly used for managing code repositories?",
    options: ["Git", "SVN", "Mercurial", "Perforce"],
    correct: 0
  },
  {
    question: "What does the term 'responsive web design' refer to?",
    options: ["Designing for mobile devices", "Designing for tablets", "Designing websites that adapt to different screen sizes", "Designing websites for faster load times"],
    correct: 2
  }
];


let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const questionData = quizData[currentQuestionIndex];
  document.getElementById('question').textContent = questionData.question;
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = ''; // Clear previous options
  
  // Update question number display
  document.getElementById('question-number').textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
  
  questionData.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.onclick = () => checkAnswer(index);
    optionsDiv.appendChild(button);
  });

  // Disable next button until an answer is selected
  document.getElementById('next-btn').disabled = true;
}

function checkAnswer(selectedIndex) {
  const questionData = quizData[currentQuestionIndex];
  const optionsDiv = document.getElementById('options');
  const buttons = optionsDiv.getElementsByTagName('button');
  
  // Disable all buttons after selection
  Array.from(buttons).forEach(button => button.disabled = true);
  
  // Mark the selected button
  if (selectedIndex === questionData.correct) {
    score++;
    buttons[selectedIndex].classList.add('correct');
  } else {
    buttons[selectedIndex].classList.add('incorrect');
    buttons[questionData.correct].classList.add('correct');
  }

  // Update score display
  document.getElementById('score-value').textContent = score;
  document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
  if (currentQuestionIndex < quizData.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
    alert('Quiz Completed! Your final score is ' + score);
    document.getElementById('next-btn').disabled = true;
  }
}

function restartQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  loadQuestion();
  document.getElementById('score-value').textContent = score;
  document.getElementById('next-btn').disabled = true;
  document.getElementById('restart-btn').disabled = true;
}

// Initial load
loadQuestion();

  
  