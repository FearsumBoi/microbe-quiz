// anpQuiz.js

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
    categoryButtonsContainer.innerHTML = "";
    Object.keys(categories).forEach((category) => {
      const button = document.createElement("button");
      button.innerText = category;
      button.className = "bg-blue-500 text-white py-2 px-4 rounded";
      button.addEventListener("click", () => {
        selectedCategory = category;
        startQuiz();
      });
      categoryButtonsContainer.appendChild(button);
    });
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function shuffleQuestions(questions) {
    return shuffleArray(questions);
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

    if (questionData.image) {
      questionImage.src = questionData.image;
      questionImage.classList.remove("hidden");
    } else {
      questionImage.classList.add("hidden");
      questionImage.src = "";
    }

    explanationBox.style.display = "none";
    explanationButton.classList.add("hidden");
    explanationBox.innerText = questionData.explanation || "No explanation available.";
    feedback.classList.add("hidden");
    feedback.innerText = "";

    const buttons = questionContainer.querySelectorAll(".grid button");
    const shuffledOptions = shuffleArray([...questionData.options]);

    buttons.forEach((btn, index) => {
      btn.disabled = false;
      btn.innerText = shuffledOptions[index] || "";
      btn.classList.remove("bg-green-500", "bg-red-500");
      btn.onclick = () => checkAnswer(btn, shuffledOptions[index]);
    });
  }

  function checkAnswer(button, selected) {
    const questionData = categories[selectedCategory][currentQuestionIndex];
    if (selected === questionData.answer) {
      feedback.innerText = "Correct!";
      feedback.classList.remove("hidden", "text-red-500");
      feedback.classList.add("text-green-500");
      button.classList.add("bg-green-500");
      nextButton.classList.remove("hidden");
      score++;
    } else {
      feedback.innerText = `Incorrect. The correct answer is ${questionData.answer}.`;
      feedback.classList.remove("hidden", "text-green-500");
      feedback.classList.add("text-red-500");
      button.classList.add("bg-red-500");
      nextButton.classList.add("hidden");
    }

    if (questionData.explanation) {
      explanationButton.classList.remove("hidden");
    }
  }

  explanationButton.addEventListener("click", () => {
    if (explanationBox.style.display === "none") {
      explanationBox.style.display = "block";
    } else {
      explanationBox.style.display = "none";
    }
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
