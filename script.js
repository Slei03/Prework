// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [1, 1, 1, 1, 1];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var chancesLeft = 3;
var timerCountdown;

function startGame(){
  console.log("Game started!");
  //initialize game variables
  progress = 0;
  chancesLeft = 3;
  clueHoldTime = 1000;
  gamePlaying = true;
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  // show the number of chances player has
  document.getElementById("chancesText").classList.remove("hidden");
  document.getElementById("chances").textContent = chancesLeft-1;

  document.getElementById("timerText").classList.remove("hidden");

  generatePattern();
  playClueSequence();
}

function stopGame(){
  gamePlaying = false; 
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  // hide the number of chances player has and timer
  document.getElementById("chancesText").classList.add("hidden");
  document.getElementById("timerText").classList.add("hidden");

  clearInterval(timerCountdown);
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  console.log(clueHoldTime);
  remainingSeconds = 15;
  document.getElementById("timer").textContent = remainingSeconds;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  setTimeout(timing, delay);
  clueHoldTime -= 60; //decrement hold time for next round
}

function timing(){
  timerCountdown = setInterval(function(){
    remainingSeconds--;
    document.getElementById("timer").textContent = remainingSeconds;
    console.log(remainingSeconds);
    if(remainingSeconds == 0){
      loseGame();
      clearInterval(timerCountdown);
    }
  }, 1000);
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
    
  if(pattern[guessCounter] != btn){
    chancesLeft--;
    // update the text to show number of chances left
    document.getElementById("chances").textContent = chancesLeft-1;
    if(chancesLeft == 0){
      loseGame();
    }
  }
  else{
    if(progress == guessCounter){
      if(progress < pattern.length - 1){
        progress++;
        clearInterval(timerCountdown);
        playClueSequence();
      }
      else{
        winGame();
      }
    }
    else{
      guessCounter++;
    }
  }
}

//Secret Pattern Randomizer
function generatePattern(){
  for(let i=0; i<pattern.length; ++i){
    //Generate a random whole number between 1 and 6
    let randomVal = Math.floor(Math.random() * (7 - 1) + 1);
    pattern[i] = randomVal;
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 540.4,
  6: 602.4
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  context.resume();
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}

function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
