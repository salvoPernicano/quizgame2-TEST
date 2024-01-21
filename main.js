const questions = [
    {
      domanda: "Quando è iniziata la Seconda Guerra Mondiale?",
      risposte: [
        { testo: "1939", corretta: true },
        { testo: "1914", corretta: false },
        { testo: "1945", corretta: false },
        { testo: "1925", corretta: false }
      ]
    },
    {
      domanda: "Qual è stato il primo paese invaso dalla Germania nazista?",
      risposte: [
        { testo: "Polonia", corretta: true },
        { testo: "Francia", corretta: false },
        { testo: "Regno Unito", corretta: false },
        { testo: "Unione Sovietica", corretta: false }
      ]
    },
    {
      domanda: "Qual è stato il nome dell'operazione di sbarco alleato in Normandia nel 1944?",
      risposte: [
        { testo: "Operazione Overlord", corretta: true },
        { testo: "Operazione Barbarossa", corretta: false },
        { testo: "Operazione Market Garden", corretta: false },
        { testo: "Operazione Husky", corretta: false }
      ]
    },
];

const quizContainer = document.getElementById("quiz");
const questionHtml = document.getElementById("question");
const nextBtn = document.getElementById("next-btn");
const playBtn = document.getElementById("play-btn");

let questionIndex = -1;
let domandaHtml = questions[questionIndex];



function play(){
  nextBtn.classList.remove("hidden")
  playBtn.classList.add("hidden");
  next();
}

function next(){
  quizContainer.innerHTML = "";
  questionIndex++;
  if (questionIndex === 3){
    questionHtml.textContent = "YEAAAAAA"
    quizContainer.innerHTML = "hai finito";
    return;
  }
  let domandaHtml = questions[questionIndex];
  questionHtml.textContent = domandaHtml.domanda;

  for (let i = 0; i<domandaHtml.risposte.length; i++){
    let answerBox = document.createElement("button");
    answerBox.classList.add("btn");
    answerBox.textContent = domandaHtml.risposte[i].testo;
    
    answerBox.addEventListener("click", function(){
      if (domandaHtml.risposte[i].corretta){
        answerBox.classList.add("correct");
      } else {
        answerBox.classList.add("false");
      }
      
      setTimeout(() => {
        next();
      }, 700);
    })
    quizContainer.append(answerBox);
  }
  
}

