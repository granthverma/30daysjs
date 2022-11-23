var User = function(firstName , courseCount) {
    this.firstName =firstName;
    this.courseCount= courseCount;

    this.getCourseCount = function () {
        console.log( `Course count is : ${this.courseCount}`);
        
    };
    
};

var granth = new User("granth" , 1);

console.log(granth);

var himanshu = new User("himanshu" , 2);

console.log(himanshu);




var verma = new User("verma" , 1);

console.log(verma);

