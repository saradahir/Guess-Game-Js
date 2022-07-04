let winAudio = new Audio("win.mp3");
let failAudio = new Audio("fail.mp3");
let nearFail = new Audio("nearFail.mp3");
var count = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber)
const checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', function(){
    count++;

const guessNumber = Number(document.querySelector('.guess').value);
 
if(!guessNumber) {
    document.querySelector(".message").textContent = "⛔ No Number!";

} else if (guessNumber != secretNumber)
{
    document.querySelector(".message").textContent = guessNumber> secretNumber? 'Too High' : 'Too Low';

 document.querySelector(".guess").value = "";

 if (count ===4) {

    nearFail.play();
 }

 else if  ( count===5) {
 failAudio.play();
 document.querySelector(".message").innerHTML = " <h4> No attemt Left Try again 😥</h4>"
 checkBtn.disabled = true;
 checkBtn.getElementsByClassName.backgroundColor="rgb(220, 220 ,220, 0.677)";


 }
}




 else if ( count===5  && guessNumber === secretNumber )
 {

    winAudio.play();
    document.querySelector('.message').textContent = 'correct Number';
    document.querySelector('.number').textContent=secretNumber;
    document.querySelector('body').style.backgroundColor= 'green';
    document.querySelector('.number').style.width= "15rem";
    checkBtn.style.backgroundColor="rgb(220, 220 ,220, 0.677)";
    checkBtn.style.cursor = " default";
    checkBtn.disabled=true;

 }
 



 else if ( guessNumber === secretNumber )
 {

    winAudio.play();
    document.querySelector('.message').textContent = 'correct Number';
    document.querySelector('.number').textContent=secretNumber;
    document.querySelector('body').style.backgroundColor= 'green';
    document.querySelector('.number').style.width= "15rem";
    checkBtn.style.backgroundColor="rgb(220, 220 ,220, 0.677)";
    checkBtn.style.cursor = " default";
    checkBtn.disabled=true;

 }
 
 const AgainBtn = document.querySelector('.again');

 AgainBtn.addEventListener('click', function(){ 
     
     document.querySelector('.message').textContent = 'start guessing';
     document.querySelector('.number').textContent="?";
     checkBtn.style.cursor = " Pinter";
     document.querySelector('body').style.backgroundColor= '#211d5';
     checkBtn.disabled=false;
     document.querySelector('.number').style.width= "10rem";
     checkBtn.style.backgroundColor="#211d5";
     document.querySelector('.guess').value="";
 })
})