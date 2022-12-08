class User{
  constructor (name , email){
     this.name = name;
     this.email= email;
  }
  #courseList =[];
  // private props getters and setters in javascripts

  getInfo(){
     return{name: this.name ,email: this.email };

     // funcation  bhi bola skta ha aur method bhi 

     // working methods 
  }

     enrollCourse(name){
         this.#courseList.push(name);
     }

     // push course name enroll name 

/// how many course you  enroll 

getCourseList(){
 return this.#courseList;
}

login() {
return "You are logged in";

}  // static don"t share information 
}


module.exports = User;

// we exports  the files  
// foucs  on   s  its exports 
// CLASS BLUEPRINT 
// class create  alone don't come with objects 
// constructor  class create objects 

// get - > grab the vaiable privately  return parameters
// set --> set the value 
class SubAdmin extends User{

constructor(name ,email){

  super(name , email)

}




 getAdminInfo (){
   return "I am subAdmin"
 }  /// now create objects 

 login (){
   return "login for admin only" ;
 }
}

// #inheritance the  classe use extends 

const honey = new User ("honey" , "honey@honey.com");
console.log(honey.getInfo());
honey.enrollCourse ("React Bootcamp")
console.log(honey.getCourseList());
console.log(honey.courseList);// private props



const tom = new SubAdmin ();
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());