var user = {
    // key        value 
    
    firstName : "Granth",
    lastName : "Verma" ,
    role : "Admin" ,
    loginCount :32 ,
    facebookSignedIn :true ,

} ;
//    how to access the value  

console.log(user.firstName);   // new way
console.log(user["lastName"]) ; // old way with array

