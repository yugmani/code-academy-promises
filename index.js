// Import stylesheets
import './style.css';

//Constructing a promise object

const executorFunction = (resolve, reject) => {
  if (someCondition) {
    resolve('I resolved.');
  } else {
    reject('I rejected');
  }
};

const myFirstPromise = new Promise(executorFunction);
console.log(myFirstPromise);

//Tasks
let myExecutor = (resolve, reject) => {
  if (inventory.sunglasses > 0) {
    resolve('Sunglasses order processed.');
  } else {
    reject('That item is sold out.');
  }
};

const orderSunglasses = () => new Promise(myExecutor);

const orderPromise = orderSunglasses();
console.log(orderPromise);
