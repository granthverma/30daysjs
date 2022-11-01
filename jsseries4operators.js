// just talk about operators
// 
  // basic thing ------- >>>> +, - ,% ,*,/;
// var num1= 7 ;
// var num2 =9;
// console.log(num1+num2) ;
// console.log(num1-num2) ;
// console.log(num1*num2) ;
// console.log(num1/num2) ;
// console.log(num1%num2) ;


//  -------------------------------> now we calcuate discount price

//  D = (L-S)/L *100

var sellingPrice =299 ;
var listingPrice =899 ;

var discountPercent= ((listingPrice-sellingPrice)/listingPrice)*100;

console.log("Discount percentage is :" +discountPercent);

displayDiscountPercentage =Math.round (discountPercent);

console.log(displayDiscountPercentage +"% off");


