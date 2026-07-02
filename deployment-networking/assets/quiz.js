(() => {
  function setFeedback(container, ok, text) {
    let feedback = container.querySelector('.feedback');
    if (!feedback) {
      feedback = document.createElement('div');
      feedback.className = 'feedback';
      container.appendChild(feedback);
    }
    feedback.className = `feedback ${ok ? 'ok' : 'no'}`;
    feedback.textContent = text;
  }

  document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-check-quiz]');
    if (!button) return;
    const quiz = button.closest('.quiz');
    const selected = quiz.querySelector('input[type="radio"]:checked');
    if (!selected) {
      setFeedback(quiz, false, '先选一个答案，再检查。');
      return;
    }
    const correct = selected.value === quiz.dataset.answer;
    const message = correct ? quiz.dataset.ok : quiz.dataset.no;
    setFeedback(quiz, correct, message);
  });
})();
