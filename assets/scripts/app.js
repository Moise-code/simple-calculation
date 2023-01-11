// we are going to declare the starting point
const defaultValue = 0;
let currentValue = defaultValue;
let resultDescription = ``;

// now we are going to create the add function to add to values the current result and the value user entered.

const add = () =>{
    resultDescription = `the current value ${currentValue} + the value user entered ${inputNumber.value.trim()}`;
    currentValue = currentValue + parseInt(inputNumber.value.trim());
    inputNumber.value = '';
    outputResult(currentValue, resultDescription);
}

// we are going to add the event listerner to the add button for it to take the
// add function to it once clicked.

addBtn.addEventListener('click', add);

const minus = () =>{
    resultDescription = `${currentValue} - ${inputNumber.value}`;
    currentValue = currentValue - parseInt(inputNumber.value.trim());
    inputNumber.value = '';
    outputResult(currentValue, resultDescription);
}

// adding the minus function to the eventlisterner of minus button

minusBtn.addEventListener('click', minus);