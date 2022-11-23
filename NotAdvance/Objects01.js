var User = function(firstName , courseCount) {
    this.firstName =firstName;
    this.courseCount= courseCount;

    this.getCourseCount = function () {
        console.log( `Course count is : ${this.courseCount}`);
        
    };
    
};

User.prototype.getFirstname = function () {
    console.log(`Your firstname is : ${this.firstName}`);
    
}
var granth = new User("granth" , 1);
granth.getCourseCount();
// granth.getFirstname();
if ( granth.hasOwnProperty("firstName")) {
    granth.getFirstname ();
    
}

// console.log(granth);

var himanshu = new User("himanshu" , 2);
himanshu.getCourseCount();
himanshu.getFirstname();
// console.log(himanshu);




var verma = new User("verma" , 3);

verma.getCourseCount();
verma.getFirstname();

// console.log(verma);

