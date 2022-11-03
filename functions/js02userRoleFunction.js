// Define a function that can answer the role of user 

//admin - Get Full Access
//suadmin - Gets access to create /delete courses
// testprep - gets access to create /delete tests
//user - gets access to consume content 
// other - trial user


// Input : getUserRole(name ,role)
var  getUserRole = function(name ,role)
// function getUserRole(name ,role) {

{
    switch (role) {
        case "admin":
            return `${name} is admin with Full Access `
            break; // this is not necessary
       case "subadmin":
        return `${name} is sub -admin with access to create /delete courses `
        case "testprep ":
        return `${name} is a testprep with access  to create /delete tests`
        case "user":
        return `${name} is a user to consume content`
        default:

            return `${name} is a trial user`
            break;
    }
}

console.log(getUserRole("granth.codes", "user"));

var getRole = getUserRole ("Honey" ,"subadmin")
console.log(getRole);

