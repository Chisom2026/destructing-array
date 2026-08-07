const productObject = [8000, 9000, 10000, 15000, 20000];
const total = productObject.reduce((sum , price) => sum + price, 0);
console.log(total);