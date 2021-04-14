let screen = "";
let screenNum;

let screentotal;
//let history = [{number:0,operator:0}];
let history = [];
let equalsTotal;
let p = 0
let stringExpression = "";

//screen functions
let updateScreen = () => {document.getElementById('screen').innerHTML = screen;}
let clr = () => {screen = ""; screenNum = Number(screen); updateScreen()};
let clrHistory = () => {history.length = 0; equalsTotal = undefined; p=0};
let updateScreenNums = (a) => {screen = screen + a; screenNum = Number(screen)};

document.getElementById('opEquals').addEventListener('click', () => {document.getElementById('screen').innerHTML = screenNum;})

//clear the screen function
document.getElementById('clrBtn').addEventListener('click', () => {clr(); clrHistory();});
document.addEventListener('keydown', (e) => {
    if(e.code === "Escape"){
        clr(); clrHistory();
    }
});

//Div Click Listeners
document.getElementById('num7').addEventListener('click', () => {updateScreenNums("7"); updateScreen()});
document.getElementById('num8').addEventListener('click', () => {updateScreenNums("8"); updateScreen()});
document.getElementById('num9').addEventListener('click', () => {updateScreenNums("9"); updateScreen()});
document.getElementById('num4').addEventListener('click', () => {updateScreenNums("4"); updateScreen()});
document.getElementById('num5').addEventListener('click', () => {updateScreenNums("5"); updateScreen()});
document.getElementById('num6').addEventListener('click', () => {updateScreenNums("6"); updateScreen()});
document.getElementById('num1').addEventListener('click', () => {updateScreenNums("1"); updateScreen()});
document.getElementById('num2').addEventListener('click', () => {updateScreenNums("2"); updateScreen()});
document.getElementById('num3').addEventListener('click', () => {updateScreenNums("3"); updateScreen()});
document.getElementById('num0').addEventListener('click', () => {updateScreenNums("0"); updateScreen()});

//key press Listeners
document.addEventListener('keypress', (e) =>{
    for(i = 0; i <= 9;){
        if(e.code === "Numpad"+i || e.code === "Digit"+i){
            updateScreenNums(i); updateScreen();
            break
               
        }else if(e.code === "NumpadAdd"){
            operate("+"); updateScreen();
            break

        }else if(e.code === "NumpadEnter"){
            equals("="); updateScreen();
            break
        }
        ++i;
    }
});

//Operator Functions
document.getElementById('opPlus').addEventListener('click', () => {operate("+"); updateScreen()});
document.getElementById('opMinus').addEventListener('click', () => {operate("-"); updateScreen()});
document.getElementById('opTimes').addEventListener('click', () => {operate("*"); updateScreen()});
document.getElementById('opEquals').addEventListener('click', () => {equals(); updateScreen()});


function operate(a){
    screenNum = Number(screen)
    history.push({number:screenNum, operator: a});

    /*if(a === "+"){
        history[p].operator = a;
    }
*/
    clr();
    ++p;
}
//let stringExpression = "";
function equals(){
    screenNum = Number(screen);
    history.push({number:screenNum, operator: ''});

    stringExpression = "";

    for(y = 0; y < history.length;){
        console.log("the for loop in equals " + y)
        stringExpression = stringExpression + history[y].number + history[y].operator;
        ++y;
    }
    
    equalsTotal = eval(stringExpression);
    screen = equalsTotal;
}


/*function equals(a){

    screenNum = Number(screen);
    history.push({number:screenNum, operator: a});

    let g = history.length -1;

    let j = 0;

    //let num1 = history[j].number;

    for (j = 0; j < history.length;){

        let num1 = history[j].number;

        if(equalsTotal === undefined){
            equalsTotal = num1;
        }else{
            if (history[j].operator === "+"){
                equalsTotal = equalsTotal + num1;

            }else if(history[j].operator === "-"){
                equalsTotal = equalsTotal - num1;
    
            }else if(history[j].operator === "="){
                equalsTotal = equalsTotal;
            }
        }


        /*if (history[j].operator === "+"){
            if(equalsTotal === undefined){
                equalsTotal = num1;
            }else{
                equalsTotal = equalsTotal + num1;
            }
        }else if(history[j].operator === "-"){
            equalsTotal = equalsTotal - num1;

        }else if(history[j].operator === "="){
            equalsTotal = equalsTotal + num1;
        }
        ++j
    }
    console.log(equalsTotal);
    screen = equalsTotal;
}*/
/*
//add 2 numbers together
let add = (a, b) => {screenTotal = a + b;};

//subtract 2 numbers
let sub = (a, b) => {screenTotal = a - b;};

//multiply 2 numbers
let multiply = (a, b) => {screenTotal = a * b;};

//subtract 2 numbers
let divide = (a, b) => {screenTotal = a / b;};


function calculate(a, callback){
    
}
*/
//for detecting keys pressed
/*document.addEventListener('keydown', (e) =>{
    keyp = ` ${e.key}`;
    console.log(keyp);
})*/



