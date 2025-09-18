
const quizData = [
  // HTML
  { category: "html", question: "What does HTML stand for?",
    answers: ["HyperText Markup Language", "Hyper Tool Markup Language", "HighText Machine Language", "Hyper Transfer Markup Language"],
    correct: "HyperText Markup Language" },
  { category: "html", question: "Which HTML element is used for the largest heading?",
    answers: ["&lt;h6&gt;", "&lt;head&gt;", "&lt;heading&gt;", "&lt;h1&gt;"],
    correct: "&lt;h1&gt;" },
  { category: "html", question: "Which element includes JavaScript in a page?",
    answers: ["&lt;style&gt;", "&lt;script&gt;", "&lt;javascript&gt;", "&lt;code&gt;"],
    correct: "&lt;script&gt;" },
  { category: "html", question: "Which attribute provides alternative text for an image?",
    answers: ["title", "alt", "src", "role"],
    correct: "alt" },
  { category: "html", question: "Which element represents self-contained content like a blog post?",
    answers: ["&lt;section&gt;", "&lt;div&gt;", "&lt;article&gt;", "&lt;aside&gt;"],
    correct: "&lt;article&gt;" },
  { category: "html", question: "Which tag is used to define a table row?",
    answers: ["&lt;td&gt;", "&lt;tr&gt;", "&lt;th&gt;", "&lt;row&gt;"],
    correct: "&lt;tr&gt;" },
  { category: "html", question: "Which HTML5 element is used for navigation links?",
    answers: ["&lt;nav&gt;", "&lt;menu&gt;", "&lt;header&gt;", "&lt;links&gt;"], 
    correct: "&lt;nav&gt;" },
  { category: "html", question: "What is the correct doctype for HTML5?", 
    answers: ["&lt;!DOCTYPE html&gt;", "&lt;!DOCTYPE HTML5&gt;", "&lt;html&gt;", "&lt;doctype&gt;"], 
    correct: "&lt;!DOCTYPE html&gt;" },
  { category: "html", question: "Which element defines important text in HTML?", 
    answers: ["&lt;strong&gt;", "&lt;i&gt;", "&lt;mark&gt;", "&lt;important&gt;"], 
    correct: "&lt;strong&gt;" },
  { category: "html", question: "Which input type is used for picking a date?", 
    answers: ["text", "time", "date", "calendar"], 
    correct: "date" },


  // CSS
  { category: "css", question: "What does CSS stand for?",
    answers: ["Central Style Sheets", "Cascading Style Sheets", "Creative Style Syntax", "Computer Style Sheets"],
    correct: "Cascading Style Sheets" },
  { category: "css", question: "Which symbol selects by ID in CSS?",
    answers: [".", "#", "*", ":"],
    correct: "#" },
  { category: "css", question: "Which property controls the text size?",
    answers: ["font-style", "font-weight", "font-size", "text-style"],
    correct: "font-size" },
  { category: "css", question: "What property creates space outside an element’s border?",
    answers: ["padding", "margin", "gap", "outline-offset"],
    correct: "margin" },
  { category: "css", question: "Which layout mode does `display: grid;` enable?",
    answers: ["Flexbox", "Grid Layout", "Flow Layout", "Inline Layout"],
    correct: "Grid Layout" },
  { category: "css", question: "Which unit scales with root font size?",
    answers: ["px", "em", "rem", "vh"],
    correct: "rem" },
  { category: "css", question: "Which property sets the background color?", 
    answers: ["color", "bgcolor", "background-color", "fill"], 
    correct: "background-color" },
  { category: "css", question: "Which property makes text bold?", 
    answers: ["text-style", "font-style", "font-weight", "bold"], 
    correct: "font-weight" },
  { category: "css", question: "Which value of position makes an element fixed to the screen?", 
    answers: ["absolute", "fixed", "relative", "sticky"], 
    correct: "fixed" },
  { category: "css", question: "Which property is used to create rounded corners?", 
    answers: ["border-style", "border-radius", "corner-radius", "outline"], 
    correct: "border-radius" },

  // JavaScript
  { category: "javascript", question: "Which company created JavaScript in 1995?",
    answers: ["Microsoft", "Netscape", "Google", "Oracle"],
    correct: "Netscape" },
  { category: "javascript", question: "Which method logs output to the developer console?",
    answers: ["console.write()", "console.log()", "console.print()", "log.console()"],
    correct: "console.log()" },
  { category: "javascript", question: "Which of the following is NOT a programming language?",
    answers: ["Python", "C++", "HTML", "Java"],
    correct: "HTML" },
  { category: "javascript", question: "What does JSON stand for?",
    answers: ["JavaScript Object Notation", "Java Syntax Oriented Notation", "JavaScript Oriented Nodes", "Joined Script Object Notation"],
    correct: "JavaScript Object Notation" },
  { category: "javascript", question: "Which keyword declares a block-scoped variable?",
    answers: ["var", "let", "function", "def"],
    correct: "let" },
  { category: "javascript", question: "What is the result of `typeof null` in JS?",
    answers: ["'null'", "'object'", "'undefined'", "'number'"],
    correct: "'object'" },
  { category: "javascript", question: "Which method joins array elements into a string?", 
    answers: ["concat()", "join()", "toString()", "combine()"], 
    correct: "join()" },
  { category: "javascript", question: "Which loop is guaranteed to run at least once?", 
    answers: ["for", "while", "do...while", "forEach"], 
    correct: "do...while" },
  { category: "javascript", question: "Which operator checks both value and type?", 
    answers: ["==", "===", "=", "!="], 
    correct: "===" },
  { category: "javascript", question: "Which built-in method converts JSON to an object?", 
    answers: ["JSON.parse()", "JSON.stringify()", "parse.JSON()", "toObject()"], 
    correct: "JSON.parse()" },
];

/***********************
 * Elements
 ***********************/
const setupScreen = document.getElementById("setup-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultsScreen = document.getElementById("results-screen");
const startBtn = document.getElementById("start-btn");
const categorySelect = document.getElementById("category");
const difficultySelect = document.getElementById("difficulty");
const questionCountSelect = document.getElementById("question-count");

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const timerEl = document.getElementById("timer");
const progressEl = document.getElementById("progress");
const qCountLabel = document.getElementById("question-count-label");

const scoreSummaryEl = document.getElementById("score-summary");
const reviewEl = document.getElementById("review");
const playAgainBtn = document.getElementById("play-again");
const saveScoreBtn = document.getElementById("save-score");

const bestWrap = document.getElementById("best-score-wrap");
const bestText = document.getElementById("best-score-text");

const lbModal = document.getElementById("leaderboard-modal");
const lbList = document.getElementById("leaderboard-list");
const viewLbBtn = document.getElementById("view-leaderboard");
const clearLbBtn = document.getElementById("clear-leaderboard");

const muteToggle = document.getElementById("mute-toggle");

/***********************
 * State
 ***********************/
let selectedCategory = "all";
let difficulty = "easy";
let maxQuestions = 10;

let workingSet = [];          // filtered + shuffled
let currentIndex = 0;         // current question index
let score = 0;
let timer = null;
let timeLeft = 20;
let review = [];              // {q, chosen, correct, isCorrect, timeLeft}

let muted = JSON.parse(localStorage.getItem("quiz.muted") || "false");

/***********************
 * Utilities
 ***********************/
const shuffle = (arr) => arr.map(v => [Math.random(), v])
  .sort((a,b)=>a[0]-b[0]).map(([,v])=>v);

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

function $(sel, root=document){ return root.querySelector(sel); }

/***********************
 * Sound (WebAudio beeps)
 ***********************/
let audioCtx;
function ensureAudio() {
  if (!audioCtx) {
    try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
    catch { /* ignore */ }
  }
}
function beep(freq=880, duration=0.12, type="sine", gain=0.06){
  if (muted) return;
  ensureAudio();
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  g.gain.value = gain;
  osc.connect(g).connect(audioCtx.destination);
  const now = audioCtx.currentTime;
  osc.start(now);
  osc.stop(now + duration);
}

/***********************
 * Leaderboard / Best Score
 ***********************/
function getLB(){
  try { return JSON.parse(localStorage.getItem("quiz.leaderboard") || "[]"); }
  catch { return []; }
}
function setLB(list){
  localStorage.setItem("quiz.leaderboard", JSON.stringify(list));
}
function addLB(entry){
  const list = getLB();
  list.push(entry);
  setLB(list);
}
function bestScoreText(){
  const list = getLB();
  if (!list.length) return null;
  // best by percent desc, then recent
  const best = [...list].sort((a,b)=> (b.percent - a.percent) || (new Date(b.date)-new Date(a.date)) )[0];
  return `${best.score}/${best.total} (${Math.round(best.percent)}%) – ${best.category} • ${best.difficulty}`;
}
function renderLeaderboard(){
  const list = getLB().sort((a,b)=> (b.percent - a.percent) || (new Date(b.date)-new Date(a.date)));
  lbList.innerHTML = "";
  if (!list.length){
    lbList.innerHTML = "<li>No scores yet. Play a game!</li>";
    return;
  }
  list.slice(0, 20).forEach((e, i) => {
    const li = document.createElement("li");
    li.textContent = `${i+1}. ${e.name || "Player"} — ${e.score}/${e.total} (${Math.round(e.percent)}%) • ${e.category} • ${e.difficulty} • ${new Date(e.date).toLocaleString()}`;
    lbList.appendChild(li);
  });
}

/***********************
 * Setup Screen
 ***********************/
function updateBest(){
  const txt = bestScoreText();
  if (txt){
    bestWrap.hidden = false;
    bestText.textContent = txt;
  } else {
    bestWrap.hidden = true;
  }
}

function show(el){ el.classList.add("active"); }
function hide(el){ el.classList.remove("active"); }

function toSetup(){
  hide(quizScreen); hide(resultsScreen);
  show(setupScreen);
  updateBest();
}

/***********************
 * Quiz Flow
 ***********************/
function buildWorkingSet(){
  const pool = selectedCategory === "all"
    ? [...quizData]
    : quizData.filter(q => q.category === selectedCategory);

  if (pool.length === 0) {
    alert("No questions for that category yet – switching to All.");
    selectedCategory = "all";
    return buildWorkingSet();
  }

  const shuffled = shuffle(pool);
  const count = clamp(maxQuestions, 1, shuffled.length);
  return shuffled.slice(0, count).map(q => ({
    ...q,
    _shuffledAnswers: shuffle([...q.answers])
  }));
}

function startQuiz(){
  score = 0;
  currentIndex = 0;
  review = [];

  selectedCategory = categorySelect.value;
  difficulty = difficultySelect.value;
  maxQuestions = parseInt(questionCountSelect.value, 10);

  workingSet = buildWorkingSet();

  hide(setupScreen); hide(resultsScreen);
  show(quizScreen);

  renderQuestion();
}

function renderQuestion(){
  clearInterval(timer);
  nextBtn.disabled = true;

  const total = workingSet.length;
  const idx = currentIndex;
  const q = workingSet[idx];

  qCountLabel.textContent = `Q ${idx+1} / ${total}`;
  progressEl.style.width = `${(idx/total)*100}%`;

  questionEl.innerHTML = q.question;
  answersEl.innerHTML = "";

  q._shuffledAnswers.forEach(answer => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.innerHTML = answer;
    btn.addEventListener("click", () => onSelect(btn, q));
    const li = document.createElement("li");
    li.appendChild(btn);
    answersEl.appendChild(li);
  });

  // timer
  timeLeft = (difficulty === "hard") ? 10 : 20;
  timerEl.textContent = `${timeLeft}s`;
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `${timeLeft}s`;
    if (timeLeft <= 0){
      clearInterval(timer);
      lockAnswers(q);
      nextBtn.disabled = false;
      beep(300, 0.12, "square", 0.04);
    }
  }, 1000);
}

function onSelect(btn, q){
  if (btn.disabled) return;
  clearInterval(timer);

  const chosen = btn.innerHTML;
  const isCorrect = chosen === q.correct;

  if (isCorrect){ btn.classList.add("correct"); score++; beep(880, 0.12, "sine", 0.06); }
  else { btn.classList.add("wrong"); beep(220, 0.12, "sine", 0.06); }

  lockAnswers(q);

  review.push({
    q: q.question,
    chosen,
    correct: q.correct,
    isCorrect,
    timeLeft
  });

  nextBtn.disabled = false;
}

function lockAnswers(q){
  const buttons = answersEl.querySelectorAll("button");
  buttons.forEach(b => {
    b.disabled = true;
    if (b.innerHTML === q.correct){
      b.classList.add("correct");
    }
  });
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < workingSet.length){
    renderQuestion();
  } else {
    finishQuiz();
  }
});

/***********************
 * Results
 ***********************/
function finishQuiz(){
  clearInterval(timer);

  hide(quizScreen);
  show(resultsScreen);

  const total = workingSet.length;
  const percent = Math.round((score/total)*100);

  scoreSummaryEl.innerHTML = `You scored <strong>${score}</strong> out of <strong>${total}</strong> (${percent}%).`;

  // Review list
  reviewEl.innerHTML = "";
  review.forEach((r, i) => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <div class="meta">#${i+1} • Time left: ${r.timeLeft}s</div>
      <div class="q">${r.q}</div>
      <div class="a">
        <span class="you">Your answer: ${r.chosen}</span><br/>
        <span class="correct">Correct: ${r.correct}</span>
      </div>
    `;
    reviewEl.appendChild(div);
  });

  // Update best score info (store simple best too)
  const best = JSON.parse(localStorage.getItem("quiz.best") || "null");
  const nowBest = (!best || percent > best.percent) ? { score, total, percent, category: selectedCategory, difficulty, date: new Date().toISOString() } : best;
  localStorage.setItem("quiz.best", JSON.stringify(nowBest));
  updateBest();

  // Prepare save action
  saveScoreBtn.onclick = () => {
    const name = prompt("Enter your name for the leaderboard (optional):") || "Player";
    addLB({ name, score, total, percent, category: selectedCategory, difficulty, date: new Date().toISOString() });
    alert("Saved to leaderboard!");
  };
}

playAgainBtn.addEventListener("click", toSetup);

/***********************
 * Leaderboard UI
 ***********************/
viewLbBtn.addEventListener("click", () => {
  renderLeaderboard();
  lbModal.showModal();
});
clearLbBtn.addEventListener("click", () => {
  if (confirm("Clear the entire leaderboard?")){
    setLB([]);
    renderLeaderboard();
  }
});

/***********************
 * Mute Toggle
 ***********************/
function renderMute(){
  muteToggle.setAttribute("aria-pressed", String(!!muted));
  muteToggle.textContent = muted ? "🔇" : "🔊";
}
muteToggle.addEventListener("click", () => {
  muted = !muted;
  localStorage.setItem("quiz.muted", JSON.stringify(muted));
  renderMute();
});
renderMute();

/***********************
 * Start / Init
 ***********************/
startBtn.addEventListener("click", startQuiz);
toSetup();
