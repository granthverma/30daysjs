
tipper(80);
function tipper(a) {
    
    var bill = parseInt (a) ;
    console.log(bill+5);
};

// Function declarations are scanned and made available

// bigTipper("200")

// var bigTipper =function (a) {
//     var bill = parseInt (a);
//     console.log(bill +14);
    
// };




var bigTipper =function (a) {
    var bill = parseInt (a);
    console.log(bill +14);
    
};
bigTipper("200") ;






// vaiable declarations and made undefined 



// Function declarations are scanned and made available
// vaiable declarations and made undefined 


//---------------  CONTEXT   -------------///

       //..................................global 


    //     EXECUTION CONTEXT
    // . VARIABLE OBJECT 
    //. SCOPE CHAIN 
    //. THIS 
    console.log(name);
    var name ="Granth.codes";


    function sayName() {
        var name = "mr himanshu";
        console.log(name);
        
    }

    sayName();  
    console.log(name);