/*
    JS for etch-a-sketch
*/
const container = document.querySelector("#container");
const flexBox = document.createElement("div");
const btn = document.createElement("button");

btn.id = "btn";
flexBox.id = "flex";
btn.textContent = "Etch-a-Sketch Sqaures to add";
container.appendChild(btn);
container.appendChild(flexBox);
btn.addEventListener("click", ()=>{
    console.log("the button was pressed")
    const userInput = parseInt(prompt("How many squares would you like put in the Etch-a-Sketch?"));
    if(userInput > 100 || isNaN(userInput) || userInput == undefined){
        userInput = 16;
    }
    console.log("and now it should execute the div function to refresh with the given number if the input is undefined");
    console.log("the userInput is " + userInput);
    let number = userInput;
    console.log("number is " + number + ` and thus dividing 960 by it is ${960/number}`);
    const doubleNumber = number * number;
    // clear the flexbox of previous elements:
    flexBox.innerHTML = "";
    for(let i = 1; i <= doubleNumber; i++){
        const divVar = document.createElement("div");
        divVar.className = "gridBox";
        divVar.style.width = `${960/number}px`;
        divVar.style.height = `${960/number}px`;
        flexBox.appendChild(divVar);
    }
// How to change color of the divs:
    // get the div elements created
    let divs = document.getElementsByClassName("gridBox");
    // form an array of each of these, and then add an event listener for the mouseover
    Array.from(divs).forEach((div)=>{div.addEventListener("mouseover", function(){
         this.style.backgroundColor = "aliceblue";
    })});
});
