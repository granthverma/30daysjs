const names =["Youtube" , "Facebook" , "Instagram" ,"tiktoe" ,"moja"];

// for (const n of names ) {
//     console.log(n);
// }

// for of use  for array 
// for in use for  objects  

const  symbols = {
    yt : "Youtube" ,
    fb : "facebook" ,
    ig : "instagram" ,
    tt : "tiktoe " ,

} ;

for (const n in symbols) {
    console.log(symbols[n]);
}