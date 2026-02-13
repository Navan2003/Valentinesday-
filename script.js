const envelopeDiv = document.getElementById('envelope-container');
const letterDiv = document.getElementById('letter-container');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const catImg = document.getElementById('cat-img');
const questionText = document.getElementById('question');
const finalText = document.getElementById('final-text');

// 1. Open envelope logic
envelopeDiv.addEventListener('click', () => {
    envelopeDiv.style.display = 'none';
    letterDiv.style.display = 'flex';
});

// 2. Make Yes button grow when No is clicked
let currentScale = 1;
noBtn.addEventListener('click', () => {
    currentScale += 0.5; // Increases size by 50% each click
    yesBtn.style.transform = `scale(${currentScale})`;
});

// 3. Final Success logic
yesBtn.addEventListener('click', () => {
    questionText.innerText = "Yippie! ❤️";
    catImg.src = "cat_dance.gif"; // Switches to your dancing cat
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    finalText.style.display = 'block';
});