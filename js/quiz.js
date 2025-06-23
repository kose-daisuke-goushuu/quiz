const quizData = [
  {
    question: "「医薬部外品」とは次のうちどれにあたりますか？",
    choices: ["劇的な効果がある強力な薬", "健康食品", "化粧品と医薬品の中間で、効果が認められた製品", "ただの香り付きの水"],
    answer: 2
  },
  {
    question: "次のうち、医薬部外品に該当する可能性があるのはどれ？",
    choices: ["普通の香水", "美白効果をうたったスキンケア製品（薬用と書いてあるもの）", "普通の食べ物", "衣服"],
    answer: 1
  },
  {
    question: "医薬部外品に関して正しい説明はどれ？",
    choices: ["厚生労働省の許可を受けて販売されている", "誰でも自由に「医薬部外品」と書いて販売できる", "海外製品なら医薬部外品の規制は関係ない", "医薬部外品は治療目的の強い薬である"],
    answer: 0
  },
  {
    question: "医薬部外品のパッケージに必ず記載しなければならないものは？",
    choices: ["製造年月日", "成分", "製造者の住所", "使用期限"],
    answer: 1
  },
  {
    question: "医薬部外品の広告で認められている表現は？",
    choices: ["治る", "改善する", "予防する", "完全に治癒する"],
    answer: 2
  },
  {
    question: "医薬部外品の製造販売に必要な許可は？",
    choices: ["医師免許", "薬剤師免許", "製造販売業許可", "販売士資格"],
    answer: 2
  },
  {
    question: "医薬部外品の例として正しいものは？",
    choices: ["風邪薬", "シャンプー（薬用）", "サプリメント", "普通の石鹸"],
    answer: 1
  },
  {
    question: "医薬部外品の効能・効果として認められていないものは？",
    choices: ["体臭・汗臭の防止", "美白", "がんの治療", "育毛"],
    answer: 2
  },
  {
    question: "医薬部外品の表示で義務付けられているのは？",
    choices: ["全成分表示", "効能効果", "製造番号", "使用方法"],
    answer: 2
  },
  {
    question: "医薬部外品の承認を行うのはどこ？",
    choices: ["厚生労働省", "経済産業省", "農林水産省", "文部科学省"],
    answer: 0
  },
  {
    question: "医薬部外品の効能として認められているものは？",
    choices: ["虫歯の予防", "糖尿病の治療", "高血圧の改善", "骨折の治癒"],
    answer: 0
  },
  {
    question: "医薬部外品のラベルに記載が義務付けられていないものは？",
    choices: ["製造番号", "成分", "製造年月日", "効能効果"],
    answer: 2
  },
  {
    question: "医薬部外品の販売に関して正しいものは？",
    choices: ["誰でも自由に販売できる", "許可を受けた業者のみ販売できる", "海外から輸入すれば自由に販売できる", "ネット販売は禁止されている"],
    answer: 1
  },
  {
    question: "医薬部外品の効能で認められていないものは？",
    choices: ["殺菌・消毒", "発毛促進", "がん治療", "防臭"],
    answer: 2
  }  ,
  {
    question: "医薬部外品の定義に最も近いものはどれ？",
    choices: ["食品", "医薬品", "化粧品と医薬品の中間", "雑貨"],
    answer: 2
  },
  {
    question: "医薬部外品の効能として認められているものは？",
    choices: ["発毛促進", "がん治療", "糖尿病治療", "骨折の治癒"],
    answer: 0
  },
  {
    question: "医薬部外品のパッケージに記載が義務付けられているものは？",
    choices: ["効能効果", "販売価格", "製造年月日", "広告文"],
    answer: 0
  },
  {
    question: "医薬部外品の承認を受けるために必要なのは？",
    choices: ["厚生労働省の承認", "消費者庁の承認", "経済産業省の承認", "農林水産省の承認"],
    answer: 0
  },
  {
    question: "医薬部外品の広告で使える表現は？",
    choices: ["治る", "予防する", "完全に治癒する", "即効性がある"],
    answer: 1
  },
  {
    question: "医薬部外品の例として正しいものは？",
    choices: ["虫歯予防歯磨き", "抗がん剤", "サプリメント", "普通の石鹸"],
    answer: 0
  },
  {
    question: "医薬部外品の効能で認められていないものは？",
    choices: ["殺菌", "消毒", "がん治療", "防臭"],
    answer: 2
  },
  {
    question: "医薬部外品の製造販売業許可を出すのは？",
    choices: ["厚生労働省", "都道府県知事", "経済産業省", "消費者庁"],
    answer: 1
  },
  {
    question: "医薬部外品の表示義務があるものは？",
    choices: ["効能効果", "広告文", "販売価格", "使用感"],
    answer: 0
  },
  {
    question: "医薬部外品の効能として認められているものは？",
    choices: ["体臭・汗臭の防止", "がん治療", "糖尿病治療", "骨折の治癒"],
    answer: 0
  },
  {
    question: "医薬部外品の販売に必要な資格は？",
    choices: ["製造販売業許可", "医師免許", "薬剤師免許", "販売士資格"],
    answer: 0
  },
  {
    question: "医薬部外品の例として誤っているものは？",
    choices: ["薬用シャンプー", "薬用歯磨き", "風邪薬", "薬用石鹸"],
    answer: 2
  },
  {
    question: "医薬部外品の効能で認められていないものは？",
    choices: ["美白", "がん治療", "育毛", "防臭"],
    answer: 1
  },
  {
    question: "医薬部外品の広告で使ってはいけない表現は？",
    choices: ["予防する", "治る", "防ぐ", "改善する"],
    answer: 1
  },
  {
    question: "医薬部外品のパッケージに必ず記載しなければならないものは？",
    choices: ["成分", "広告文", "販売価格", "使用感"],
    answer: 0
  },
  {
    question: "医薬部外品の効能として認められているものは？",
    choices: ["発毛促進", "がん治療", "糖尿病治療", "骨折の治癒"],
    answer: 0
  },
  {
    question: "医薬部外品の例として正しいものは？",
    choices: ["薬用ハンドソープ", "抗がん剤", "サプリメント", "普通の石鹸"],
    answer: 0
  },
  {
    question: "医薬部外品の効能で認められていないものは？",
    choices: ["殺菌", "消毒", "がん治療", "防臭"],
    answer: 2
  },
  {
    question: "医薬部外品の販売に関して正しいものは？",
    choices: ["許可を受けた業者のみ販売できる", "誰でも自由に販売できる", "海外から輸入すれば自由に販売できる", "ネット販売は禁止されている"],
    answer: 0
  },
  {
    question: "医薬部外品の効能として認められているものは？",
    choices: ["体臭・汗臭の防止", "がん治療", "糖尿病治療", "骨折の治癒"],
    answer: 0
  },
  {
  question: "医薬部外品の申請を行う際に必要な書類はどれ？",
  choices: [
    "製造販売承認申請書",
    "医師免許証",
    "販売士資格証明書",
    "消費者庁への届出書"
  ],
  answer: 0
},
{
  question: "医薬部外品の申請先として正しいのは？",
  choices: [
    "経済産業省",
    "厚生労働省",
    "農林水産省",
    "文部科学省"
  ],
  answer: 1
},
{
  question: "医薬部外品の申請時に必要な試験はどれ？",
  choices: [
    "有効性・安全性試験",
    "運転免許試験",
    "英語能力試験",
    "販売士試験"
  ],
  answer: 0
},
{
  question: "医薬部外品の申請にかかる主な審査内容は？",
  choices: [
    "効能・効果や成分の安全性",
    "商品のデザイン",
    "販売価格",
    "広告の内容"
  ],
  answer: 0
},
{
  question: "医薬部外品の申請が承認されると発行されるものは？",
  choices: [
    "承認番号",
    "医師免許",
    "販売士資格",
    "特許証"
  ],
  answer: 0
},
{
  question: "医薬部外品の製造記録の保存期間として正しいものは？",
  choices: [
    "1年間",
    "3年間",
    "5年間",
    "10年間"
  ],
  answer: 2
},
{
  question: "医薬部外品の製造所で義務付けられている管理者は誰？",
  choices: [
    "薬剤師",
    "製造管理者",
    "販売士",
    "医師"
  ],
  answer: 1
},
{
  question: "医薬部外品の製造工程で必要な衛生管理として正しいものは？",
  choices: [
    "手洗い・消毒の徹底",
    "作業着の着用義務なし",
    "製造室での飲食可",
    "原材料の管理不要"
  ],
  answer: 0
},
{
  question: "医薬部外品の製造販売後に発生した健康被害の報告先は？",
  choices: [
    "消費者庁",
    "厚生労働省",
    "都道府県知事",
    "経済産業省"
  ],
  answer: 2
},
{
  question: "医薬品において「効能」とは何を指しますか？",
  choices: [
    "薬がもたらす期待される作用や効果",
    "薬の販売価格",
    "薬のパッケージデザイン",
    "薬の製造工場の所在地"
  ],
  answer: 0
},
{
  question: "医薬部外品の製造所で作業前に必ず行うべきことは？",
  choices: [
    "手洗い・消毒",
    "広告の確認",
    "販売価格の見直し",
    "新商品の企画"
  ],
  answer: 0
},
{
  question: "医薬部外品の製造工程で異物混入を防ぐために必要なことは？",
  choices: [
    "作業着や帽子の着用",
    "音楽を流す",
    "窓を開ける",
    "携帯電話の使用"
  ],
  answer: 0
},
{
  question: "医薬部外品の製造記録を残す主な目的は？",
  choices: [
    "製造過程の追跡と品質管理",
    "従業員の評価",
    "広告作成のため",
    "販売促進のため"
  ],
  answer: 0
},
{
  question: "医薬部外品の製造所で定期的に点検すべきものは？",
  choices: [
    "製造設備や器具の清掃・点検",
    "従業員の私物",
    "会社のホームページ",
    "近隣店舗の価格"
  ],
  answer: 0
},
{
  question: "医薬部外品の製造において原材料の管理で重要なことは？",
  choices: [
    "入荷時の検品と適切な保管",
    "広告の作成",
    "販売価格の決定",
    "従業員の休憩時間の調整"
  ],
  answer: 0
},
{
  question: "医薬部外品の製造所で定期的に実施すべきことは？",
  choices: [
    "従業員の健康診断",
    "広告の作成",
    "販売価格の見直し",
    "店舗の改装"
  ],
  answer: 0
}
];

// 配列シャッフル関数
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// クイズデータをランダムに並び替え
const shuffledQuizData = quizData.map(q => {
  // 選択肢もシャッフルし、正解インデックスを再計算
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
          <input type="radio" name="answer" value="${idx}" class="accent-blue-500" />
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
    results.innerHTML = `<span class="text-green-600 text-3xl font-bold animate-bounce">正解！</span>`;
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
      document.getElementById('results').innerHTML = `<span class="text-blue-700 text-2xl font-bold animate-fade-in">終了！あなたの正解数は ${score} / ${shuffledQuizData.length} です。</span>`;
    }
  }, 1200);

  if (isCorrect) score++;
});

loadQuiz();