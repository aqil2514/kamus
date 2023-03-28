// alert('Masih dalam pengembangan. \nKemungkinan masih ada beberapa bug');
const headerH1= document.querySelector('header h1');
const mainMenu = document.getElementById('main-menu');
const centerImage = document.querySelector('.center-image');
const kamusInggris = document.querySelector('.kamus-inggris');
const judulInggris = document.querySelector('.judul-inggris');
const menuKamusInggris = document.querySelector('.kamus-inggris-menu');
const englishDM = document.getElementById('english-menu');
const sEnglishV = document.querySelector('.button-eshow');
const eClose = document.querySelector('.button-eclose');

eClose.addEventListener('click', function(){
    menuKamusInggris.style.display='none';
})

// 17 CAMELS AND 3 SONS

const sCams = document.getElementById('17cams');
const seCams =document.getElementById('17camels');
const sBackButton = document.querySelectorAll('#back-content-button');
const vocabs = document.querySelectorAll('#vocabs li');

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

const vocabLeave = function(e){
    setTimeout(function(){
        e.classList.remove('animation-slide-down');
    },3000);
}

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

vocabs.forEach(function(e){
    e.addEventListener('click', function(){
        e.classList.toggle('animation-slide-down');
        vocabLeave(e);
    })
})

sEnglishV.addEventListener('click', function(){
    if(englishDM[0].selected){
        alert('This is not selection')
    }
    else if(englishDM[1].selected){
        seCams.style.display='flex';
        amhdp.style.display='none';
        uhfp.style.display='none';
        cytwp.style.display='none';
        gbp.style.display='none';
        mainMenu.style.display='none';
    }
    else if(englishDM[2].selected){
        seCams.style.display='none';
        amhdp.style.display='flex';
        uhfp.style.display='none';
        cytwp.style.display='none';
        gbp.style.display='none';
        mainMenu.style.display='none';
    }
    else if(englishDM[3].selected){
        seCams.style.display='none';
        amhdp.style.display='none';
        uhfp.style.display='flex';
        cytwp.style.display='none';
        gbp.style.display='none';
        mainMenu.style.display='none';
    }
    else if(englishDM[4].selected){
        seCams.style.display='none';
        amhdp.style.display='none';
        uhfp.style.display='none';
        cytwp.style.display='flex';
        gbp.style.display='none';
        mainMenu.style.display='none';
    }
    else if(englishDM[5].selected){
        seCams.style.display='none';
        amhdp.style.display='none';
        uhfp.style.display='none';
        cytwp.style.display='none';
        gbp.style.display='flex';
        mainMenu.style.display='none';
    }
})