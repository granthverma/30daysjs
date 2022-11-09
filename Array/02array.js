// var isEven =function (element)

// arrow function 

var isEven = (element) => {
    // if (element%2 === 0){
    //     return true ;
    // }
    // return false;
    return element% 2 === 0;
}

// console.log(isEven(2));

// var result = [2, 4, 6,8].every(isEven);
// console.log(result);


// every check all values

// call back function ------------>
//  call back syntax  ------------------->

// () => {}    when we use {} then return value 
// () => ()    ---   without return the value

           ///  without return the value  //

// var result = [2, 4, 6,8].every((e)=> (e % 2 ===0 ) ) ;
// console.log(result);   



              /// when we use {} then return value 
              
var result = [2, 4, 6,8].every((e) => {
    return (e % 2 ===0 )
}
 ) ;
console.log(result);  