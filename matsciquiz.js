// materialQuiz.js

document.addEventListener("DOMContentLoaded", function () {
  const quizContainer = document.getElementById("quiz-container");
  const categoryButtonsContainer = document.getElementById("category-buttons");
  const questionContainer = document.getElementById("question-container");
  const feedback = document.getElementById("feedback");
  const homeButton = document.getElementById("home-button");
  const nextButton = document.getElementById("next-button");
  const explanationButton = document.getElementById("explanation-button");
  const explanationBox = document.getElementById("explanation-container");
  const questionImage = document.getElementById("question-image");

  // Quick sanity check
  if (
    !quizContainer ||
    !categoryButtonsContainer ||
    !questionContainer ||
    !feedback ||
    !homeButton ||
    !nextButton ||
    !explanationButton ||
    !explanationBox ||
    !questionImage
  ) {
    console.error("One or more essential elements are missing from the DOM.");
    return;
  }

  let selectedCategory = null;
  let currentQuestionIndex = 0;
  let score = 0;

  function loadCategories() {
    // Clear old buttons if any
    categoryButtonsContainer.innerHTML = "";

    // Create a button for each category in 'categories'
    Object.keys(categories).forEach((category) => {
      const button = document.createElement("button");
      button.innerText = category;
      button.className = "bg-indigo-400 text-white py-2 px-4 rounded font-semibold";
      button.addEventListener("click", () => {
        selectedCategory = category;
        startQuiz();
      });
      categoryButtonsContainer.appendChild(button);
    });
  }

  // Simple array shuffle
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Shuffle questions in a category
  function shuffleQuestions(questions) {
    return shuffleArray(questions);
  }

  function startQuiz() {
    if (!categories[selectedCategory]) {
      console.error("Selected category does not exist.");
      return;
    }
    // Shuffle questions for the chosen category
    categories[selectedCategory] = shuffleQuestions([...categories[selectedCategory]]);
    quizContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    questionContainer.classList.add("active");
    homeButton.classList.remove("hidden");
    nextButton.classList.add("hidden");
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
  }

  function showQuestion() {
    // All questions in this category have been answered
    if (currentQuestionIndex >= categories[selectedCategory].length) {
      feedback.innerText = `Quiz completed! Your score: ${score}/${categories[selectedCategory].length}`;
      feedback.classList.remove("hidden");
      questionContainer.classList.add("hidden");
      nextButton.classList.add("hidden");
      homeButton.innerText = "Restart";
      return;
    }

    // Load the current question
    const questionData = categories[selectedCategory][currentQuestionIndex];

    // Set question text
    questionContainer.querySelector("h2").innerText = questionData.question;

    // If there's an image, display it; otherwise hide it
    if (questionData.image) {
      questionImage.src = questionData.image;
      questionImage.classList.remove("hidden");
    } else {
      questionImage.classList.add("hidden");
      questionImage.src = "";
    }

    // Hide explanation until needed
    explanationBox.style.display = "none";
    explanationButton.classList.add("hidden");
    explanationBox.innerText = questionData.explanation || "No explanation available.";
    feedback.classList.add("hidden");
    feedback.innerText = "";

    // Get option buttons
    const buttons = questionContainer.querySelectorAll(".grid button");
    // Shuffle the question options
    const shuffledOptions = shuffleArray([...questionData.options]);

    // Assign each button an option
    buttons.forEach((btn, index) => {
      btn.disabled = false;
      btn.innerText = shuffledOptions[index] || "";
      btn.classList.remove("bg-green-600", "bg-red-600", "bg-indigo-600");
      btn.classList.add("bg-indigo-600");
      btn.onclick = () => checkAnswer(btn, shuffledOptions[index]);
    });
  }

  function checkAnswer(button, selected) {
    const questionData = categories[selectedCategory][currentQuestionIndex];
    if (selected === questionData.answer) {
      feedback.innerText = "Correct!";
      feedback.classList.remove("hidden", "text-red-400");
      feedback.classList.add("text-green-400");
      button.classList.remove("bg-indigo-600");
      button.classList.add("bg-green-600");
      nextButton.classList.remove("hidden");
      score++;
    } else {
      feedback.innerText = `Incorrect. The correct answer is: ${questionData.answer}`;
      feedback.classList.remove("hidden", "text-green-400");
      feedback.classList.add("text-red-400");
      button.classList.remove("bg-indigo-600");
      button.classList.add("bg-red-600");
      nextButton.classList.remove("hidden");
    }
    if (questionData.explanation) {
      explanationButton.classList.remove("hidden");
    }
  }

  explanationButton.addEventListener("click", () => {
    explanationBox.style.display =
      explanationBox.style.display === "none" ? "block" : "none";
  });

  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    nextButton.classList.add("hidden");
    feedback.classList.add("hidden");
    showQuestion();
  });

  homeButton.addEventListener("click", () => {
    // Reset everything to start over or go back to categories
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.classList.remove("hidden");
    questionContainer.classList.remove("active");
    questionContainer.classList.add("hidden");
    feedback.classList.add("hidden");
    nextButton.classList.add("hidden");
    homeButton.classList.add("hidden");
    homeButton.innerText = "Home";
    loadCategories();
  });

  // Start by loading category buttons
  loadCategories();
});
