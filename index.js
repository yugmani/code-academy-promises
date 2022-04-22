// Import stylesheets
import './style.css';

//Constructing a promise object
// ********************************************

//promise object;
const executorFunction = (resolve, reject) => {
  if (someCondition) {
    resolve('I resolved.');
  } else {
    reject('I rejected');
  }
};

const myFirstPromise = new Promise(executorFunction);
console.log('First Promise: ', myFirstPromise);

//Tasks
// ----------------------------------------

let myExecutor = (resolve, reject) => {
  if (inventory.sunglasses > 0) {
    resolve('Sunglasses order processed.');
  } else {
    reject('That item is sold out.');
  }
};

const orderSunglasses = () => new Promise(myExecutor);

const orderPromise = orderSunglasses();
console.log('Order Promise: ', orderPromise);

//The Node setTimeout() Function
// *********************************************

const sayHello = () => {
  console.log('Hello! This is an asynchronous greeting!?');
};

setTimeout(sayHello, 2000);

//After 2 seconds
//Hello! This is an asynchronous greeting!?

const returnPromiseFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('I resolved it!');
    }, 1000);
  });
};

const myPromise = returnPromiseFunction();
console.log('My Promise: ', myPromise);

//Tasks
// -----------------------------------------
console.log('This is the first line of code in app.js.');
// Keep the line above as the first line of code
// Write your code here:

const usingSTO = () => {
  console.log('Testing Asynchronous code!');
};

setTimeout(usingSTO, 3000);

// Keep the line below as the last line of code:
console.log('This is the last line of code in app.js.');

//Output:
//This is the first line of code in app.js.
// This is the last line of code in app.js.
// Hello! This is an asynchronous greeting!?
// Testing Asynchronous code!
