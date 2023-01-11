// we are going to declare the starting point
const defaultValue = 0;
let currentValue = defaultValue;
let resultDescription = ``;

// now we are going to create the add function to add to values the current result and the value user entered.

const add = () =>{
    resultDescription = `the current value ${currentValue} + the value user entered ${inputNumber.value.trim}`;
    currentValue = currentValue + parseInt(inputNumber.value.trim());
}