/* ============================================================
   APP — English Mastery Learning Platform
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Navigation ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close mobile menu on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('active'));
  });

  /* ---------- Page Navigation ---------- */
  let currentLessonLevel = 'b1';

  window.showPage = function (pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const page = document.getElementById('page-' + pageId);
    if (page) {
      page.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Update active nav
    document.querySelectorAll('.nav-links > li > a[data-page]').forEach(a => {
      a.classList.toggle('active', a.dataset.page === pageId);
    });

    // Initialize page content
    if (pageId === 'lessons-b1') renderLessons('b1');
    if (pageId === 'lessons-b2') renderLessons('b2');
    if (pageId === 'practice-b1') renderPractice('b1');
    if (pageId === 'practice-b2') renderPractice('b2');
    if (pageId === 'test-b1') initTest('b1');
    if (pageId === 'test-b2') initTest('b2');
  };

  window.goBackFromLesson = function () {
    showPage('lessons-' + currentLessonLevel);
  };

  /* ---------- Render Lessons ---------- */
  function renderLessons(level) {
    const lessons = level === 'b1' ? B1_LESSONS : B2_LESSONS;
    const grid = document.getElementById(level + '-lessons-grid');
    grid.innerHTML = lessons.map(lesson => `
      <div class="lesson-card ${level === 'b2' ? 'b2-card' : ''}" onclick="openLesson('${lesson.id}', '${level}')">
        <div class="lesson-num">${lesson.num}</div>
        <h3>${lesson.title}</h3>
        <p>${lesson.summary}</p>
      </div>
    `).join('');
  }

  window.openLesson = function (id, level) {
    currentLessonLevel = level;
    const lessons = level === 'b1' ? B1_LESSONS : B2_LESSONS;
    const lesson = lessons.find(l => l.id === id);
    if (!lesson) return;

    document.getElementById('lessonDetailContent').innerHTML = lesson.content;
    showPage('lesson-detail');
  };

  /* ---------- Render Practice ---------- */
  function renderPractice(level) {
    const practiceData = level === 'b1' ? B1_PRACTICE : B2_PRACTICE;
    const container = document.getElementById(level + '-practice-container');
    let practiceState = {};

    container.innerHTML = practiceData.map((topic, ti) => {
      return `
        <div class="practice-topic">
          <h3>${topic.topic}</h3>
          ${topic.exercises.map((ex, ei) => {
            const key = level + '-' + ti + '-' + ei;
            practiceState[key] = { answered: false };
            if (ex.type === 'choice') {
              return `
                <div class="exercise" id="ex-${key}">
                  <p>${ei + 1}. ${ex.question}</p>
                  <div class="options">
                    ${ex.options.map((opt, oi) => `
                      <button class="option-btn" data-key="${key}" data-idx="${oi}" data-correct="${ex.correct}" onclick="checkPracticeChoice(this)">${opt}</button>
                    `).join('')}
                  </div>
                  <div class="feedback" id="fb-${key}"></div>
                </div>
              `;
            } else {
              return `
                <div class="exercise" id="ex-${key}">
                  <p>${ei + 1}. ${ex.question}</p>
                  <div class="exercise-input-group">
                    <input type="text" id="input-${key}" placeholder="Javobingizni yozing..." data-answer="${ex.answer}">
                    <button class="check-practice-btn" onclick="checkPracticeFill('${key}')">Tekshirish</button>
                  </div>
                  <div class="feedback" id="fb-${key}"></div>
                </div>
              `;
            }
          }).join('')}
        </div>
      `;
    }).join('');
  }

  window.checkPracticeChoice = function (btn) {
    const key = btn.dataset.key;
    const exDiv = document.getElementById('ex-' + key);
    const buttons = exDiv.querySelectorAll('.option-btn');
    const fb = document.getElementById('fb-' + key);

    // Prevent re-answering
    if (buttons[0].classList.contains('correct') || buttons[0].classList.contains('wrong') ||
        buttons[0].classList.contains('show-correct')) return;

    const selected = parseInt(btn.dataset.idx);
    const correct = parseInt(btn.dataset.correct);

    buttons.forEach((b, i) => {
      if (i === correct) b.classList.add('correct');
      if (i === selected && selected !== correct) b.classList.add('wrong');
    });

    if (selected === correct) {
      fb.textContent = "To'g'ri! ✓";
      fb.className = 'feedback correct-feedback';
    } else {
      fb.textContent = "Noto'g'ri. To'g'ri javob: " + buttons[correct].textContent;
      fb.className = 'feedback wrong-feedback';
    }
  };

  window.checkPracticeFill = function (key) {
    const input = document.getElementById('input-' + key);
    const fb = document.getElementById('fb-' + key);
    const answer = input.dataset.answer.toLowerCase().trim();
    const userAnswer = input.value.toLowerCase().trim();

    if (!userAnswer) return;

    // Allow minor variations
    const answers = answer.split(',').map(a => a.trim());
    const isCorrect = answers.some(a => userAnswer === a || userAnswer === a.replace(/'/g, "'"));

    if (isCorrect) {
      input.classList.add('correct-input');
      fb.textContent = "To'g'ri! ✓";
      fb.className = 'feedback correct-feedback';
    } else {
      input.classList.add('wrong-input');
      fb.textContent = "Noto'g'ri. To'g'ri javob: " + input.dataset.answer;
      fb.className = 'feedback wrong-feedback';
    }
    input.disabled = true;
  };

  /* ---------- Tests ---------- */
  let testState = {};

  function initTest(level) {
    const questions = level === 'b1' ? B1_TEST : B2_TEST;
    testState[level] = {
      current: 0,
      answers: new Array(questions.length).fill(-1),
      submitted: false
    };
    renderTestQuestion(level);
  }

  function renderTestQuestion(level) {
    const questions = level === 'b1' ? B1_TEST : B2_TEST;
    const state = testState[level];
    const container = document.getElementById(level + '-test-container');

    if (state.submitted) {
      renderTestResults(level);
      return;
    }

    const q = questions[state.current];
    const total = questions.length;
    const progress = ((state.current) / total) * 100;

    container.innerHTML = `
      <div class="test-progress"><div class="test-progress-bar" style="width:${progress}%"></div></div>
      <div class="test-question-counter">Savol ${state.current + 1} / ${total}</div>
      <div class="test-question">
        <h3>${state.current + 1}. ${q.question}</h3>
        <div class="test-options">
          ${q.options.map((opt, i) => `
            <button class="test-option ${state.answers[state.current] === i ? 'selected' : ''}"
                    onclick="selectTestAnswer('${level}', ${i})">${String.fromCharCode(65 + i)}) ${opt}</button>
          `).join('')}
        </div>
      </div>
      <div class="test-nav">
        <button class="btn btn-outline" ${state.current === 0 ? 'disabled style="opacity:0.4;pointer-events:none"' : ''} onclick="testNav('${level}', -1)">← Oldingi</button>
        ${state.current < total - 1
          ? `<button class="btn btn-primary" onclick="testNav('${level}', 1)">Keyingi →</button>`
          : `<button class="btn btn-success" onclick="submitTest('${level}')">Yakunlash ✓</button>`
        }
      </div>
      <div style="text-align:center;margin-top:16px">
        <div style="display:flex;gap:6px;justify-content:center;flex-wrap:wrap">
          ${questions.map((_, i) => `
            <button style="width:32px;height:32px;border-radius:8px;border:2px solid ${state.answers[i] >= 0 ? '#4361ee' : '#e5e7eb'};
              background:${i === state.current ? '#4361ee' : state.answers[i] >= 0 ? '#eef0ff' : '#fff'};
              color:${i === state.current ? '#fff' : '#374151'};cursor:pointer;font-weight:600;font-size:0.8rem"
              onclick="testJump('${level}', ${i})">${i + 1}</button>
          `).join('')}
        </div>
      </div>
    `;
  }

  window.selectTestAnswer = function (level, idx) {
    testState[level].answers[testState[level].current] = idx;
    renderTestQuestion(level);
  };

  window.testNav = function (level, dir) {
    testState[level].current += dir;
    renderTestQuestion(level);
  };

  window.testJump = function (level, idx) {
    testState[level].current = idx;
    renderTestQuestion(level);
  };

  window.submitTest = function (level) {
    const state = testState[level];
    const unanswered = state.answers.filter(a => a === -1).length;
    if (unanswered > 0) {
      if (!confirm(`${unanswered} ta savolga javob bermadingiz. Shunga qaramay yakunlaysizmi?`)) return;
    }
    state.submitted = true;
    renderTestResults(level);
  };

  function renderTestResults(level) {
    const questions = level === 'b1' ? B1_TEST : B2_TEST;
    const state = testState[level];
    const container = document.getElementById(level + '-test-container');

    let correctCount = 0;
    const details = questions.map((q, i) => {
      const isCorrect = state.answers[i] === q.correct;
      if (isCorrect) correctCount++;
      const userAns = state.answers[i] >= 0 ? q.options[state.answers[i]] : 'Javob berilmagan';
      return `
        <div class="result-item ${isCorrect ? 'result-correct' : 'result-wrong'}">
          <span class="result-icon">${isCorrect ? '✓' : '✗'}</span>
          <div class="result-text">
            <strong>${i + 1}. ${q.question}</strong>
            ${!isCorrect ? `<small>Sizning javobingiz: ${userAns} | To'g'ri javob: ${q.options[q.correct]}</small>` : '<small>To\'g\'ri!</small>'}
          </div>
        </div>
      `;
    });

    const percent = Math.round((correctCount / questions.length) * 100);
    let scoreClass, message;
    if (percent >= 90) { scoreClass = 'score-excellent'; message = "Ajoyib natija! Siz bu darajani zo'r o'zlashtirgansiz!"; }
    else if (percent >= 70) { scoreClass = 'score-good'; message = "Yaxshi natija! Bir oz mashq qilsangiz, mukammal bo'ladi."; }
    else if (percent >= 50) { scoreClass = 'score-average'; message = "O'rtacha natija. Darsliklarni qaytadan o'qib chiqing va mashq qiling."; }
    else { scoreClass = 'score-poor'; message = "Natija past. Darsliklardan boshlab qaytadan o'rganing. Harakat — g'alaba kaliti!"; }

    container.innerHTML = `
      <div class="test-results">
        <h2>Test natijalari</h2>
        <div class="score-circle ${scoreClass}">
          <span class="score-percent">${percent}%</span>
          <span class="score-label">${correctCount}/${questions.length}</span>
        </div>
        <p>${message}</p>
        <div class="results-detail">
          ${details.join('')}
        </div>
        <div style="margin-top:24px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
          <button class="btn btn-primary" onclick="retakeTest('${level}')">Qayta topshirish</button>
          <button class="btn btn-outline" onclick="showPage('lessons-${level}')">Darsliklarni ko'rish</button>
          <button class="btn btn-outline" onclick="showPage('practice-${level}')">Mashg'ulotlarga o'tish</button>
        </div>
      </div>
    `;
  }

  window.retakeTest = function (level) {
    initTest(level);
  };

  /* ---------- Initialize ---------- */
  renderLessons('b1');
  renderLessons('b2');

})();
