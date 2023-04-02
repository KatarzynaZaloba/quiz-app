const quizData = [
    {
        question: 'Jaki przydomek nosi polski biegacz ultramaratonów Rafał Kot?',
        a: 'Kot z Mazur',
        b: 'Góral z Mazur',
        c: 'Góral z Gór',
        d: 'Kot z Gór',
        correct: 'b'
    }, {
        question: 'Ile wynosił rekordowy czas biegu przez GSB we wrześniu 2020 roku, ustanowiony przez Rafała Kota?',
        a: '107 godzin 19 minut',
        b: '139 godzin 22 minuty',
        c: '100 godzin 11 minut',
        d: 'Nie padł taki rekord',
        correct: 'a'
    }, {
        question: 'Którą z marek sportowych reprezentuje "Góral z Mazur?" ',
        a: 'Altra',
        b: 'Hoka One One',
        c: 'Decathlon',
        d: 'Nike',
        correct: 'a'
    }, {
        question: 'Kto ustanowił nowy rekord w marcu 2023 roku przebiegając Tatrzańską Pętlę?',
        a: 'Roman Ficek',
        b: 'Rafał Kot',
        c: 'Angelika Szczepaniak',
        d: 'Patrycja Bereznowska',
        correct: 'a'
    }, {
        question: 'Ile wyniósł rekord w przebiegnięciu Tatrzańskiej Pętli w marcu 2023 roku?',
        a: '37 godzin 8 minut',
        b: '35 godzin 8 minut',
        c: '42 godziny 12 minut',
        d: '39 godzin 10 minut',
        correct: 'b'
    }
];

const quiz = document.getElementById('quiz');
const answersEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>

            <button onclick="location.reload">Odśwież</button>`;
        };
    }
});

