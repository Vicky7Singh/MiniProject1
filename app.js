let gameseq = [];
let userseq = [];

let btn =["yellow" ,"red", "purple","green"];
let started = false;
let level = 0; 
 
 let h2 = document .querySelector("h2");
 
document.addEventListener("keypress", function () {
    if(started == false){
    console.log("Game is started");
    started = true; 
    levelup();
    }
});

       function btnFlash(btn){
        btn.classlist.add("flash")
        setTimeout(function(){
            btn.classlist.remove("flash");
        }, 250);

       }  

       function gameFlash(btn){
        btn.classList.add(" flash")
        setTimeout(function(){
            btn.classList.remove("flash");
        }, 250);

       }  

   function levelup() {
        level++; 
        h2.innerText = `level ${level}`; 
        let randIdx =Math.floor (Math.random()*3);
        let randcolor = btns(randIdx);
        let randBtn = document.querySelector(`.${randcolor}`)
        console.log(randIdx);
        console.log(randcolor);
        console.log(randBtn);
         gameFlash(randBtn); 
   } 
    
    function btnPresh() {
        console.log(this);
        let btn = this;
        userFlash(btn);

   
    }

      let allBtn = document.querySelectorAll("btn");
       for(btn of allBtns) {
        btn.addEventListener("click",btnPress);
       }
