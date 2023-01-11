// we are going to declare the starting point
const defaultValue = 0;
let currentValue = defaultValue;

let resultDescription = ``;

// now we are going to create the add function to add to values the current result and the value user entered.

const add = () =>{
    const enteredNumber = inputNumber.value;
    resultDescription = `the current value ${currentValue} + the value user entered ${enteredNumber}`;
    currentValue = currentValue + parseInt(enteredNumber);
    inputNumber.value = '';
    outputResult(currentValue, resultDescription);
}

// we are going to add the event listerner to the add button for it to take the
// add function to it once clicked.

addBtn.addEventListener('click', add);

const minus = () =>{
    const enteredNumber = inputNumber.value;
    resultDescription = `${currentValue} - ${enteredNumber}`;
    currentValue = currentValue - parseInt(enteredNumber);
    inputNumber.value = '';
    outputResult(currentValue, resultDescription);
}

// adding the minus function to the eventlisterner of minus button

minusBtn.addEventListener('click', minus);

// multiply function
const multiply = () =>{
    const enteredNumber = inputNumber.value;
    resultDescription = `${currentValue} * ${enteredNumber}`;
    currentValue = currentValue * parseInt(enteredNumber);
    inputNumber.value = '';
    outputResult(currentValue, resultDescription);
}

// adding the multiply function to the eventlisterner of multiply button

multiplyBtn.addEventListener('click', multiply);

// adding the devide function to devide two numbers

const devide = () =>{
    const enteredNumber = inputNumber.value;
    resultDescription = `${currentValue} / ${enteredNumber}`;
    currentValue = currentValue / parseInt(enteredNumber);
    inputNumber.value = '';
    outputResult(currentValue, resultDescription);
}

// adding the devide function to the eventlisterner of devide button

divideBtn.addEventListener('click', devide);