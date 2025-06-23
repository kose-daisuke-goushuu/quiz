const quizData = [
  {
    question: "化粧品において「成分」とは何を指しますか？",
    choices: [
      "製品に含まれるすべての物質",
      "パッケージのデザイン",
      "広告で使われる言葉",
      "製造工場の所在地"
    ],
    answer: 0
  },
  {
    question: "化粧品の効能効果として認められているものはどれ？",
    choices: [
      "肌の清浄",
      "がんの治療",
      "骨折の治癒",
      "糖尿病の治療"
    ],
    answer: 0
  },
  {
    question: "化粧品のパッケージに必ず記載しなければならないものは？",
    choices: [
      "全成分表示",
      "販売価格",
      "広告文",
      "製造工場の写真"
    ],
    answer: 0
  },
  {
    question: "化粧品の広告で使ってはいけない表現は？",
    choices: [
      "治る",
      "美しく見せる",
      "清潔にする",
      "肌を整える"
    ],
    answer: 0
  }
  // 必要に応じて問題を追加
];

// --- 以降はquiz.jsと同じロジックを流用 ---
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const shuffledQuizData = quizData.map(q => {
  const choices = [...q.choices];
  const correct = q.choices[q.answer];
  shuffle(choices);
  return {
    question: q.question,
    choices: choices,
    answer: choices.indexOf(correct)
  };
});
shuffle(shuffledQuizData);

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
  const quiz = shuffledQuizData[currentQuiz];
  const quizEl = document.getElementById('quiz');
  quizEl.innerHTML = `
    <div class="mb-4 text-xl font-semibold">${quiz.question}</div>
    <div class="flex flex-col gap-3">
      ${quiz.choices.map((choice, idx) => `
        <label class="cursor-pointer flex items-center gap-2">
          <input type="radio" name="answer" value="${idx}" class="accent-pink-500" />
          <span>${choice}</span>
        </label>
      `).join('')}
    </div>
  `;
  document.getElementById('results').textContent = '';
}

function showResult(isCorrect, correctAnswerText) {
  const results = document.getElementById('results');
  if (isCorrect) {
    results.innerHTML = `<span class="text-pink-600 text-3xl font-bold animate-bounce">正解！</span>`;
  } else {
    results.innerHTML = `<span class="text-red-600 text-2xl font-bold animate-pulse">不正解...<br>正解：${correctAnswerText}</span>`;
  }
}

document.getElementById('submit').addEventListener('click', () => {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) {
    document.getElementById('results').textContent = "選択肢を選んでください。";
    return;
  }
  const quiz = shuffledQuizData[currentQuiz];
  const isCorrect = parseInt(selected.value) === quiz.answer;
  const correctAnswerText = quiz.choices[quiz.answer];
  showResult(isCorrect, correctAnswerText);

  setTimeout(() => {
    currentQuiz++;
    if (currentQuiz < shuffledQuizData.length) {
      loadQuiz();
    } else {
      document.getElementById('quiz').innerHTML = '';
      document.getElementById('submit').style.display = 'none';
      document.getElementById('results').innerHTML = `<span class="text-pink-700 text-2xl font-bold animate-fade-in">終了！あなたの正解数は ${score} / ${shuffledQuizData.length} です。</span>`;
    }
  }, 1200);

  if (isCorrect) score++;
});

loadQuiz();