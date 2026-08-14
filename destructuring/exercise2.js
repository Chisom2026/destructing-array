// Exercise 2: Destructuring. get the first price that is 
// greater than 10000 from the array using destructuring and find method.
const productPrice = [8000, 9000, 10000, 15000, 20000];
const prices =productPrice.find(p => p > 10000);
console.log(prices);