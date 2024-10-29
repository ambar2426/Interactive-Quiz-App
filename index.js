
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Shark", "Giraffe"],
        answer: "Blue Whale"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Gold", "Oxygen", "Iron", "Carbon"],
        answer: "Oxygen"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    document.getElementById("result-container").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(questionObj) {
    const questionEl = document.getElementById("question");
    const answerButtonsEl = document.getElementById("answer-buttons");

    questionEl.innerText = questionObj.question;
    answerButtonsEl.innerHTML = ""; // Clear previous options

    questionObj.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("answer-button");
        button.addEventListener("click", () => selectAnswer(option, questionObj.answer));
        answerButtonsEl.appendChild(button);
    });
}

function selectAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        score++;
    }
    document.getElementById("next-button").style.display = "block";
}

function handleNextQuestion() {
    currentQuestionIndex++;
    document.getElementById("next-button").style.display = "none";
    
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById("question-container").style.display = "none";
    const resultContainer = document.getElementById("result-container");
    resultContainer.style.display = "block";
    resultContainer.innerHTML = `<p>Your Score: ${score} out of ${questions.length}</p>`;
}

// Start the quiz on page load
startQuiz();
