var returnedValue = Math.max (2,4, 5, 6,7 ,8 );
console.log(returnedValue);


 var myObj ={} ;

 Object.assign (myObj , {a:1 ,b:2, c:3},{z:9 ,y :6 ,x:5});

 console.log(myObj);


 function sumOne( a , b) {
    return a +b  ;
    
 }


 var myA =[5 ,4 ] ;

//  console.log(sumOne (...myA)); // spread op


function sumTwo( a, b, ...args) {
    console.log(args);
    let multi = a *b ;
    let sum = 0 ;
    for (const arg of args) {
        sum += arg;

    }
    return [sum , multi];
}


console.log(sumTwo (2 , 3, 1,1, 1));