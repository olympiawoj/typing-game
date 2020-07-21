const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endGameEl = document.getElementById('end-game-container')
const settingsBtn = document.getElementById('settings-btn')
const settings = document.getElementById('settings')
const settingsForm = document.getElementById('settings-forms')
const difficultySelect = document.getElementById('difficulty')

// List of words for game
// List of words for game
const words = [
    'sigh',
    'tense',
    'airplane',
    'ball',
    'pies',
    'juice',
    'warlike',
    'bad',
    'north',
    'dependent',
    'steer',
    'silver',
    'highfalutin',
    'superficial',
    'quince',
    'eight',
    'feeble',
    'admit',
    'drag',
    'loving'
];

// Init word
let randomWord;

// Init score
let score = 0;

// Init time
let time = 10;

// Focus on text on start
text.focus();

// Start counting down - setInterval allow us to run a function, 1000ms = 1sec
const timeInterval = setInterval(updateTime, 1000);

// Generate random word from array
function getRandomWord(){
    return words[Math.floor(Math.random() * words.length)]
}

// Add word to DOM
function addWordToDOM(){
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}

// Update Score
function updateScore(){
    score++;
    scoreEl.innerHTML = score;
}

// Update time
function updateTime(){
    time--;
    timeEl.innerHTML = time + 's'
    if(time === 0){
        clearInterval(timeInterval);
        // end game
        gameOver();
    }
}

// Game over, show end screen
function gameOver(){
    endGameEl.innerHTML = `
        <h1>Time ran out<h1>
        <p>Your final score is ${score}</p>
        <button onclick="location.reload()"/>Reload</button>
    `;
    endGameEl.style.display = 'flex';

}


addWordToDOM()

// Event Listeners
text.addEventListener('input',  e => {
    const insertedText = e.target.value
    if(insertedText === randomWord){
        // change word
        addWordToDOM()
        updateScore()

        // Clear 
        e.target.value = ''
        time += 2;
        updateTime();
    }
})

