/*-------------------------------- Constants --------------------------------*/
const operations = ['+', '-', '*', '/'];

/*---------------------------- Variables (state) ----------------------------*/

let currentInput = '';  
let result;      
let lastOperation = ''; 
/*------------------------ Cached Element References ------------------------*/
const displayEl = document.querySelector('.display'); 
const buttons = document.querySelectorAll('.button');
console.log(displayEl)

/*-------------------------------- Functions --------------------------------*/
function init() {
    currentInput = '';
    result = '';
    lastOperation = '';
    displayEl.textContent= "0";
}

function handleButtonClick(event) {
    const buttonValue = event.target.getAttribute('data-value');

    if (operations.includes(buttonValue)) {
        if (currentInput !== '') {
            if (result === null) {
                result = parseFloat(currentInput);
            } else {
                result = performCalculation(result, parseFloat(currentInput), lastOperation);
            }
            currentInput = '';
            lastOperation = buttonValue;
        }
    } 

    else if (buttonValue === '=') {
        if (lastOperation && currentInput !== '') {
            result = performCalculation(result, parseFloat(currentInput), lastOperation);
            currentInput = result.toString();
            displayEl.textContent = currentInput;
            lastOperation = '';
        }
    } 
    
    else if (buttonValue === 'C') {
        init();
    } 
    
    else {
        currentInput += buttonValue;
        displayEl.textContent = currentInput;
    }
}

function performCalculation(a, b, operation) {
    if (operation === '+') {
        return a + b;
    } else if (operation === '-') {
        return a - b;
    } else if (operation === '*') {
        return a * b;
    } else if (operation === '/') {
        return a / b;
    } else {
        return b;
    }
}

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach((button) => {
    button.addEventListener('click', handleButtonClick);
});

/*----------------------------- Initialize -----------------------------*/
init();



// /*-------------------------------- Constants --------------------------------*/



// /*-------------------------------- Variables --------------------------------*/
// let mun1= 0;
// let num2 = 0;
// let operator = 0;
// let result = 0;
  
  
// /*------------------------ Cached Element References ------------------------*/
// const display = document.querySelector('.display');
// const buttonsNumber = document.querySelector('.button number');
// const buttonsOperator = document.querySelector('.button operator');
// const buttonEquals = document.querySelector('.button equals');

// /*----------------------------- Event Listeners -----------------------------*/

//   buttonsNumber.forEach(button => {
//     button.addEventListener('click', () => {
//       const value = button.textContent;
//       handleNumber(value);
//     });
//   });
//   buttonsOperator.forEach(button => {
//     button.addEventListener('click', () => {
//       const value = button.textContent;
//       handleOperator(value);
//     });
//   });
//   buttonEquals.addEventListener('click', () => {
//     calculateResult();
//   });  

// /*-------------------------------- Functions --------------------------------*/


// function handleNumber(num1,num2) {
  
//   function handleOperator(value) {
//     if (value === 'C') {
//     display.textContent="";

//     } else (value =='+'){
//      return result = num1 + num2;
    

//   } else (value == '-'){
//     return  result = num1 - num2;
    

//     } else (value =='*'){
//         return  result = num1 * num2;
      

//     } else (value == '/'){
//     return result = num1 / num2 ;
//  }
      
// }};

// function handleOperator() {
    
//     display.textContent= result;

// };
 


