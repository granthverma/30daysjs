
// how array declare 

var countries =[ "India ","Usa" , "dubai" , "Japan"]; // old way
var states = new Array ("Rajasthan" ,"delhi","Mumbai", "Assam"); // new way
///access this value  --------------->>>>>>>

// array start from 0 

// console.log(states[0]);

// console.log(countries);

// /// length of array

// console.log(states.length);

// // you want change states 
// states [0] ="Punjab" ;
// console.log(states);


var user = ["honey " ,"granthcodes@com",3 ,34 ,true];
// console.log(user);
// remove the value we pop 
// pop remove the value from end
user.pop() ;
// console.log(user);


/// Unshift the value  -- unshift shift value from end

//

user.unshift ("NEW VALUE") ;
// console.log (user);

// shift the value to original one
user.shift();
 console.log(user);

console.log(user.indexOf("honey"));


console.log(Array.from("honey"));