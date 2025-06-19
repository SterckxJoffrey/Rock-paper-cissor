const pierre = document.getElementById('pierre');
const feuille = document.getElementById('feuille');
const ciseau = document.getElementById('ciseau');
const container = document.getElementById('container');
const score = document.getElementById('score')
const scoreOrdi = document.getElementById('scoreOrdi')

let count = 0
let countOrdi = 0
let answer;
let answerOrdi;

function getAnswerOrdi() {
    const choix = ['pierre', 'feuille', 'ciseau'];
    return choix[Math.floor(Math.random() * 3)];
}

function createElement(name, result) {
    container.innerHTML = ""; 
    const p = document.createElement('p');
    p.classList.add(name); 
    p.textContent = result;
    container.appendChild(p);
}

function result() {
    if (answer === 'pierre' && answerOrdi === 'ciseau' ||
        answer === 'ciseau' && answerOrdi === 'feuille' ||
        answer === 'feuille' && answerOrdi === 'pierre') {
        createElement('win', `Vous avez gagné ! (Ordi a choisi ${answerOrdi})`);
        count++
    } else if (answer === answerOrdi) {
        createElement('draw', `Match nul. (Ordi aussi a choisi ${answerOrdi})`);
    } else {
        createElement('lose', `Vous avez perdu. (Ordi a choisi ${answerOrdi})`);
        countOrdi++
    }
}


pierre.addEventListener("click", () => {
    answer = 'pierre';
    answerOrdi = getAnswerOrdi();
    result();
    score.textContent = count;
    scoreOrdi.textContent = countOrdi;
});

feuille.addEventListener("click", () => {
    answer = 'feuille';
    answerOrdi = getAnswerOrdi();
    result();
    score.textContent = count;
    scoreOrdi.textContent = countOrdi;
});

ciseau.addEventListener("click", () => {
    answer = 'ciseau';
    answerOrdi = getAnswerOrdi();
    result();
    score.textContent = count;
    scoreOrdi.textContent = countOrdi;
});


