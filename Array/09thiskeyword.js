// this 
// for all regular function calls , this points to window Object


console.log(this);
var user = {
    firstName :"Granth" ,
    courseCount :4 ,
    getCourseCount : function () {
        console.log("Line 10" ,this );
        function sayHello() {
            console.log("Hello");
            console.log("LINE 10", this);
            
        }
        sayHello()
    },

} ;

user.getCourseCount () ;
