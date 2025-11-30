let hours=0;
let minutes=0;
let secoonds=0;

let timer=null;
let isRunning = false;

const timerDisply=document.querySelector(".time");
const startBtn=document.querySelector(".start");
const stopBtn=document.querySelector(".stop");
const resetBtn=document.querySelector(".reset");

function startTimer(){
    if(!isRunning){
        isRunning=true;
        timer=setInterval(() =>{
            secoonds++;
            if(secoonds === 60){
                secoonds=0;
                minutes++;
            }else if (minutes === 60){
                minutes=0;
                hours++;
            }
            updateTimer();

        },1000);
    }
}
function updateTimer(){
    let h=hours < 10 ? "0" + hours : hours;
    let m=minutes < 10 ? "0"+ minutes : minutes;
    let s=secoonds < 10 ? "0" + secoonds : secoonds;
    timerDisply.textContent = `${h}:${m}:${s}`;
}

function stopTimer(){
    isRunning=false;
    clearInterval(timer);
}

function resetTimer(){
    hours=0;
    minutes=0;
    secoonds=0;
    updateTimer();
    stopTimer();
}
updateTimer();