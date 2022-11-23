var User ={
    name : "" ,
    getUserName : function () {
        console.log(`User name is : ${this.name}`);
        
    },
};


var granth = Object.create(User);

console.log(granth);
granth.name = "granth verma" ;

granth.getUserName() ;


var sam = Object.create (User ,{
    name : {value : "honey"} ,
    courseCount : {value :3} ,
});


sam.getUserName();