let div = document.querySelector("div");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("div");

div.addEventListener("click", function(){
    console.log("div was clicked");
})

ul.addEventListener("click", function(){
    console.log("ul was clicked");
})
   for(li of lis){
    li.addEventListener("click",function(event) {
        event.stopPropagation();
        console.log("li was clicked");
    });
   }
 

