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

// Success and Failure Callback Functions
// **********************************************

//eg1.
const prom = new Promise((resolve, reject) => {
  resolve('Yay!');
});

const handleSuccess = (resolvedValue) => console.log(resolvedValue);

prom.then(handleSuccess);
//Yay! ->printed!

//eg2.
let extendedPromise = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < 0.5) {
    resolve('Hello!');
  } else {
    reject('Ohh nooo!');
  }
});

const handlerSuccess = (result) => console.log(result);

const handlerFailure = (result) => console.log(result);

extendedPromise.then(handleSuccess, handlerFailure);
//Hello! ->when promise is success
//Ohh nooo! ->when promise is failed.

//Tasks
// ******************************** */

//1.  We use require() to include the function checkInventory() from library.js. It builds on the logic of the orderSunglasses() function you wrote in a previous exercise.
//look at the library.js file to see how it works.
const { checkInventory } = require('./library.js');

const order = [
  ['sunglasses', 1],
  ['bags', 2],
];
// checkInventory() takes in an array representing an order and returns a promise.

// If every item in the order is in stock, that promise resolves with the value "Thank you. Your order was successful."

// Otherwise, the promise rejects with the value "We're sorry. Your order could not be completed because some items are sold out".

// We used setTimeout() to ensure that the checkInventory() promise settles asynchronously.

// Write your code below:
// ------------------------------------------

//2.  Write a function, handleSuccess(). You’ll use this function later on as your success handler. handleSuccess() should have one parameter, representing a resolved value. Inside the body of handleSuccess(), log the parameter to the console.
const handlingSuccess = (resolvedValue) => console.log(resolvedValue);

//3. Write a function, handleFailure(). You’ll use this function later on as your failure handler. handleFailure() should have one parameter, representing a rejection reason. Inside the body of handleFailure(), log the parameter to the console.
const handlingFailure = (rejectionReason) => console.log(rejectionReason);

//4. Invoke checkInventory() with order. This will return a promise. Attach a .then() function to this. Pass into .then() the two handlers you wrote as callback functions.

// checkInventory(order).then(handlingSuccess, handlingFailure);
//Thank you. Your order was successful. ->when promise is success

//Using catch() with Promises
// ***********************************************

// chain a second .then() with a failure handler to a first .then() with a success handler and both cases will be handled.

const promOne = new Promise((resolve, reject) => {
  resolve('Ohm Namah Shivay!');
  reject("I don't like going down");
});

/*
promOne
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .then(null, (rejectionReason) => {
    console.log(rejectionReason);
  });
*/

//Let’s look at an example using .catch():
promOne
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });

//Tasks
//-------------------------------------------------

//1. We’re going to refactor the functionality of the previous exercise but this time we’ll use .catch()! First invoke the checkInventory() function with the order. Remember, this function will return a promise.

//2. Add a .then() to the returned promise. Pass in the success handler handleSuccess().

//3. Add a .catch() to the returned promise. Pass in the failure handler handleFailure().
checkInventory(order).then(handlingSuccess).catch(handlingFailure);

//4. We set our inventory( see library.js) of sunglasses to 0, so the order shouldn’t go through. Let’s make sure our code has the expected results. Type node app.js in the terminal and hit enter.

//Since there is no enough sunglasses in the inventory, the promise to order is failed and prints as:
// We're sorry. Your order could not be completed because some items are sold out.



