 
let questions = [
    {
        question: "1. Which language is used for web pages?",
        options: ["HTML", "Java", "Python", "C"],
        answer: 0
    },
    {
        question: "2. Which language styles a web page?",
        options: ["HTML", "CSS", "C", "Java"],
        answer: 1
    },
    {
        question: "3. Which language adds interactivity?",
        options: ["CSS", "HTML", "JavaScript", "SQL"],
        answer: 2
    }
];

let index = 0;
let score = 0;
let answered = false;

function loadQuestion() {
    answered = false;

    document.getElementById("result").innerText = "";
    document.getElementById("question").innerText =
        questions[index].question;

    let ids = ["a", "b", "c", "d"];

    for (let i = 0; i < 4; i++) {
        document.getElementById(ids[i]).innerText =
            questions[index].options[i];
    }
}

function checkAnswer(choice) {
    if (answered) return;

    answered = true;

    if (choice === questions[index].answer) {
        score++;
        document.getElementById("result").innerText = "Correct!";
    } else {
        document.getElementById("result").innerText = "Wrong!";
    }
}

function nextQuestion() {
    if (!answered) {
        document.getElementById("result").innerText =
            "Please select an answer!";
        return;
    }

    index++;

    if (index < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz").innerHTML =
            "<h2>Quiz Completed!</h2>" +
            "<p>Your Score: " + score + "/" +
            questions.length + "</p>" +
            '<button onclick="location.reload()">Restart</button>';
    }
}

loadQuestion();
