// we are going to declare the starting point
const defaultValue = 0;
let currentValue = defaultValue;
let resultDescription = ``;
let logEntries = [];

// function to get input from input field

const getUserNumberInput = () => {
  return parseInt(inputNumber.value);
};

// function to generates and writes calculation log

const createAndWriteOutput = (operator, resultBeforeCalc, calcNumber) => {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentValue, calcDescription); // from vendor file.
};

// let create write to log function

const writeToLog =
  (operationaIdentifier, prevResult, operationNumber, newResult) =>{
    const logEntry = {
        sign: operationaIdentifier,
        prevNumber: prevResult,
        fromUser: operationNumber,
        result: newResult,
      };
      logEntries.push(logEntry);
      console.log(logEntries);
  };

// function to add two valuesd
const add = () => {
  const enteredNumber = getUserNumberInput();
  initialValue = currentValue;
  currentValue += parseInt(enteredNumber);
  inputNumber.value = "";
  createAndWriteOutput("+", currentValue, enteredNumber);
  writeToLog('Addition',initialValue,enteredNumber,currentValue)
};

// add event listerner to add button

addBtn.addEventListener("click", add);

const minus = () => {
  const enteredNumber = getUserNumberInput();
  initialValue = currentValue;
  currentValue -= parseInt(enteredNumber);
  inputNumber.value = "";
  createAndWriteOutput("-", currentValue, enteredNumber);
  writeToLog('SUBSTRACTION', initialValue, enteredNumber, currentValue)
};

// add eventListerner to minus button

minusBtn.addEventListener("click", minus);

// multiply function
const multiply = () => {
  const enteredNumber = getUserNumberInput();
  initialValue = currentValue;
  currentValue *= parseInt(enteredNumber);
  inputNumber.value = "";
  createAndWriteOutput("*", currentValue, enteredNumber);
  writeToLog('Multiply',initialValue,enteredNumber,currentValue)
};

// add eventlisterner to multiply button

multiplyBtn.addEventListener("click", multiply);

// adding the devide function to devide two numbers

const devide = () => {
  const enteredNumber = getUserNumberInput();
  initialValue = currentValue;
  currentValue /= parseInt(enteredNumber);
  inputNumber.value = "";
  createAndWriteOutput("/", currentValue, enteredNumber);
  writeToLog('DIVIDE',initialValue,enteredNumber,currentValue)
};

// adding the eventListerner to the devide button.

divideBtn.addEventListener("click", devide);
