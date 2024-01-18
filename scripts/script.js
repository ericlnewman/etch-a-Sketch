/*
    JS for etch-a-sketch
*/
const container = document.querySelector("#container");

function createDiv(){
    const number = 16*16;
    for(let i = 1; i <= number; i++){
        const divVar = document.createElement("div");
        divVar.className = "gridBox";
        divVar.id = i;
        container.appendChild(divVar);
    }
}
window.onload = createDiv;