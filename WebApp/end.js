const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');


const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;
finalScore.innerText = mostRecentScore;
const grade = document.getElementById('grade');

function grade1(){
    total=mostRecentScore;
    if (total < 60){
        grade.innerHTML='E';    
    } 
    else if (total < 70 && total>=60) {
        grade.innerHTML='D'; 
    } 
    else if (total < 80 && total>=70) {
        grade.innerHTML='C';  
    } else if (total < 90 && total>=80) {
        grade.innerHTML='B';  
    } else if (total < 100 && total>=90) {
        grade.innerHTML='A'; 
    }
}
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');
};
