//npm install promise

const { resolve, reject } = require("promise");
const Promise = require("promise");

function add(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num1 === 0) {
      reject("First number is zero");
    }
    resolve(num1 + num2);
  });
}

function multiply(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num1 === 0) {
      reject("First number is zero");
    }
    resolve(num1 * num2);
  });
}

function divide(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num1 === 0) {
      reject("First number is zero");
    }
    resolve(num1 / num2);
  });
}

add(10, 20)
  .then((sum) => {
    console.log(sum);
    return multiply(sum, sum);
  })
  .then((product) => {
    console.log(product);
    return divide(product, 10);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
