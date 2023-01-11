// we are going to declare the starting point
const defaultValue = 0;
let currentValue = defaultValue;

let resultDescription = ``;


// function to get input from input field

const getUserNumberInput = () =>{
    return parseInt(inputNumber.value)
}

// function to generates and writes calculation log

const createAndWriteOutput = (operator, resultBeforeCalc, calcNumber) =>{
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentValue, calcDescription); // from vendor file.
}

// function to add two valuesd
const add = () =>{
    const enteredNumber = getUserNumberInput();
    currentValue += parseInt(enteredNumber);
    inputNumber.value = '';
    createAndWriteOutput('+',currentValue, enteredNumber)
}

// add event listerner to add button

addBtn.addEventListener('click', add);

const minus = () =>{
    const enteredNumber = getUserNumberInput();
    currentValue -=  parseInt(enteredNumber);
    inputNumber.value = '';
    createAndWriteOutput('-', currentValue, enteredNumber)
}

// add eventListerner to minus button

minusBtn.addEventListener('click', minus);

// multiply function
const multiply = () =>{
    const enteredNumber = getUserNumberInput();
    currentValue *= parseInt(enteredNumber);
    inputNumber.value = '';
    createAndWriteOutput('*', currentValue, enteredNumber)
}

// add eventlisterner to multiply button

multiplyBtn.addEventListener('click', multiply);

// adding the devide function to devide two numbers

const devide = () =>{
    const enteredNumber = getUserNumberInput();
    currentValue /= parseInt(enteredNumber);
    inputNumber.value = '';
    createAndWriteOutput('/',currentValue,enteredNumber)
}

// adding the eventListerner to the devide button.

divideBtn.addEventListener('click', devide);