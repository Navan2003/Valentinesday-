const envelopeDiv = document.getElementById('envelope-container');
const letterDiv = document.getElementById('letter-container');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const catImg = document.getElementById('cat-img');
const questionText = document.getElementById('question');
const finalText = document.getElementById('final-text');

// 1. Open envelope
envelopeDiv.addEventListener('click', () => {
    envelopeDiv.style.display = 'none';
    letterDiv.style.display = 'flex';
});

// 2. Growing Yes button logic
let currentScale = 1;
noBtn.addEventListener('click', () => {
    currentScale += 0.5;
    yesBtn.style.transform = `scale(${currentScale})`;
});

// 3. Yes button click logic
yesBtn.addEventListener('click', () => {
    questionText.innerText = "LETS GOOOOOOOOOOOO! ❤️";
    catImg.src = "cat_dance.gif";
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    finalText.style.display = 'block';
});