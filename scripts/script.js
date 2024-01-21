/*
    JS for etch-a-sketch
*/
const container = document.querySelector("#container");
const flexBox = document.createElement("div");

const refreshBtn = document.createElement("button");



refreshBtn.id = "btn";
flexBox.id = "flex";
refreshBtn.textContent = "Refresh Button";
container.appendChild(refreshBtn);
container.appendChild(flexBox);
let userInput;
function createDiv(){
    let number;
    if(userInput !== undefined){
        number = userInput;
    } else {
        number = 16;
    }
    const doubleNumber = number * number;
    for(let i = 1; i <= doubleNumber; i++){
        const divVar = document.createElement("div");
        divVar.className = "gridBox";
        divVar.style.width = `${960/number}px`;
        divVar.style.height = `${960/number}px`;
        flexBox.appendChild(divVar);
    }
}/*
const divToChange = document.querySelector(".changeColor");
divToChange.addEventListener("mouseover", ()=>{
    divToChange.document.style.backgroundColor = "gray";
});
*/
window.onload = createDiv;
