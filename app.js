/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/
let mun1= 0;
let num2 = 0;
let operator = 0;
let result = 0;
  
  
/*------------------------ Cached Element References ------------------------*/
const display = document.querySelector('.display');
const buttonsNumber = document.querySelector('.button number');
const buttonsOperator = document.querySelector('.button operator');
const buttonEquals = document.querySelector('.button equals');

/*----------------------------- Event Listeners -----------------------------*/

  buttonsNumber.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.textContent;
      handleNumber(value);
    });
  });
  buttonsOperator.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.textContent;
      handleOperator(value);
    });
  });
  buttonEquals.addEventListener('click', () => {
    calculateResult();
  });  

/*-------------------------------- Functions --------------------------------*/


function handleNumber(num1,num2) {
  
  function handleOperator(value) {
    if (value === 'C') {
    display.textContent="";

    } else (value =='+'){
     return result = num1 + num2;
    

  } else (value == '-'){
    return  result = num1 - num2;
    

    } else (value =='*'){
        return  result = num1 * num2;
      

    } else (value == '/'){
    return result = num1 / num2 ;
 }
      
}};

function handleOperator() {
    
    display.textContent= result;

};
 