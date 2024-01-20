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
function createDiv(){
    const number = 16*16;
    for(let i = 1; i <= number; i++){
        const divVar = document.createElement("div");
        divVar.className = "gridBox";
        divVar.id = i;
        flexBox.appendChild(divVar);
    }
}
window.onload = createDiv;