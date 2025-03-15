document.addEventListener("DOMContentLoaded", function () {
  const quizContainer = document.getElementById("quiz-container"),
        categoryButtonsContainer = document.getElementById("category-buttons"),
        questionContainer = document.getElementById("question-container"),
        feedback = document.getElementById("feedback"),
        homeButton = document.getElementById("home-button"),
        nextButton = document.getElementById("next-button"),
        explanationButton = document.getElementById("explanation-button"),
        explanationBox = document.getElementById("explanation-container"),
        questionImage = document.getElementById("question-image");

  if (!quizContainer || !categoryButtonsContainer || !questionContainer || !feedback ||
      !homeButton || !nextButton || !explanationButton || !explanationBox || !questionImage) {
    console.error("One or more essential elements are missing from the DOM.");
    return;
  }

  let selectedCategory = null,
      currentQuestionIndex = 0,
      score = 0;

  function loadCategories() {
    categoryButtonsContainer.innerHTML = "";
    Object.keys(categories).forEach(category => {
      const button = document.createElement("button");
      button.innerText = category;
      button.className = "bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-all";
      button.addEventListener("click", () => {
        selectedCategory = category;
        startQuiz();
      });
      categoryButtonsContainer.appendChild(button);
    });
  }

  function shuffleQuestions(questions) {
    return questions.sort(() => Math.random() - 0.5);
  }

  function startQuiz() {
    if (!categories[selectedCategory]) {
      console.error("Selected category does not exist.");
      return;
    }
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
    if (currentQuestionIndex >= categories[selectedCategory].length) {
      feedback.innerText = `Quiz completed! Your score: ${score}`;
      feedback.classList.remove("hidden");
      questionContainer.classList.add("hidden");
      nextButton.classList.add("hidden");
      homeButton.innerText = "Restart";
      return;
    }
    const questionData = categories[selectedCategory][currentQuestionIndex];
    questionContainer.querySelector("h2").innerText = questionData.question;

    // Handle optional image
    if (questionData.image) {
      questionImage.src = questionData.image;
      questionImage.classList.remove("hidden");
    } else {
      questionImage.classList.add("hidden");
      questionImage.src = "";
    }

    // Reset explanation and feedback
    explanationBox.style.display = "none";
    explanationButton.classList.add("hidden");
    explanationBox.innerText = questionData.explanation || "No explanation available.";
    feedback.classList.add("hidden");
    feedback.innerText = "";

    // Update option buttons: set default neutral green
    const buttons = questionContainer.querySelectorAll(".grid button");
    buttons.forEach((btn, index) => {
      btn.disabled = false;
      btn.innerText = questionData.options[index] || "";
      // Instead of removing and adding multiple classes, we reset the className
      btn.className = "bg-green-400 text-white py-2 px-4 rounded";
      btn.onclick = () => checkAnswer(btn, questionData.options[index]);
    });
  }

  function checkAnswer(button, selected) {
    const questionData = categories[selectedCategory][currentQuestionIndex];
    if (selected === questionData.answer) {
      feedback.innerText = "Correct!";
      feedback.classList.remove("hidden", "text-red-500");
      feedback.classList.add("text-green-500");
      // Transition from neutral green to Next Question green
      button.className = button.className.replace("bg-green-400", "bg-green-500");
      nextButton.classList.remove("hidden");
      score++;
    } else {
      feedback.innerText = `Incorrect. The correct answer is ${questionData.answer}.`;
      feedback.classList.remove("hidden", "text-green-500");
      feedback.classList.add("text-red-500");
      button.className = button.className.replace("bg-green-400", "bg-red-500");
      nextButton.classList.add("hidden");
    }
    if (questionData.explanation) {
      explanationButton.classList.remove("hidden");
    }
  }

  explanationButton.addEventListener("click", () => {
    explanationBox.style.display = (explanationBox.style.display === "none") ? "block" : "none";
  });

  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    nextButton.classList.add("hidden");
    feedback.classList.add("hidden");
    showQuestion();
  });

  homeButton.addEventListener("click", () => {
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

  loadCategories();
});
