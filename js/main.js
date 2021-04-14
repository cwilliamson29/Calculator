let screen = "";
let screenNum; 

let screentotal;
//let history = [{number:0,operator:0}];
let equalsTotal;
let stringExpression = "";
let num1, num2, total;
var operator;

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

let updateScreenNums = (a) => {
    screen = screen + a;
    
    document.getElementById('screen').innerHTML = screen;
    
    if(a === "+"){
    	operator = add;
    }else if(a === "-"){
    	operator = subtract;
    }else if(a === "/"){
    	operator = divide;
    }else if(a === "*"){
    	operator = multiply;
    }else{
    	if(num1 === undefined){
      	num1 = a;
        console.log(num1 + " first if");
      }else if(num2 === undefined){
      	num2 = a;
        operator(num1, num2)
        console.log(num1 + " second if");
      }else{
      	num2 = a;
        operator(num1, num2)
        console.log(num1 + " third if");
      }
    }
      
};

function equals(){
	total = num1;
  screen = total;
  document.getElementById('screen').innerHTML = screen;
}

document.getElementById('opEquals').addEventListener('click', () => {document.getElementById('screen').innerHTML = screenNum;})

//clear the screen function
document.getElementById('clrBtn').addEventListener('click', () => {
    clear(); 
    clrHistory();
});
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
document.getElementById('opPlus').addEventListener('click', () => {updateScreenNums("+")});
document.getElementById('opMinus').addEventListener('click', () => {updateScreenNums("-")});
document.getElementById('opTimes').addEventListener('click', () => {updateScreenNums("*")});
document.getElementById('opDivide').addEventListener('click', () => {updateScreenNums("/")});
document.getElementById('opEquals').addEventListener('click', () => {equals()});

let add = (a,b) => {num1 = a + b}
let subtract = (a,b) => {num1 = a - b}
let divide = (a,b) => {num1 = a / b}
let multiply = (a,b) => {num1 = a * b}
/*
let updateScreenNums = (a) => {
    screen = screen + a;
    
    document.getElementById('screen').innerHTML = screen;
    
    if(a === "+"){
    	operator = add;
      //num2 = num1;
    }else if(a === "-"){
    	operator = subtract;
    }else if(a === "/"){
    	operator = divide;
    }else if(a === "*"){
    	operator = multiply;
    }else{
    	if(num1 === undefined){
      	num1 = a;
        console.log(num1 + " first if");
      }else if(num2 === undefined){
      	num2 = a;
        operator(num1, num2)
        console.log(num1 + " second if");
      }else{
      	num2 = a;
        operator(num1, num2)
        console.log(num1 + " third if");
      }
    }
      
};

let equals = () => {
	total = num1;
    screen = total;
    document.getElementById('screen').innerHTML = screen;
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



