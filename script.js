const questions = [
  "1. How do you take care of yourself?",
  "2. What does success mean to you?",
  "3. What’s the one piece of advice you would give to your younger self?",
  "4. What do you spend most of your time thinking about, and how does it make you feel?",
  "5. How do you feel when things don’t go as planned?",
  "6. When was the last time you felt truly happy, and what were you doing?",
  "7. What would you do right now if nothing, including yourself, was holding you back?",
  "8. What’s one thing you could do today to step out of your comfort zone?",
  "9. What was a tough time in your life, and how did you get through it?",
  "10. If you could live anywhere in the world, where would it be and why?"
];

const icons = [
  "1.svg",
  "2.svg",
  "3.svg",
  "4.svg",
  "5.svg",
  "6.svg",
  "7.svg",
  "8.svg",
  "9.svg",
  "10.svg"
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById("question-text");
const iconElement = document.getElementById("question-image");
const nextButton = document.getElementById("next-button");
const answerInput = document.querySelector(".answer");
const thankYouMessage = document.getElementById("thank-you-message");
const resultsContainer = document.querySelector(".results-container");
const form = document.querySelector(".question-form");

function loadQuestion() {
  // If there are no more questions, show the thank you message
  if (currentQuestionIndex >= questions.length) {
      document.querySelector(".form-container").style.display = "none";
      resultsContainer.style.display = "block";
      thankYouMessage.textContent = "Thank you so much for completing our quiz!";
      thankYouMessage.textContent = " We hope these questions helped you gain some valuable insights about yourself. Remember, self-discovery is a journey, and every step counts. Stay curious, stay reflective, and keep exploring the depths of who you are. Your growth starts here!"
      return;
  }

  // Load the current question and icon
  questionElement.textContent = questions[currentQuestionIndex];
  iconElement.src = icons[currentQuestionIndex];
  iconElement.alt = "Question Image"; // Update alt text for accessibility

  // Clear the input field
  answerInput.value = "";
}

// Handle the "Next Question" button click
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  loadQuestion();
});

// Prevent form submission on Enter key press
form.addEventListener("submit", (event) => {
  event.preventDefault();
  currentQuestionIndex++;
  loadQuestion();
});

// Load the first question when the page loads
loadQuestion();
