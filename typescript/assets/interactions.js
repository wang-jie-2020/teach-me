/* 可复用交互逻辑：单选测验 + 输入型自动判分。
   组件通过 data-* 属性配置，逻辑与课程内容解耦，后续课程直接复用。 */
(function () {
  // 单选测验：正确/错误反馈写在 data 属性里，逻辑通用。
  function initSingleChoiceQuiz(root) {
    const answer = root.dataset.answer;
    const okMsg = root.dataset.ok || '正确！';
    const badMsg = root.dataset.bad || '再想想。';
    const feedback = root.querySelector('.quiz-feedback');
    root.querySelectorAll('.quiz-option').forEach((btn) => {
      btn.addEventListener('click', () => {
        root.querySelectorAll('.quiz-option').forEach((b) =>
          b.classList.remove('correct', 'wrong'));
        if (btn.dataset.value === answer) {
          btn.classList.add('correct');
          feedback.textContent = okMsg;
          feedback.className = 'quiz-feedback ok';
        } else {
          btn.classList.add('wrong');
          feedback.textContent = badMsg;
          feedback.className = 'quiz-feedback bad';
        }
      });
    });
  }

  // 输入型练习：把学习者输入规范化后与一组可接受答案比对。
  // data-answers 用 | 分隔多个可接受写法（忽略空白与大小写差异可选）。
  function initTypeCheck(root) {
    const answers = (root.dataset.answers || '')
      .split('|')
      .map((s) => normalize(s));
    const caseSensitive = root.dataset.case === 'true';
    const okMsg = root.dataset.ok || '正确！';
    const badMsg = root.dataset.bad || '还不对，再试试。';
    const input = root.querySelector('input');
    const feedback = root.querySelector('.type-feedback');
    const btn = root.querySelector('button');

    function normalize(s) {
      let v = String(s).trim().replace(/\s+/g, ' ');
      if (!caseSensitive) v = v.toLowerCase();
      return v;
    }
    function check() {
      const val = normalize(input.value);
      if (answers.includes(val)) {
        feedback.textContent = okMsg;
        feedback.className = 'type-feedback ok';
      } else {
        feedback.textContent = badMsg;
        feedback.className = 'type-feedback bad';
      }
    }
    btn.addEventListener('click', check);
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') check(); });
  }

  document.querySelectorAll('[data-quiz="single-choice"]').forEach(initSingleChoiceQuiz);
  document.querySelectorAll('[data-widget="type-check"]').forEach(initTypeCheck);
})();
