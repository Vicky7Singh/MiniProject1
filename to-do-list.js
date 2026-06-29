let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let ul = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = Inp.value;
    ul.appendChild(item);
    inp.value = "";
    
});