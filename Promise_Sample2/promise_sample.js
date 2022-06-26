const { resolve, reject } = require("promise");
const Promise = require("promise");

function getName() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("JPU");
    }, 3000);
  });
}

function getMob() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("1234567890");
    }, 2000);
  });
}

Promise.all([getName(), getMob()]).then((result) => {
  console.log(result);
});
