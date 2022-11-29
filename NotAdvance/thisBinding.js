const hitesh = {
    firstName : "Granth" ,
    lastName : "Verma",
    role : "Admin",
    courseCount :3 ,

    getInfo : function() {
        console.log(`
                First name is ${this.firstName}
                Last name is   ${this.lastName}
                His role is    ${this.role}
                and he is studying ${this.courseCount} courses


        
        ` );
            
            
        
    },

};

const dj ={
    firstName : "himanshu",
    lastName : "verma" ,
    role :"Sub -Admin" ,
    courseCount :4 ,

} ;

 hitesh.getInfo();
hitesh.getInfo.bind (dj) ();
hitesh.getInfo.call(dj);
