/*
    JS for etch-a-sketch
*/
const container = document.querySelector("#container");
container.style.display = "flex";
container.style.flexWrap = "wrap";
function createDiv(){
    for(let i = 1; i <= 16; i++){
        const divVar = document.createElement("div");
        divVar.style.width = "200px";
        divVar.style.height = "200px";
        divVar.style.backgroundColor = "aliceblue";
        divVar.style.margin = "5px";
        divVar.id = i;
        container.appendChild(divVar);
    }
}
window.onload = createDiv;