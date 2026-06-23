(function () {
  function initSingleChoiceQuiz(root) {
    const answer = root.dataset.answer;
    const feedback = root.querySelector('.quiz-feedback');
    root.querySelectorAll('.quiz-option').forEach((btn) => {
      btn.addEventListener('click', () => {
        const value = btn.dataset.value;
        if (value === answer) {
          feedback.textContent = '正确：方向判断稳定。';
          feedback.className = 'quiz-feedback ok';
        } else {
          feedback.textContent = '不对：按“该面正对你”再判断一次。';
          feedback.className = 'quiz-feedback bad';
        }
      });
    });
  }

  function initRepCounter(root) {
    const target = Number(root.dataset.target || 20);
    const valueEl = root.querySelector('.counter-value');
    const statusEl = root.querySelector('.counter-status');
    const plusBtn = root.querySelector('[data-action="plus"]');
    const resetBtn = root.querySelector('[data-action="reset"]');

    let value = 0;
    function render() {
      valueEl.textContent = String(value);
      if (value >= target) {
        statusEl.textContent = `完成：已达到 ${target} 次，休息 1 分钟后再做 1 组。`;
        statusEl.className = 'counter-status done';
      } else {
        statusEl.textContent = `继续：还差 ${target - value} 次。`;
        statusEl.className = 'counter-status';
      }
    }

    plusBtn.addEventListener('click', () => {
      value += 1;
      render();
    });
    resetBtn.addEventListener('click', () => {
      value = 0;
      render();
    });
    render();
  }

  document.querySelectorAll('[data-quiz="single-choice"]').forEach(initSingleChoiceQuiz);
  document.querySelectorAll('[data-widget="rep-counter"]').forEach(initRepCounter);
})();
