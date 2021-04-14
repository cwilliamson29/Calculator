let screen = "";
let screenCalcNum = ""; 

let screentotal;
//let history = [{number:0,operator:0}];
let equalsTotal;
let stringExpression = "";
let num1 = 0;
let num2, total;
var operator;
let num2Total = 0;

//screen functions
let updateScreen = () => {document.getElementById('screen').innerHTML = screen;}

let clear = () => {
    screen = ""; 
    screenNum = Number(screen);
    num1 = undefined;
    num2 = undefined;
    total = undefined;
    updateScreen()
};
let updateScreenNums = (b) => {
    //console.log("getting into updateScreenNums now");

    //num1 = 0;

    screen = screen + b;
    screenCalcNum = screenCalcNum + b;
    //num1 = Number(screenCalcNum);
    
    //console.log(screenCalcNum + " getting into updateScreenNums num1 now");
    document.getElementById('screen').innerHTML = screen;
};

let calculate = (a) => {
    //console.log("getting into calculate now num1 " + num1);

    num1 = Number(screenCalcNum)

    //console.log("getting into calculate AGAIN now num1 " + num1);


    //screenCalcNum = "";
    if(a === "="){
        
    }else{
        screen = screen + a;
        document.getElementById('screen').innerHTML = screen;
    }
    

    //console.log(operator)
    
    if(operator === undefined){
        if(a === "+"){
            //num2Total = num2
            num2 = num1;
        	operator = add;
            screenCalcNum = "";
            num1 = 0;
            //console.log("getting into calculate now IF +");
        }else if(a === "-"){
            num2 = num1;
           	operator = subtract;
            screenCalcNum = "";
            num1 = 0;
            //console.log("getting into calculate now IF -");
        }else if(a === "/"){
            num2 = num1;
        	operator = divide;
            screenCalcNum = "";
            num1 = 0;
            console.log("getting into calculate now IF /");
        }else if(a === "*"){
            num2 = num1;
        	operator = multiply;
            screenCalcNum = "";
            num1 = 0;
            console.log("getting into calculate now IF *");
        }
    }else if(a === "+"){
        //num2Total = num2;
        //num2 = num1;
        operator(num2, num1);

        screenCalcNum = "";

        //console.log("getting into 2nd calculate now IF +++++++++++++");
            
        operator = add;

    }else if(a === "-"){
        operator(num2, num1);

        screenCalcNum = "";

        //console.log("getting into 2nd calculate now IF +++++++++++++");

        operator = subtract;
    }else if(a === "/"){
        operator = divide;
    }else if(a === "*"){
        operator = multiply;
    }else if(a === "="){
        operator(num2, num1);

        screenCalcNum = "";


        screen = num2Total;
        document.getElementById('screen').innerHTML = screen;
        console.log(num2Total)
        //console.log("getting into 2nd calculate now IF +++++++++++++");
        //equals();
    }
};

function equals(){
  screen = num2Total;
  document.getElementById('screen').innerHTML = screen;
}
//EQUALS LISTENER
//document.getElementById('opEquals').addEventListener('click', () => {document.getElementById('screen').innerHTML = calculate("=");})

//clear the screen function
document.getElementById('clrBtn').addEventListener('click', () => {clear()});

document.addEventListener('keydown', (e) => {
    if(e.code === "Escape"){
        clear();
    }
});

//Div Click Listeners
document.getElementById('num7').addEventListener('click', () => {updateScreenNums(7)});
document.getElementById('num8').addEventListener('click', () => {updateScreenNums(8)});
document.getElementById('num9').addEventListener('click', () => {updateScreenNums(9)});
document.getElementById('num4').addEventListener('click', () => {updateScreenNums(4)});
document.getElementById('num5').addEventListener('click', () => {updateScreenNums(5)});
document.getElementById('num6').addEventListener('click', () => {updateScreenNums(6)});
document.getElementById('num1').addEventListener('click', () => {updateScreenNums(1)});
document.getElementById('num2').addEventListener('click', () => {updateScreenNums(2)});
document.getElementById('num3').addEventListener('click', () => {updateScreenNums(3)});
document.getElementById('num0').addEventListener('click', () => {updateScreenNums(0)});

//key press Listeners
document.addEventListener('keypress', (e) =>{
    for(i = 0; i <= 9;){
        if(e.code === "Numpad"+i || e.code === "Digit"+i){
            updateScreenNums(i);
            break
               
        }else if(e.code === "NumpadAdd"){
            updateScreenNums("+")
            break

        }else if(e.code === "NumpadSubtract"){
            updateScreenNums("-")
            break

        }else if(e.code === "NumpadMultiply"){
            updateScreenNums("*")
            break

        }else if(e.code === "NumpadDivide"){
            updateScreenNums("/")
            break

        }else if(e.code === "NumpadEnter"){
            equals();;
            break
        }
        ++i;
    }
});

//Operator Functions
document.getElementById('opPlus').addEventListener('click', () => {calculate("+")});
document.getElementById('opMinus').addEventListener('click', () => {calculate("-")});
document.getElementById('opTimes').addEventListener('click', () => {calculate("*")});
document.getElementById('opDivide').addEventListener('click', () => {calculate("/")});
document.getElementById('opEquals').addEventListener('click', () => {calculate("=")});

let add = (a,b) => {
    num2Total = a + b; 
    num2 = num2Total; 
    console.log(num1 + " is num1 calc " + a + " is num2 " + b + " is num1 ")};

let subtract = (a,b) => {
    num2total = a - b};
    num2 = num2Total;
let divide = (a,b) => {num1 = a / b};
let multiply = (a,b) => {num1 = a * b};