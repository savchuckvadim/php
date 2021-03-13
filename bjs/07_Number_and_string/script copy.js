let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');
const inputWindowHistory = document.getElementById('inputWindow-history');


document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = 0;
    inputWindowHistory.value = "";
})

document.getElementById('btn_plus').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sum';
    if(inputWindowHistory.value == ""){
    inputWindowHistory.value = `${lastOperand} +`;
    }else{
        inputWindowHistory.value = `${inputWindowHistory.value} ${lastOperand} +`;
    }
    inputWindow.value = '';

})
document.getElementById('btn_minus').addEventListener('click', function () {
    if (inputWindow.value == 0 || inputWindow.value == ""){ inputWindow.value = "-"}
    else {
    lastOperand = parseInt(inputWindow.value);
    operation = 'minus';
    if(inputWindowHistory.value == ""){
        inputWindowHistory.value = `${lastOperand} -`;
        }else{
            inputWindowHistory.value = `${inputWindowHistory.value} ${lastOperand} -`;
        }
    inputWindow.value = '';
    }

})
document.getElementById('btn_multiplication').addEventListener('click', function () {
    
    lastOperand = parseInt(inputWindow.value);
    operation = 'multiplication';
    if(inputWindowHistory.value == ""){
        inputWindowHistory.value = `${lastOperand} *`;
        }else{
            inputWindowHistory.value = `${inputWindowHistory.value} ${lastOperand} *`;
        }
    inputWindow.value = '';
    

})

document.getElementById('btn_division').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'division';
    if(inputWindowHistory.value == ""){
        inputWindowHistory.value = `${lastOperand} /`;
        }else{
            inputWindowHistory.value = `${inputWindowHistory.value} ${lastOperand} /`;
        }
    inputWindow.value = '';

})

document.getElementById('btn_squrt').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    const result = Math.sqrt(Math.abs(lastOperand))
    inputWindowHistory.value = `√ ${lastOperand} `
    inputWindow.value = result;
    lastOperand = 0;

})

document.getElementById('btn_equal').addEventListener('click', function () {
   
   if (operation == 'sum'){
       const result = lastOperand + parseInt(inputWindow.value); 
       if(inputWindowHistory.value == ""){
        inputWindowHistory.value = `${inputWindow.value} `;
        }else{
            inputWindowHistory.value = `${inputWindowHistory.value} ${inputWindow.value} `;
        }
    lastOperand = 0;
    operation = null;
    inputWindow.value = result;
   }
   if (operation == 'minus'){
    const result = lastOperand - parseInt(inputWindow.value); 
    if(inputWindowHistory.value == ""){
        inputWindowHistory.value = `${inputWindow.value} `;
        }else{
            inputWindowHistory.value = `${inputWindowHistory.value} ${inputWindow.value} `;
        }
    

 lastOperand = 0;
 operation = null;
 inputWindow.value = result;
}
if (operation == 'multiplication'){
    const result = lastOperand * parseInt(inputWindow.value); 
    if(inputWindowHistory.value == ""){
        inputWindowHistory.value = `${inputWindow.value} `;
        }else{
            inputWindowHistory.value = `${inputWindowHistory.value} ${inputWindow.value} `;
        }

 lastOperand = 0;
 operation = null;
 inputWindow.value = result;
 
}

if (operation == 'division'){
    const result = lastOperand / parseInt(inputWindow.value); 
    if(inputWindowHistory.value == ""){
        inputWindowHistory.value = `${inputWindow.value} `;
        }else{
            inputWindowHistory.value = `${inputWindowHistory.value} ${inputWindow.value} `;
        }

 lastOperand = 0;
 operation = null;
 inputWindow.value = result;
 
}

})

document.getElementById('btn_1').addEventListener('click', function () {
    if(inputWindow.value == 0) inputWindow.value = 1;
    else inputWindow.value += 1;
    
})

document.getElementById('btn_2').addEventListener('click', function () {
    if(inputWindow.value == 0) inputWindow.value = 2;
    else inputWindow.value += 2;
    
})

document.getElementById('btn_3').addEventListener('click', function () {
    if(inputWindow.value == 0) inputWindow.value = 3;
    else inputWindow.value += 3;
})

document.getElementById('btn_4').addEventListener('click', function () {
    if(inputWindow.value == 0) inputWindow.value = 4;
    else inputWindow.value += 4;
})

document.getElementById('btn_5').addEventListener('click', function () {
    if(inputWindow.value == 0) inputWindow.value = 5;
    else inputWindow.value += 5;
})

document.getElementById('btn_6').addEventListener('click', function () {
    if(inputWindow.value == 0) inputWindow.value = 6;
    else inputWindow.value += 6;
})

document.getElementById('btn_7').addEventListener('click', function () {
    if(inputWindow.value == 0) inputWindow.value = 7;
    else inputWindow.value += 7;
})

document.getElementById('btn_8').addEventListener('click', function () {
    if(inputWindow.value == 0) inputWindow.value = 8;
    else inputWindow.value += 8;
})

document.getElementById('btn_9').addEventListener('click', function () {
    if(inputWindow.value == 0) inputWindow.value = 9;
    else inputWindow.value += 9;
})

document.getElementById('btn_0').addEventListener('click', function () {
    if(inputWindow.value == 0) inputWindow.value = 0;
    else inputWindow.value += 0;
})

