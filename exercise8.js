// 
function applyDiscount(price, discountFn) {
  return discountFn(price);
}
 
const tenPercentOff = (price) => price * 0.9;

 
console.log(" your discount of 10% is : " + applyDiscount(1000, tenPercentOff));