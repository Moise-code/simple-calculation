// getting the buttons to use.

const inputNumber = document.querySelector('#input-number');
const addBtn = document.querySelector("#btn-add");
const minusBtn = document.querySelector("#btn-minus");
const multiplyBtn = document.querySelector("#btn-multiply");
const divideBtn = document.querySelector("#btn-divide");
const desc = document.querySelector("#current-calculation");
const result = document.querySelector("#current-result");


// adding the out put function to be called in the app.js
const outputResult = (results, description) => {
    result.textContent = results;
    desc.textContent= description;
}