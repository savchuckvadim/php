let lastOperand = 0;
let operation = null;
let equal = false;
let res = 0;
let a = "";
let b = "";
let c = "";
let sq = "";
let pointOnOff = false;


const point = document.getElementById('point');
const inputWindow = document.getElementById('inputWindow');
const inputWindowHistory = document.getElementById('inputWindow-history');


document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = 0;
    inputWindowHistory.value = "";
    equal = false;
    res = 0;
    pointOnOff = false;
    
    
})
/* в разработке */
/*eval 124 - ощибка*/
point.addEventListener('click', function() {
    console.log('point');
    if(equal == true){
        inputWindow.value = `0.`
        equal = false;
    }else{
    if(pointOnOff == false){
        if(inputWindow.value == 0){
            inputWindow.value = `0.`;
        }
        else inputWindow.value = `${inputWindow.value}.`;
    }
 }
    pointOnOff = true;

       
    
})

   
function squ (){  
    lastOperand = parseFloat(inputWindow.value);  
    sq = "√"; 
    a = lastOperand; 
    
    
    if(inputWindowHistory.value == ""){      /*если история пуста*/   
                                           
       const result = Math.sqrt(Math.abs(lastOperand));   
       
        inputWindowHistory.value = `${sq} ${a}`; 
        inputWindow.value = result;  
        }else{ 
            if (operation == null){       
                                                                              /*если история есть*/   
      
        console.log(operation); 

        inputWindowHistory.value = `${sq} ${inputWindow.value}`;  
        const result = Math.sqrt(Math.abs(a));   
        inputWindow.value =  result; 
   
      }   
           
    else{   
       
           
        

        a = eval(`${inputWindowHistory.value}  ${inputWindow.value}`); 
        
         const result = Math.sqrt(Math.abs(a)); 
          
        inputWindowHistory.value = `${sq} ${a}`;
         
        inputWindow.value =  result;   
    }   
 }
}

function Oper (o, s){    
    
    lastOperand = parseFloat(inputWindow.value);
        operation = o;       

        if(inputWindowHistory.value == ""){                                           /*если история пуста*/            
        a = lastOperand;
        b = s;
        inputWindowHistory.value = `${a} ${b}`;
        }else{                                                                      /*если история есть*/
            if(inputWindow.value == ""){                                           /*если поле ввода пусто*/
                b = s;
                inputWindowHistory.value = `${a} ${b}`;
            }else{                                                                    /*если поле ввода Есть*/
                                                            
                if(equal == true){                                                  /*если знак Равно был нажат*/
                    
                    a = lastOperand
                    b = s;
                    inputWindowHistory.value = `${a} ${b}`;
                    if(sq == "√"){ squ ()}                                     
                    

                }
                else{                                                                /*если знак Равно НЕ был нажат*/
                    b = s;   
                    if(sq == "√"){                                                    /*если Корень НЕ был нажат*/
                        inputWindowHistory.value = `${inputWindow.value} ${b}`
                    }                                                     
                     else{
                    console.log(operation);                                           
                    a = eval(`${inputWindowHistory.value} ${lastOperand}`)
                    
                    inputWindowHistory.value = `${a} ${b}`;
                     }
                    
                    
                    
                }                
            }            
        }      
        inputWindow.value = '';
        equal = false;  
        pointOnOff = false;  
    }



    document.getElementById('btn_plus').addEventListener('click', function(){       
        Oper('sum', '+' );        
    });

    document.getElementById('btn_minus').addEventListener('click', function () {
        Oper('minus', '-' );    
    });
    document.getElementById('btn_multiplication').addEventListener('click', function () {
        Oper('multiplication', '*' );   
    });
    document.getElementById('btn_division').addEventListener('click', function () {
        Oper('division', '/' );   
    });



document.getElementById('btn_squrt').addEventListener('click', function () {
    squ(); 
    

})

document.getElementById('btn_equal').addEventListener('click', function () {
    if (operation == 'sum') {
        res  = eval(`${inputWindowHistory.value} ${inputWindow.value}`); 
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
    res  = eval(`${inputWindowHistory.value} ${inputWindow.value}`); 
    
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
        res  = eval(`${inputWindowHistory.value} ${inputWindow.value}`); 
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
        res  = eval(`${inputWindowHistory.value} ${inputWindow.value}`); 
    
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
    pointOnOff = false;   
})

function btnNumb (a){
   
    if(inputWindow.value == 0 || equal == true) {
        if(pointOnOff == true){

            inputWindow.value += a;
        }
        else inputWindow.value = a;    
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
});

