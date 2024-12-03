// Elements
const startButton = document.getElementById('startButton');
const questionsDiv = document.getElementById('questions');
const submitButton = document.getElementById('submitButton');
const thankYouDiv = document.getElementById('thankYou');
const summaryList = document.getElementById('summary');

// Show the questions after clicking "Let's Go"
startButton.addEventListener('click', function() {
  startButton.style.display = 'none';  // Hide the "Let's Go!" button
  questionsDiv.classList.remove('hidden');  // Show the questions
});

// Submit answers and show thank you message
submitButton.addEventListener('click', function() {
  const location = document.getElementById('location').value;
  const food = document.getElementById('food').value;
  const activity = document.getElementById('activity').value;
  const time = document.getElementById('time').value;

  // Save answers in localStorage (could be expanded to a server later)
  localStorage.setItem('dateLocation', location);
  localStorage.setItem('dateFood', food);
  localStorage.setItem('dateActivity', activity);
  localStorage.setItem('dateTime', time);

  // Display the thank you message and summary
  questionsDiv.classList.add('hidden');
  thankYouDiv.classList.remove('hidden');

  const summary = `
    <li><strong>Location:</strong> ${location}</li>
    <li><strong>Food:</strong> ${food}</li>
    <li><strong>Activity:</strong> ${activity}</li>
    <li><strong>Time:</strong> ${time}</li>
  `;
  summaryList.innerHTML = summary;
});
