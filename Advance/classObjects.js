//  import User from "./classjs";


const User = require("./classjs.js");

const granth = new User("granth","granth@bol.dev");


console.log(granth.getInfo());

granth.enrollCourse("React Bootcamp");
granth.enrollCourse("Java Bootcamp");

console.log(granth.getCourseList());

// holding variable in courses
let courses = granth.getCourseList();


courses.forEach((c) => console.log(c));