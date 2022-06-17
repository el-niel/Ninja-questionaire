const correctAnswers = ['B', 'B', 'A', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const numScore = document.querySelector('.number');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let score = 0;

    const userAnswers = [
        form.q1.value,
        form.q2.value,
        form.q3.value,
        form.q4.value,
    ];

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });

    numScore.textContent = `${score}% Ninja`;
    result.classList.remove('d-none');
});
