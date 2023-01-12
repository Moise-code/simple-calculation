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
  (operationaIdentifier, prevResult, operationNumber, newResult) => {
    const logEntry = {
      sign: operationaIdentifier,
      prevNumber: prevResult,
      fromUser: operationNumber,
      result: newResult,
    };
    logEntries.push(logEntry);
    console.log(logEntries);
  };

// function to add the if statement into the code.
const calculateResult = (calculationOperator) => {
  const enteredNumber = getUserNumberInput();
  let initialValue = currentValue;
  let mathOperator;

  if (calculationOperator === 'addition') {
    currentValue += parseInt(enteredNumber);
    mathOperator = '+';
    inputNumber.value = "";

  } else if (calculationOperator === 'substract') {
    currentValue -= parseInt(enteredNumber);
    mathOperator = '-'
    inputNumber.value = "";

  } else if (calculationOperator === 'multiply') {
    currentValue -= parseInt(enteredNumber);
    mathOperator = '*'
    inputNumber.value = "";

  } else if (calculationOperator === 'divide') {
    currentValue -= parseInt(enteredNumber);
    mathOperator = '/'
    inputNumber.value = "";
  }

  createAndWriteOutput(mathOperator, currentValue, enteredNumber);
  writeToLog(calculationOperator, initialValue, enteredNumber, currentValue)
}

// function to add two valuesd
const add = () => {
  calculateResult('addition');
};

// add event listerner to add button

addBtn.addEventListener("click", add);

const minus = () => {
  calculateResult('substract')
};

// add eventListerner to minus button

minusBtn.addEventListener("click", minus);

// multiply function
const multiply = () => {
  calculateResult('multiply');
};

// add eventlisterner to multiply button

multiplyBtn.addEventListener("click", multiply);

// adding the devide function to devide two numbers

const devide = () => {
  calculateResult('divide')
};

// adding the eventListerner to the devide button.

divideBtn.addEventListener("click", devide);
