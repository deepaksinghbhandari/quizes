// =========================
// QUESTIONS DATA (50 total)
const questions = [
  // EASY (10)
  { question:"2 + 2 = ?", answers:["3","4","5","6"], correct:1, difficulty:"easy" },
  { question:"Capital of France?", answers:["Paris","London","Rome","Berlin"], correct:0, difficulty:"easy" },
  { question:"HTML stands for?", answers:["Hypertext Markup Language","Hyperlink Text Mark Language","Hyper Tool Multi Language","Hyper Transfer Markup Language"], correct:0, difficulty:"easy" },
  { question:"CSS stands for?", answers:["Central Style Sheets","Cascading Style Sheets","Computer Style Sheets","Creative Style Sheets"], correct:1, difficulty:"easy" },
  { question:"Which tag for paragraph?", answers:["<p>","<div>","<h1>","<span>"], correct:0, difficulty:"easy" },
  { question:"Which JS type?", answers:["String","Letter","Sentence","Paragraph"], correct:0, difficulty:"easy" },
  { question:"HTML image attribute?", answers:["src","href","img","link"], correct:0, difficulty:"easy" },
  { question:"Which color makes pink?", answers:["Red+White","Red+Blue","Blue+White","Yellow+Red"], correct:0, difficulty:"easy" },
  { question:"Keyword declares variable?", answers:["int","var","define","letvar"], correct:1, difficulty:"easy" },
  { question:"5 - 3 = ?", answers:["2","3","1","0"], correct:0, difficulty:"easy" },

  // MEDIUM (10)
  { question:"Who developed JS?", answers:["Microsoft","Netscape","Google","Apple"], correct:1, difficulty:"medium" },
  { question:"Which loop not in JS?", answers:["for","foreach","while","do-while"], correct:1, difficulty:"medium" },
  { question:"Strict equality operator?", answers:["=","==","===","!=="], correct:2, difficulty:"medium" },
  { question:"JSON.parse() does?", answers:["Convert JSON to object","Convert object to JSON","Parse String","Parse Array"], correct:0, difficulty:"medium" },
  { question:"DOM stands for?", answers:["Document Object Model","Data Object Method","Digital Order Map","Display Object Mode"], correct:0, difficulty:"medium" },
  { question:"JS constant keyword?", answers:["var","let","const","constant"], correct:2, difficulty:"medium" },
  { question:"Which CSS property changes color?", answers:["background-color","color","font-style","text-align"], correct:1, difficulty:"medium" },
  { question:"Which tag JS?", answers:["<link>","<js>","<script>","<code>"], correct:2, difficulty:"medium" },
  { question:"What does JSON stand for?", answers:["Java Standard Output Name","JavaScript Object Notation","Java Source Open Network","Jumbo String Object Node"], correct:1, difficulty:"medium" },
  { question:"Who invented JS?", answers:["Guido van Rossum","Brendan Eich","James Gosling","Tim Berners-Lee"], correct:1, difficulty:"medium" },

  // HARD (10)
  { question:"HTTP 'Not Found' code?", answers:["200","301","404","500"], correct:2, difficulty:"hard" },
  { question:"HTTPS protocol?", answers:["SSL/TLS","FTP","SSH","SMTP"], correct:0, difficulty:"hard" },
  { question:"React owner?", answers:["Google","Facebook","Microsoft","Amazon"], correct:1, difficulty:"hard" },
  { question:"Which not JS type?", answers:["String","Number","Boolean","Character"], correct:3, difficulty:"hard" },
  { question:"'5'+3 result?", answers:["8","53","Error","NaN"], correct:1, difficulty:"hard" },
  { question:"CSS unit relative to root?", answers:["px","em","rem","%"], correct:2, difficulty:"hard" },
  { question:"Event bubbling?", answers:["Captured first","Propagate child->parent","Stop immediately","Event delegation"], correct:1, difficulty:"hard" },
  { question:"Not a JS framework?", answers:["React","Vue","Angular","Laravel"], correct:3, difficulty:"hard" },
  { question:"ES6 multi-line strings?", answers:["Template literals","String.concat","String.join","String.multi"], correct:0, difficulty:"hard" },
  { question:"Array method remove last?", answers:["pop()","shift()","push()","unshift()"], correct:0, difficulty:"hard" },

  // ADDITIONAL (20) to reach 50
  { question:"JS function keyword?", answers:["fun","function","func","def"], correct:1, difficulty:"easy" },
  { question:"CSS to make text bold?", answers:["font-weight:bold","text-style:bold","font:bold","text:bold"], correct:0, difficulty:"easy" },
  { question:"HTML link tag?", answers:["<a>","<link>","<href>","<anchor>"], correct:0, difficulty:"easy" },
  { question:"JS array method add end?", answers:["push()","pop()","shift()","unshift()"], correct:0, difficulty:"medium" },
  { question:"CSS center div horizontally?", answers:["margin:auto","text-align:center","align:center","center:both"], correct:0, difficulty:"medium" },
  { question:"JS 'undefined' type?", answers:["object","number","undefined","null"], correct:2, difficulty:"medium" },
  { question:"HTML5 semantic tag?", answers:["<section>","<div>","<span>","<b>"], correct:0, difficulty:"medium" },
  { question:"JS event listener method?", answers:["addEvent","addEventListener","onEvent","listenEvent"], correct:1, difficulty:"medium" },
  { question:"CSS change font size?", answers:["font-size","text-size","size-font","font"], correct:0, difficulty:"medium" },
  { question:"JS boolean values?", answers:["true,false","1,0","yes,no","on,off"], correct:0, difficulty:"easy" },
  { question:"HTML5 video tag?", answers:["<video>","<media>","<player>","<vid>"], correct:0, difficulty:"medium" },
  { question:"JS 'this' refers to?", answers:["current function","global object","caller","owner object"], correct:3, difficulty:"hard" },
  { question:"CSS flexbox property?", answers:["justify-content","align","center-content","flex-align"], correct:0, difficulty:"hard" },
  { question:"JS string method?", answers:["slice()","cut()","part()","splitText()"], correct:0, difficulty:"medium" },
  { question:"HTML form method?", answers:["get","fetch","send","post"], correct:0, difficulty:"medium" },
  { question:"JS parseInt('10')?", answers:["10","'10'","NaN","undefined"], correct:0, difficulty:"easy" },
  { question:"CSS selector id?", answers:["#id","id","*id","$id"], correct:0, difficulty:"easy" },
  { question:"JS NaN stands for?", answers:["Not a Number","No a Number","Null a Number","Number NaN"], correct:0, difficulty:"hard" },
  { question:"HTML meta tag?", answers:["<meta>","<head>","<info>","<title>"], correct:0, difficulty:"medium" },
  { question:"CSS display inline?", answers:["display:inline","display:inline-block","display:block","display:inline-flex"], correct:0, difficulty:"medium" }
];

// =========================
// VARIABLES
let currentQuestion = 0, score = 0, timer, timeLeft = 20;
let players = JSON.parse(localStorage.getItem("players")) || [];
let currentPlayer = "", filteredQuestions = [];

const startContainer = document.getElementById("start-container");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const progressEl = document.getElementById("progress");
const progressText = document.getElementById("progress-text");
const timerEl = document.getElementById("timer");
const scoreText = document.getElementById("score-text");
const scoreboardEl = document.getElementById("scoreboard");
const themeToggle = document.getElementById("theme-toggle");

// =========================
// EVENTS
document.getElementById("start-btn").addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  const difficulty = document.getElementById("difficulty").value;
  if(!username) return alert("Please enter your name!");
  currentPlayer = username;
  filteredQuestions = difficulty === "all" ? [...questions] : questions.filter(q => q.difficulty === difficulty);
  filteredQuestions = shuffleArray(filteredQuestions);
  score = 0; currentQuestion = 0;
  startContainer.classList.remove("active"); startContainer.classList.add("hidden");
  resultContainer.classList.add("hidden"); quizContainer.classList.add("active");
  loadQuestion();
});

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if(currentQuestion < filteredQuestions.length) loadQuestion();
  else showResult();
});

document.getElementById("restart-btn").addEventListener("click", () => {
  startContainer.classList.remove("hidden"); startContainer.classList.add("active");
  resultContainer.classList.add("hidden"); quizContainer.classList.remove("active"); quizContainer.classList.add("hidden");
});

document.getElementById("clear-btn").addEventListener("click", () => {
  players = []; localStorage.removeItem("players"); updateLeaderboard();
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

if(localStorage.getItem("theme") === "dark") document.body.classList.add("dark");

// =========================
// FUNCTIONS
function shuffleArray(array){ return array.sort(() => Math.random() - 0.5); }

function loadQuestion() {
  resetState();
  const q = filteredQuestions[currentQuestion];
  questionEl.textContent = q.question;
  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.addEventListener("click", () => checkAnswer(btn, index));
    answersEl.appendChild(btn);
  });
  progressEl.style.width = ((currentQuestion + 1)/filteredQuestions.length) * 100 + "%";
  progressText.textContent = `Q ${currentQuestion+1} of ${filteredQuestions.length}`;
  startTimer();
}

function resetState() {
  clearInterval(timer); timeLeft = 20;
  timerEl.textContent = `⏳ ${timeLeft}s`;
  timerEl.className = ""; // reset timer classes
  timerEl.classList.add("timer-normal");
  answersEl.innerHTML = ""; nextBtn.style.display = "none";
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `⏳ ${timeLeft}s`;

    timerEl.classList.remove("timer-normal","timer-warning","timer-danger");
    if(timeLeft > 10) timerEl.classList.add("timer-normal");
    else if(timeLeft <= 10 && timeLeft > 5) timerEl.classList.add("timer-warning");
    else timerEl.classList.add("timer-danger");

    if(timeLeft <= 0) { clearInterval(timer); lockAnswers(); nextBtn.style.display = "block"; }
  },1000);
}

function checkAnswer(button, selected){
  clearInterval(timer);
  const correct = filteredQuestions[currentQuestion].correct;
  if(selected === correct){ score++; button.classList.add("correct"); }
  else{ button.classList.add("wrong"); answersEl.children[correct].classList.add("correct"); }
  lockAnswers(); nextBtn.style.display = "block";
}

function lockAnswers(){ Array.from(answersEl.children).forEach(btn => btn.disabled = true); }

function showResult(){
  quizContainer.classList.remove("active"); quizContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");
  scoreText.textContent = `${currentPlayer}, you scored ${score} out of ${filteredQuestions.length}`;
  
  players.push({name: currentPlayer, score});
  players.sort((a,b) => b.score - a.score);
  localStorage.setItem("players", JSON.stringify(players));
  if(score === filteredQuestions.length) startConfetti();

  // Chart
  const ctx = document.getElementById("scoreChart").getContext("2d");
  Chart.defaults.color = document.body.classList.contains('dark') ? '#fff' : '#222';
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["Correct","Wrong"],
      datasets: [{
        data: [score, filteredQuestions.length - score],
        backgroundColor: ["#2ecc71","#e74c3c"]
      }]
    },
    options:{ responsive:true, plugins:{ legend:{ position:'bottom' } } }
  });

  updateLeaderboard();
}

function updateLeaderboard(){
  scoreboardEl.innerHTML = "";
  players.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.name}: ${p.score}/${filteredQuestions.length}`;
    scoreboardEl.appendChild(li);
  });
}

// =========================
// CONFETTI EFFECT
function startConfetti(){
  const confetti = document.getElementById("confetti"); 
  confetti.width = window.innerWidth; confetti.height = window.innerHeight;
  const ctx = confetti.getContext("2d"); 
  const confettis = [];
  for(let i=0;i<150;i++){
    confettis.push({
      x: Math.random()*confetti.width,
      y: Math.random()*confetti.height - confetti.height,
      r: Math.random()*6 + 4,
      d: Math.random()*30,
      color: `hsl(${Math.random()*360},100%,50%)`,
      tilt: Math.random()*10-10,
      tiltAngleIncremental: Math.random()*0.07+0.05,
      tiltAngle:0
    });
  }
  function draw(){
    ctx.clearRect(0,0,confetti.width,confetti.height);
    confettis.forEach(c=>{
      ctx.beginPath();
      ctx.lineWidth = c.r/2;
      ctx.strokeStyle = c.color;
      ctx.moveTo(c.x+c.tilt+c.r/4, c.y);
      ctx.lineTo(c.x+c.tilt, c.y+c.tilt+c.r/4);
      ctx.stroke();
    });
    update();
    requestAnimationFrame(draw);
  }
  function update(){
    confettis.forEach((c,i)=>{
      c.tiltAngle += c.tiltAngleIncremental;
      c.y += (Math.cos(c.d)+3+c.r/2)/2;
      c.x += Math.sin(c.tiltAngle);
      c.tilt = Math.sin(c.tiltAngle)*15;
      if(c.y > confetti.height) confettis[i] = {...c, y:-10, x:Math.random()*confetti.width};
    });
  }
  draw();
}