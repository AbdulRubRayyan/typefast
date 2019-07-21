window.addEventListener('load', init)

//Global variables
let time=4;
let score=0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector("#user-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time-left");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");


const words = [
    'abnegation', 
    'siblings',
    'pomogrenate',
    'cauliflower',
    'abbrevation',
    'keypress',
    'abrogate', 
    'circumvent',
    'duplicity',
    'sis',
    'javascript',
    'luqmaan',
    'differences',
    'affanhmed',
    'switchboards',
    'engineering',
    'curriculum',
    'ballman',
    'omlette',
    'shaikaziz',
    'shit',
    'notebook',
    'toothpick',
    'abdulmateen',
    'bottleneck',
    'haha',
    'horseshoe',
    'establishment',
    'accredation',
    'dictator',
    'horrendous',
    'symptom',
    'hallway',
    'generate',
    'revolver',
    'bootstrap',
    'similarities',
    'cellphone',
    'rofl',
    'abstruse',
    'keyboard',
    'numberpad',
    'statue',
    'semifinal',
    'affiliated',
    'accretion',
    'salutation',
    'admonish',
    'silence',
    'connection',
    'happiness',
    'security',
    'wow',
    'portugal',
    'director',
    'arshilriaz',
    'morass',
    'adumbrate',
    'dogmatic',
    'egregious',
    'lol',
    'affluent',
    'fallacious',
    'impinge',
    'autofocus',
    'inveterate',
    'aggrandize',
    'ostracism',
    'amenable',
    'definition',
    'seriously',
    'hakuna',
    'lionking',
    'california',
    'everything',,
    'god',
    'basketball',
    'volleyball',
    'steal',
    'depression',
    'maleficent',
    'think',
    'watermelon',
    'technology',
    'retirement',
    'shit',
    'friendship',
    'suffer',
    'punishment',,
    'television',
    'celebrate',
    'affan',
    'elizabeth',
    'important',
    'adventure',
    'rayyan',
    'irregular',
    'adjective',
    'secretary',
    'brother',
    'ambulance',
    'pollution',
    'something',
    'vegetable',
    'sister',
    'influence',
    'package',
    'keyboard',
    'structure',
    'pillar',
    'disaster',
    'provoking',
    'mom',
    'different',
    'religion',
    'why',
    'essential',
    'seventeen',
    'holy',
    'brainless',
    'delicious',
    'sophomore',
    'carry',
    'character',
];



//Initialize
function init(){
    //Load a word from the array
    showWord(words);
    //Start matching the input
    wordInput.addEventListener('input', startMatch);
    //Call countdown every second
    setInterval(countdown, 1000);
    //Check game status
    setInterval(checkStatus, 50);
    
}

//Pick and show random word
function showWord(words){
    const randIndex = Math.floor(Math.random() * words.length);
    
    //Output the word
    currentWord.innerHTML = words[randIndex];
}

//Countdown timer
function countdown(){
    //Assure time is not run out
    if(time>0){
        //Decrement the time
        time--;
    } else if(time === 0){
        isPlaying = false;
    }
    //Display time
    timeDisplay.innerHTML = time;
}

//Check game status
function checkStatus() {
    if(!isPlaying && time===0){
        message.innerHTML = "Game Over. Type the word to restart. ";
        message.classList.add("red");
        message.classList.remove("green");
        score = -1;
        
    }
}



//Start matching
function startMatch(){
    if(matchWords()){
        console.log("Matched");
        isPlaying = true;
        time = 5;
        showWord(words);
        wordInput.value = "";
        score++;

    }
    scoreDisplay.innerHTML = score;
    scoreMinus();
}

//Match content of word to entered
function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = "Correct";
        message.classList.add("green");
        message.classList.remove("red");
        return true;
    }else{
        message.innerHTML = "";
        return false;
    }
}

function scoreMinus(){
    if(score === -1){
        scoreDisplay.innerHTML = 0;
    }
    else{
        scoreDisplay.innerHTML = score;
    }
}

