export function renderQuizComponent() {
  return `
    <section class="quiz">
      <h2>Test Your Knowledge</h2>
      <div class="question">
        <p>What is 2 + 2?</p>
        <button onclick="submitAnswer(4)">4</button>
        <button onclick="submitAnswer(3)">3</button>
        <button onclick="submitAnswer(5)">5</button>
      </div>
      <div id="quiz-result"></div>
    </section>
  `;
}

window.submitAnswer = (answer) => {
  const result = document.getElementById('quiz-result');
  if (answer === 4) {
    result.innerHTML = 'Correct! Badge earned: Math Basics.';
    window.userData.quizScores.push({ question: '2 + 2', score: 1 });
  } else {
    result.innerHTML = 'Try again.';
  }
};