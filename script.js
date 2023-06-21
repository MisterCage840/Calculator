const buttons = document.querySelector(".buttons");
const outputScreen = document.querySelector(".outputScreen");
const buttonrows = document.querySelectorAll(".buttonrow");
const operandBtns = document.querySelectorAll(".operandBtns");


const values = [7,8,9,4,5,6,1,2,3,".",0,"00"];
const opValues = ["/","AC","x","C","-","%","+","="];

//NumKeys
let current=0;
buttonrows.forEach(row => {
    for(let i=0; i<3;i++){
        let btn = document.createElement("button");
        btn.classList.add("btn");
        btn.textContent = values[current];
        row.appendChild(btn);
        current++;
    }
});

//operandKeys
let currentOperand = 0;
operandBtns.forEach(row => {
    for(let i=0; i<2;i++){
        let btn = document.createElement("button");
        btn.classList.add("btnop");
        btn.textContent = opValues[currentOperand];
        row.appendChild(btn);
        currentOperand++;
    }
});

//change background color of buttons
const keyBtns = document.querySelectorAll(".btn");
keyBtns.forEach(btn => {
    btn.addEventListener("mouseover", ()=>{
        btn.style.backgroundColor = "red";
    })
    btn.addEventListener("mouseout", () =>{
        btn.style.backgroundColor = "white";
    })
});
const opBtns = document.querySelectorAll(".btnop");
opBtns.forEach(btn => {
    btn.addEventListener("mouseover", ()=>{
        btn.style.backgroundColor = "green";
    })
    btn.addEventListener("mouseout", () =>{
        btn.style.backgroundColor = "coral";
    })
});

//add Key to output screen
keyBtns.forEach(btn => {
    btn.addEventListener("click", ()=>{
        outputScreen.textContent += btn.textContent;
    })
})