// create an application with following roles :
//admin - Get Full Access
//suadmin - Gets access to create /delete courses
// testprep - gets access to create /delete tests
//user - gets access to consume content 


var user = "admin" ;

switch (user ) {
    case "admin":
        console.log ("Get Full Access");
        
        break;
     case "suadmin":
        console.log("Gets access to create /delete courses");
        break;
        case "testprep":
        console.log("gets access to create /delete tests");
        break;
        case "user" :
            console.log ("gets access to consume content" );
            break;

    default:
        console.log("Trial user ");
        break;
}

// break ---> if we don't use  fall through