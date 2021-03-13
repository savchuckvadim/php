let lastOperand = 0;
let operation = null;
let equal = false;
let res = 0;
let a = "";
let b = "";
let c = "";

const inputWindow = document.getElementById('inputWindow');
const inputWindowHistory = document.getElementById('inputWindow-history');


document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = 0;
    inputWindowHistory.value = "";
    equal = false;
    res = 0;
    
    
})


function Oper (o, s){
     
    lastOperand = parseInt(inputWindow.value);
        operation = o;
        

        if(inputWindowHistory.value == ""){
            
        a = lastOperand;
        b = s;
        inputWindowHistory.value = `${a} ${b} ${c}`;
        }else{
            if(inputWindow.value == ""){
                b = s;
                inputWindowHistory.value = `${a} ${b} ${c}`;
            }else{
                a = eval(`${inputWindowHistory.value} ${lastOperand}`)
                b = s;
        inputWindowHistory.value = `${a} ${b} ${c}`;
                
            }
            
        }
       /* res =  res  +  parseInt(inputWindow.value); 
        console.log(lastOperand);
        console.log(res);*/
        inputWindow.value = '';
    
    }



    document.getElementById('btn_plus').addEventListener('click', function(){
         
        console.log(operation);
        Oper('sum', '+' );
        res = res + lastOperand;
        
        
    });

    document.getElementById('btn_minus').addEventListener('click', function () {
        Oper('minus', '-' );
        res = lastOperand - res;
        
    });
    document.getElementById('btn_multiplication').addEventListener('click', function () {
        Oper('multiplication', '*' );
        res = res * lastOperand;
        
    });
    document.getElementById('btn_division').addEventListener('click', function () {
        Oper('division', '/' );
       
        res += lastOperand;
        
    });



document.getElementById('btn_squrt').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    const result = Math.sqrt(Math.abs(lastOperand))
    inputWindowHistory.value = `√ ${lastOperand} `
    inputWindow.value = result;
    lastOperand = 0;

})

document.getElementById('btn_equal').addEventListener('click', function () {
    if (operation == 'sum') {
        res =  res  +  parseInt(inputWindow.value); 
        if(inputWindowHistory.value == ""){
            inputWindowHistory.value = `${inputWindow.value} `;
            }else{
                inputWindowHistory.value = `${inputWindowHistory.value} ${inputWindow.value} `;
            }
            lastOperand = 0;
            operation = null;
            inputWindow.value = res;
            equal = true;
    }

    if (operation == 'minus'){
    const result =  res  - parseInt(inputWindow.value); 
    if(inputWindowHistory.value == ""){
        inputWindowHistory.value = `${inputWindow.value} `;
        }else{
            inputWindowHistory.value = `${inputWindowHistory.value} ${inputWindow.value} `;
        }
        lastOperand = 0;
        operation = null;
        inputWindow.value = res;
        equal = true;
    }
    if (operation == 'multiplication'){
    const result =  res  * parseInt(inputWindow.value); 
    if(inputWindowHistory.value == ""){
        inputWindowHistory.value = `${inputWindow.value} `;
        }else{
            inputWindowHistory.value = `${inputWindowHistory.value} ${inputWindow.value} `;
        }
        lastOperand = 0;
        operation = null;
        inputWindow.value = res;
        equal = true;
    }
    if (operation == 'division'){
        console.log(`${res} ${inputWindow.value}` );
    res =  res  / parseInt(inputWindow.value);
    console.log(`${res} ${inputWindow.value}` );
    if(inputWindowHistory.value == ""){
        inputWindowHistory.value = `${inputWindow.value} `;
        }else{
            inputWindowHistory.value = `${inputWindowHistory.value} ${inputWindow.value} `;
        }
        lastOperand = 0;
        operation = null;
        inputWindow.value = res;
        equal = true;
        res = 0;
    }
    
})
function btnNumb (a){
    if(inputWindow.value == 0 || equal == true) {
        inputWindow.value = a;
        
        
        
    }
    else inputWindow.value += a;
    if (equal == true){
        inputWindowHistory.value = "";
        equal = false;
    }
    
}
document.getElementById('btn_1').addEventListener('click', function () {
    btnNumb (1);
    
})

document.getElementById('btn_2').addEventListener('click', function () {
    btnNumb (2);
    
})

document.getElementById('btn_3').addEventListener('click', function () {
    btnNumb (3);
})

document.getElementById('btn_4').addEventListener('click', function () {
    btnNumb (4);
})

document.getElementById('btn_5').addEventListener('click', function () {
    btnNumb (5);
})

document.getElementById('btn_6').addEventListener('click', function () {
    btnNumb (6);
})

document.getElementById('btn_7').addEventListener('click', function () {
    btnNumb (7);
})

document.getElementById('btn_8').addEventListener('click', function () {
    btnNumb (8);
})

document.getElementById('btn_9').addEventListener('click', function () {
    btnNumb (9);
})

document.getElementById('btn_0').addEventListener('click', function () {
    btnNumb (0);
})

