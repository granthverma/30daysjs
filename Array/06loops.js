// for (let i = 0; i < 10; i++) {
//     console.log(i);
    
// }

const myCity = ["Ajmer" , 
                "Bangalore" ,
                "Pune", 
                "Jaipur",
                1999, 
               "Kota",
              "Mumbai" ]

 for (let i =0 ; i< myCity.length; i++ ) {
    // console.log(i); // its give length of array 
    if (typeof myCity[i] !== "string") continue
    console.log(myCity [i]);
 }

