let displayScreen = document.getElementById('displayScreen');
let numberButtons = document.getElementsByClassName('numBtn');
let operatorButtons = document.getElementsByClassName('opBtn');
document.getElementById('opEquals').addEventListener('click', () => {equals()});

let screenTotal, inputNumber1, inputNumber2, total;
let operatorInput = [''];
let displayContent = '';
let contentContainer = '';

for(let z = 0; z < numberButtons.length;){
    numberButtons[z].addEventListener('click', (e) => {
        displayContent += e.target.textContent; 
        contentContainer += e.target.textContent;
        displayScreen.textContent = displayContent;
    });
    ++z;
}
for(let x = 0; x < operatorButtons.length;){
    operatorButtons[x].addEventListener('click', (e,) => {
        updateInputNumbers();
        operatorInput[0] = e.target.textContent;
        updateDisplay();
    });
    ++x;
}
function updateInputNumbers(){
    if(inputNumber1 === undefined){
        inputNumber1 = Number(contentContainer);
        contentContainer = "";
    }else if(inputNumber2 === undefined){
        inputNumber2 = Number(contentContainer);
        calculate();
    }
    
}
function calculate(){
    if(operatorInput[0] === "+"){
        add(inputNumber1, inputNumber2);
    }else if(operatorInput[0] === "-"){
        minus(inputNumber1, inputNumber2);
    }else if(operatorInput[0] === "X"){
        multiply(inputNumber1, inputNumber2);
    }else if(operatorInput[0] === "/"){
        if(inputNumber2 === 0){
            clearDisplayScreen();
            alert("I'm sorry, Dave, I'm afraid I can't do that!");
        }else{
            divide(inputNumber1, inputNumber2);
        }
        
    }
}
function equals(){
    updateInputNumbers();
    total = inputNumber1;
    clearDisplayScreen();
    displayScreen.textContent = total;
}
function updateDisplay(){
    let endof = displayContent.length - 1;
    
    if(displayContent[endof] === "+" ||
       displayContent[endof] === "-" ||
       displayContent[endof] === "X" ||
       displayContent[endof] === "/"){

        displayContent = displayContent.slice(0, -1);
        displayContent += operatorInput[0]; 
        displayScreen.textContent = displayContent;
    }else{
        displayContent += operatorInput[0]; 
        displayScreen.textContent = displayContent;
    }
    
}
function clearDisplayScreen(){
    screenTotal = undefined;
    inputNumber1 = undefined;;
    inputNumber2 = undefined;;
    operatorInput = [''];
    displayContent = '';
    contentContainer = '';

    displayScreen.textContent = displayContent;
}
//clear the screen function
document.getElementById('clrBtn').addEventListener('click', () => {clearDisplayScreen()});
function keypressPut(w){
    displayContent += w; 
    contentContainer += w;
    displayScreen.textContent = displayContent;
}
function operatorKeypressPut(w){
        updateInputNumbers();
        operatorInput[0] = w;
        updateDisplay()
}
document.addEventListener('keypress', (e) =>{
    for(w = 0; w <= 9;){
        console.log(e.code)
        if(e.code === "Numpad"+w || e.code === "Digit"+w){
            keypressPut(w);
            break

        }else if(e.code === "NumpadDecimal"){
            keypressPut(".");
            break

        }else if(e.code === "NumpadAdd"){
            operatorKeypressPut("+");
            break

        }else if(e.code === "NumpadSubtract"){
            operatorKeypressPut("-");
            break

        }else if(e.code === "NumpadMultiply"){
            operatorKeypressPut("X");
            break

        }else if(e.code === "NumpadDivide"){
            operatorKeypressPut("/");
            break

        }else if(e.code === "NumpadEnter"){
            equals();
            break
        }
    ++w;
    }
});
document.addEventListener('keydown', (e) => {
    if(e.code === "Escape"){
        clearDisplayScreen();
    }
});

function saveInputNumbers(a){
    if(typeof inputNumber1 === "number"){
        inputNumber1 = Number(displayContent);
        operator[0] = 0
    }

}

let add = (a,b) => {
    screenTotal = a + b;
    inputNumber1 = screenTotal;
    screenTotal = undefined;
    inputNumber2 = undefined;
    contentContainer = '';
};
let minus = (a,b) => {
    screenTotal = a - b;
    inputNumber1 = screenTotal;
    screenTotal = undefined;
    inputNumber2 = undefined;
    contentContainer = '';
};
let multiply = (a,b) => {
    screenTotal = a * b;
    inputNumber1 = screenTotal;
    screenTotal = undefined;
    inputNumber2 = undefined;
    contentContainer = '';
};
let divide = (a,b) => {
    screenTotal = a / b;
    inputNumber1 = screenTotal;
    screenTotal = undefined;
    inputNumber2 = undefined;
    contentContainer = '';
};
