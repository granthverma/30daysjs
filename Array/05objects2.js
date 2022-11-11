//methods and objects 

var user = {
    // key        value 
    
    firstName : "Granth",
    lastName : "Verma" ,
    role : "Admin" ,
    loginCount :32 ,
    facebookSignedIn :true ,
    courseList:[],
    buyCourse: function (courseName) {
        this.courseList.push (courseName);
        
    },
     getCourseCount :function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length}courses`;
        
     },
    // Method inside function buyCourse: function name(params) {
       //   syntax of Method inside function 
    //}

} ;
 var courseList = true ;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse ("React Js Course") ;
user.buyCourse ("Js Course") ;

console.log(user.getCourseCount());