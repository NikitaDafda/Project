let gameSeq=[];
let userSeq=[];

let btns=["yellow",'green','purple','red']

let started=false;
let level=0;

let h2=document.querySelector('h2')

document.addEventListener("keypress",function(){
    if(started==false){
        console.log('game is started');
        started=true;

        levelUP()
    }
})

function gameFlash(btn){
btn.classList.add('flash');
setTimeout(function(){
    btn.classList.remove('flash');},250
)
}

function userFlash(btn){
btn.classList.add('userFlash');
setTimeout(function(){
    btn.classList.remove('userFlash');},250
)
}

function levelUP(){
    userSeq=[];
    level++;
    h2.innerText=`level is ${level}`;

    let randInx= Math.floor(Math.random()*btns.length);
    let randcolor= btns[randInx];
    let randbtn=document.querySelector(`.${randcolor}`);

    gameSeq.push(randcolor)
    console.log(gameSeq)
    gameFlash(randbtn)
}

function checkAns(inx){
//consol.log("currLevel:", level)

if(userSeq[inx]===gameSeq[inx]){
 if(userSeq.length==gameSeq.length){
    setTimeout(levelUP,1000);
 }
}
else{

    h2.innerHTML=`game over! your score was <b>${level}</b> <br> start again`;
    document.querySelector('body').style.backgroundColor="red";
 setTimeout(function(){
    document.querySelector('body').style.backgroundColor="white";
 },1000)
}
}

function btnpress(){
    let btn=this;
    console.log(btn)
    userFlash(btn)

   let userColor=btn.getAttribute('id');
    userSeq.push(userColor);

    checkAns(userSeq.length-1)

}

let allbtns=document.querySelectorAll('.btn');
for (btn of allbtns){
    btn.addEventListener('click',btnpress);
}

function reset() {
    userSeq=[]
    gameSeq=[]
    level=0
    started=false;
}