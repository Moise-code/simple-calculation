// we are going to declare the starting point
const defaultValue = 0;
let currentValue = defaultValue;

let resultDescription = ``;


// function to get userInput

const getUserNumberInput = () =>{
    return parseInt(inputNumber.value)
}

// function to call the result

const createAndWriteOutput = (operator, resultBeforeCalc, calcNumber) =>{
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentValue, calcDescription);
}

// now we are going to create the add function to add to values the current result and the value user entered.
const add = () =>{
    const enteredNumber = getUserNumberInput();
    currentValue = currentValue + parseInt(enteredNumber);
    inputNumber.value = '';
    createAndWriteOutput('+',currentValue, enteredNumber)
}

// we are going to add the event listerner to the add button for it to take the
// add function to it once clicked.

addBtn.addEventListener('click', add);

const minus = () =>{
    const enteredNumber = getUserNumberInput();
    currentValue = currentValue - parseInt(enteredNumber);
    inputNumber.value = '';
    createAndWriteOutput('-', currentValue, enteredNumber)
}

// adding the minus function to the eventlisterner of minus button

minusBtn.addEventListener('click', minus);

// multiply function
const multiply = () =>{
    const enteredNumber = getUserNumberInput();
    currentValue = currentValue * parseInt(enteredNumber);
    inputNumber.value = '';
    createAndWriteOutput('*', currentValue, enteredNumber)
}

// adding the multiply function to the eventlisterner of multiply button

multiplyBtn.addEventListener('click', multiply);

// adding the devide function to devide two numbers

const devide = () =>{
    const enteredNumber = getUserNumberInput();
    currentValue = currentValue / parseInt(enteredNumber);
    inputNumber.value = '';
    createAndWriteOutput('/',currentValue,enteredNumber)
}

// adding the devide function to the eventlisterner of devide button

divideBtn.addEventListener('click', devide);