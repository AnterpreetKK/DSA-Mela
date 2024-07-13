const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const quizQuestions = [
    {
        question: "What is the time complexity of binary search?",
        answers: {
            a: "O(n)",
            b: "O(log n)",
            c: "O(n^2)"
        },
        correctAnswer: "b"
    },
    {
        question: "Which data structure is used in Breadth-First Search of a graph?",
        answers: {
            a: "Stack",
            b: "Queue",
            c: "Array"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the purpose of a hash function in a hash table?",
        answers: {
            a: "To sort the elements",
            b: "To map keys to indices",
            c: "To compare elements"
        },
        correctAnswer: "b"
    },
    {
        question: "Which of the following is not a stable sorting algorithm?",
        answers: {
            a: "Merge Sort",
            b: "Bubble Sort",
            c: "Quick Sort"
        },
        correctAnswer: "c"
    },
    {
        question: "Which data structure is used to implement a LIFO (Last In First Out) structure?",
        answers: {
            a: "Queue",
            b: "Stack",
            c: "Heap"
        },
        correctAnswer: "b"
    }
];

function buildQuiz() {
    const output = [];

    quizQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];

        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="question">${currentQuestion.question}</div>
            <div class="answers">${answers.join('')}</div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;

    quizQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    resultsContainer.innerHTML = `You got ${numCorrect} out of ${quizQuestions.length} correct!`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);
