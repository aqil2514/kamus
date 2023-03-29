// alert('Masih dalam pengembangan. \nKemungkinan masih ada beberapa bug');
const headerH1 = document.querySelector("header h1");
const mainMenu = document.getElementById("main-menu");
const centerImage = document.querySelector(".center-image");
const kamusInggris = document.querySelector(".kamus-inggris");
const judulInggris = document.querySelector(".judul-inggris");
const menuKamusInggris = document.querySelector(".kamus-inggris-menu");
const goToETest = document.getElementById('button-eEnglish');
const englishDM = document.getElementById("english-menu");
const sEnglishV = document.querySelector(".button-eshow");
const eClose = document.querySelector(".button-eclose");
const eTest = document.querySelector('.e-test');

eClose.addEventListener("click", function () {
  menuKamusInggris.style.display = "none";
});

// 17 CAMELS AND 3 SONS

const sCams = document.getElementById("17cams");
const seCams = document.getElementById("17camels");
const sBackButton = document.querySelectorAll("#back-content-button");
const vocabs = document.querySelectorAll("#vocabs li");

// A MERCHANT AND HIS DONKEY
const amhd = document.getElementById("amhd");
const amhdp = document.getElementById("amhdp");

//CHANGE YOURSELF AND NOT THE WORLD
const cytw = document.getElementById("cytw");
const cytwp = document.getElementById("cytwp");

//UNHELPFUL FRIENDS
const uhf = document.getElementById("uhf");
const uhfp = document.getElementById("uhfp");

// GREEDY BOY
const gb = document.getElementById("gb");
const gbp = document.getElementById("gbp");

// centerImage.addEventListener('click', function(){
//     centerImage.classList.toggle('center-image-click');
// })

kamusInggris.addEventListener("click", function () {});

judulInggris.addEventListener("click", function () {
  menuKamusInggris.style.display = "flex";
});

const vocabLeave = function (e) {
  setTimeout(function () {
    e.classList.remove("animation-slide-down");
  }, 3000);
};

sBackButton.forEach(function (e) {
  e.addEventListener("click", function () {
    seCams.style.display = "none";
    amhdp.style.display = "none";
    uhfp.style.display = "none";
    cytwp.style.display = "none";
    gbp.style.display = "none";
    mainMenu.style.display = "flex";
    headerH1.innerHTML = "My Dictionary";
  });
});

vocabs.forEach(function (e) {
  e.addEventListener("click", function () {
    e.classList.toggle("animation-slide-down");
    vocabLeave(e);
  });
});

sEnglishV.addEventListener("click", function () {
  if (englishDM[0].selected) {
    alert("This is not selection");
  } else if (englishDM[1].selected) {
    seCams.style.display = "flex";
    amhdp.style.display = "none";
    uhfp.style.display = "none";
    cytwp.style.display = "none";
    gbp.style.display = "none";
    mainMenu.style.display = "none";
    headerH1.innerHTML = "17 Camels and 3 Sons";
  } else if (englishDM[2].selected) {
    seCams.style.display = "none";
    amhdp.style.display = "flex";
    uhfp.style.display = "none";
    cytwp.style.display = "none";
    gbp.style.display = "none";
    mainMenu.style.display = "none";
    headerH1.innerHTML = "A Merchant and his Donkey";
  } else if (englishDM[3].selected) {
    seCams.style.display = "none";
    amhdp.style.display = "none";
    uhfp.style.display = "flex";
    cytwp.style.display = "none";
    gbp.style.display = "none";
    mainMenu.style.display = "none";
    headerH1.innerHTML = "Change yourself and not the world";
  } else if (englishDM[4].selected) {
    seCams.style.display = "none";
    amhdp.style.display = "none";
    uhfp.style.display = "none";
    cytwp.style.display = "flex";
    gbp.style.display = "none";
    mainMenu.style.display = "none";
    headerH1.innerHTML = "Unhelpful Friends";
  } else if (englishDM[5].selected) {
    seCams.style.display = "none";
    amhdp.style.display = "none";
    uhfp.style.display = "none";
    cytwp.style.display = "none";
    gbp.style.display = "flex";
    mainMenu.style.display = "none";
    headerH1.innerHTML = "Greedy Boy";
  }
});

//========================================
//====================QUIZ & ANSWERS====================
//========================================

goToETest.addEventListener('click', function(){
  mainMenu.style.display='none';
  eTest.style.display='flex';
})

const kSoal = [
  {
    soal: "1. Apa arti dari Dessert Village?",
    answer: ["Bermain", "Berjaga", "Desa Gurun", "Bernyanyi"]
  },
  {
    soal: "2. Apa arti dari Vicinity?",
    answer: ["Sekitarnya", "Keledai", "Bodoh", "Berlalu-lalang"]
  },
  {
    soal: "3. Apa arti dari Rent Out?",
    answer: ["Mempertanyakan", "Menyewakan", "Membeli","Menanyakan"],
  },
  {
    soal: "4. Apa bahasa Inggrisnya Sekitarnya?",
    answer: ["Vicinity", "Round", "Victim", "Sky"]
  },
  {
    soal: "5. Apa bahasa Inggris meyewakan?",
    answer: ["Blew out", "Flip out", "Take out", "Rent Out"]
  },
  {
    soal: "6. Apa arti dari Funeral?",
    answer: ["Pemurnian", "Pemakaman", "Penyucian", "Pengendalian"]
  },
  {
    soal: "7. Selain memiliki arti 'akan', will juga memiliki arti?",
    answer: ["Surat Wasiat", "Bermain-main", "Berlayar", "Berlari"]
  },
  {
    soal: "8. Apa arti dari Divided?",
    answer: ["Menyewakan", "Mengampuni", "Mengasihani", "Membagi"]
  },
  {
    soal: "9. Apa bahasa Inggrisnya 'Bagian yang sama'?",
    answer: ["Same as", "Such as", "Will art", "Equal Parts"]
  },
  {
    soal: "10. Equally artinya?",
    answer: ["Sama", "Lebih", "Mirip", "Berlari"]
  },
  {
    soal: "11. Apa arti dari Odd Number?",
    answer: ["Angka Prima", "Angka ganjil", "Angka genap", "Angka"]
  },
  {
    soal: "12. Apa arti dari Stated?",
    answer: ["Mempertanyakan", "Menonjok", "Menyatakan", "Mengabarkan"]
  },
  {
    soal: "13. Apa arti dari Passed Away?",
    answer: ["Bermain", "Berlalu", "Meninggal", "Bernyanyi"]
  },
  {
    soal: "14. Apa arti dari as per?",
    answer: ["Menunggangi", "Berlayar", "Mirip", "Sesuai"]
  },
  {
    soal: "15. Apa arti dari Assign?",
    answer: ["Menetapkan", "Menyewakan", "Membeli", "Menanyakan"],
  },
  {
    soal: "16. Apa arti dari Read Out?",
    answer: ["Bermain", "Berjaga", "Membacakan", "Bernyanyi"]
  },
  {
    soal: "17. Apa bahasa Inggrisnya unta?",
    answer: ["Bird", "Camel", "Bear", "Cat"]
  },
  {
    soal: "18. Apa bahasa Inggrisnya pemakaman?",
    answer: ["Happines", "Happy", "Funeral", "Fun"]
  },
  {
    soal: "19. Apa bahasa Inggrisnya Menyatakan?",
    answer: ["Describe", "Explain", "Stated", "Bernyanyi"],
  },
  {
    soal: "20. Apa bahasa Inggrisnya Angka Ganjil?",
    answer: ["Number of prime", "Numbers", "Prime Number", "Odd Number"],
  },
];
const jawabanBenar = [2, 0, 1, 0, 3, 1, 0, 3, 3, 0, 1, 2, 2, 3, 0, 2, 1, 2, 2, 3];

//========================================
//====================SETUP QUIZ====================
//========================================

let cSoal = 0;
let tScore = 0;
let sAnswer = [];

document.addEventListener("DOMContentLoaded", function () {
  setupQuestions();
});

function setupQuestions() {
  document.getElementById("questions").innerText = kSoal[cSoal].soal;
  document.getElementById("text-jaw0").innerText = kSoal[cSoal].answer[0];
  document.getElementById("text-jaw1").innerText = kSoal[cSoal].answer[1];
  document.getElementById("text-jaw2").innerText = kSoal[cSoal].answer[2];
  document.getElementById("text-jaw3").innerText = kSoal[cSoal].answer[3];
}


function nextQuestion() {
  cSoal++;
  saveAnswer();
  if (cSoal > kSoal.length - 1) {
    stopQuestions();
  }

  resetState();
  setupQuestions();
}

function saveAnswer() {
  const a = document.querySelector("input[type=radio]:checked");
  if (a != null) {
    sAnswer.push(parseInt(a.getAttribute("data-id")));
  } else if(a === null) {
    alert('Kamu belum memilih jawaban!');
    return cSoal--;
  }
}

function checkAnswer() {
  for (let i = 0; i < kSoal.length; i++) {
    if (sAnswer[i] == jawabanBenar[i]) {
      tScore += Math.round(100 / kSoal.length);
    }
  }
}

function stopQuestions() {
  checkAnswer();
  alert(`Soal selesai! Nilai kamu ${tScore}`);
  const tanya = confirm('Apakah kamu ingin tes lagi?');
  if(tanya == true){
    resetSoal();
  } else{
    eTest.style.display='none';
    mainMenu.style.display='flex';
  }
}

function resetSoal(){
  cSoal = 0;
}

function resetState() {
  document.querySelector("input[type=radio]:checked").checked = false;
}

function backToMenu(){
  eTest.style.display='none'
  mainMenu.style.display='flex'
}