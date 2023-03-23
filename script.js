const headerH1= document.querySelector('header h1');
const mainMenu = document.getElementById('main-menu');
const centerImage = document.querySelector('.center-image');
const kamusInggris = document.querySelector('.kamus-inggris');
const judulInggris = document.querySelector('.judul-inggris');
const menuKamusInggris = document.querySelector('.kamus-inggris-menu');
const mkiKembali = document.querySelector('.dir-button button:first-of-type');
const mkiTutup = document.querySelector('.dir-button button:nth-of-type(2)');

// 17 CAMELS AND 3 SONS

const sCams = document.getElementById('17cams');
const seCams =document.getElementById('17camels');
const sBackButton = document.querySelectorAll('#back-content-button');
const vocabCams = document.querySelectorAll('#vocab-camels li');

// A MERCHANT AND HIS DONKEY
const amhd = document.getElementById('amhd');
const amhdp = document.getElementById('amhdp');

//CHANGE YOURSELF AND NOT THE WORLD
const cytw = document.getElementById('cytw');
const cytwp = document.getElementById('cytwp');

//UNHELPFUL FRIENDS
const uhf = document.getElementById('uhf');
const uhfp = document.getElementById('uhfp');

// GREEDY BOY
const gb = document.getElementById('gb');
const gbp = document.getElementById('gbp');

centerImage.addEventListener('click', function(){
    centerImage.classList.toggle('center-image-click');
})

kamusInggris.addEventListener('click', function(){
    
})

judulInggris.addEventListener('click', function(){
    menuKamusInggris.style.display='flex';
})

mkiTutup.addEventListener('click', function(){
    menuKamusInggris.style.display='none';
})

const vocabLeave = function(e){
    setTimeout(function(){
        e.classList.remove('animation-slide-down');
    },5000);
}

vocabCams.forEach(function(e){
    e.addEventListener('click', function(){
        e.classList.toggle('animation-slide-down');
    })
    e.addEventListener('mouseleave', function(){
        vocabLeave(e);
    })
})

sCams.addEventListener('click', function(){
    mainMenu.style.display='none';
    seCams.style.display='flex';
    headerH1.innerHTML='Vocabularies of 17 Camels and 3 Sons';
})

amhd.addEventListener('click', function(){
    mainMenu.style.display='none';
    amhdp.style.display='flex';
    headerH1.innerHTML='Vocabularies of A Merchant and His Donkey'
})

cytw.addEventListener('click', function(){
    mainMenu.style.display='none';
    cytwp.style.display='flex';
    headerH1.innerHTML='Vocabularies of Change Yourself and not the World'
})

uhf.addEventListener('click', function(){
    mainMenu.style.display='none';
    uhfp.style.display='flex';
    headerH1.innerHTML='Vocabularies of Unhelpful Friends'
})

gb.addEventListener('click', function(){
    mainMenu.style.display='none';
    gbp.style.display='flex';
    headerH1.innerHTML="Vocabularies of Greedy Boy"
})

sBackButton.forEach(function(e){
    e.addEventListener('click', function(){
        seCams.style.display='none';
        amhdp.style.display='none';
        uhfp.style.display='none';
        cytwp.style.display='none';
        gbp.style.display='none';
        mainMenu.style.display='flex';
        headerH1.innerHTML='Kamus Offline';
    })
})