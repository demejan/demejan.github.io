// Elements
const startButton = document.getElementById('startButton');
const questionsDiv = document.getElementById('questions');
const submitButton = document.getElementById('submitButton');
const thankYouDiv = document.getElementById('thankYou');
const summaryList = document.getElementById('summary');
const nextButtons = document.querySelectorAll('.next-btn');

// Show the first question after clicking "Let's Go"
startButton.addEventListener('click', function() {
  startButton.style.display = 'none';
  questionsDiv.classList.remove('hidden');
  showQuestion('question1');
});

// Handle each question and show the next one
nextButtons.forEach(button => {
  button.addEventListener('click', function() {
    let currentQuestion = button.closest('.question-box');
    let nextQuestion = currentQuestion.nextElementSibling;
    if (nextQuestion) {
      currentQuestion.classList.add('hidden');
      nextQuestion.classList.remove('hidden');
    }
 
