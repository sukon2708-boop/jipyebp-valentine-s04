const questions = [
  {
    q: "ถ้าเราให้เธอดื่มยาอย่างใดอย่างหนึ่ง เธอจะเลือกดื่มอะไร",
    c: ["A. ยาที่ทำให้ผายลมไม่หยุด", "B. ยาที่ทำให้น้ำมูกไหลไม่หยุด", ],
    correct: 0,
  },
  {
    q: "ถ้าเธอต้องเลือกสถานการณ์ต่อไปนี้ไปตลอดทั้งสัปดาห์ เธอจะเลือก?",
    c: ["A. โดนผีอำ นอนแบบขยับตัวไม่ได้ตอลอดคืน ร้องก็ร้องไม่ออก ตลอดทั้งสัปดาห์", "B. นอนไม่หลับตลอดทั้งคืนเป็นเวลา 1 สัปดาห์"],
    correct: 1,
  },
  {
    q: "หากถูกสาปให้เป็นครึ่งคนครึ่งสัตว์ล่ะ แล้วมีให้เธอเลือกระหว่าง",
    c: ["A. มีหน้าตาเป็นหมู แต่มีหุ่นดีๆ ", "B. มีหน้าตาดีระดับนายแบบอินเตอร์ แต่มีหุ่นอวบอั๋นแบบฮิปโป"],
    correct: 1,
  },
  {
    q: "ถ้าต้องเดินเข้าถ้ำมืด ๆ คิดว่าจะนำเทียนติดตัวไปด้วยกี่อัน",
    c: ["A. 1 เล่ม", "B.2 เล่ม", "C.มากกว่า 2 เล่ม"],
    correct: 2,
  },
  {
    q: "คิดว่าเราไปกินอะไรด้วยกันบ่อยที่สุด",
    c: ["A.หม่าล่า", "B.ซูชิ", "C.ก๋วยเตี๋ยว"],
    correct: 1,
  }
];

let index = 0;
let score = 0;

const questionText = document.getElementById("questionText");
const choicesBox = document.getElementById("choices");
const answerHint = document.getElementById("answerHint");
const gameCard = document.getElementById("gameCard");

function renderQuestion() {
  const q = questions[index];
  questionText.textContent = `${index + 1}. ${q.q}`;
  answerHint.textContent = "";
  choicesBox.innerHTML = "";

  q.c.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(i);
    choicesBox.appendChild(btn);
  });
}

function selectAnswer(selected) {
  const q = questions[index];

  if (selected === q.correct) {
    score++;
    answerHint.textContent = " ตอบได้ตรงใจ";
  } else {
    answerHint.textContent = " ไม่เป็นไรนะ";
  }

  answerHint.textContent += " — " + q.explain;

  index++;

  setTimeout(() => {
    if (index < questions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 1200);
}

function showResult() {
  gameCard.innerHTML = `
    <h2>เล่นจบแล้ว </h2>
    <p class="subtle">คุณได้</p>
    <h6>${score} / ${questions.length} คะแนน</h6>
    <p class="subtle">${resultMessage()}</p>
  `;
}

function resultMessage() {
  if (score === 5) return "เข้ากันได้ดีมาก เหมือนเกิดมาเพื่อกันเลย ";
  if (score >= 3) return "หวานกำลังดี น่ารักมาก ";
  return "ความรักไม่ได้วัดที่คะแนน แต่หัวใจ ";
}

renderQuestion();
