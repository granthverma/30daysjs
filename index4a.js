// //array
// //array literals
// let Arr1 =["grath " ,"honey" ,"do it" ,"as free like bird"];
// console.log (Arr1) ;
// console.log(Arr1.length);
// //1 ,2 ,3 ,4 
// console.log(Arr1[Arr1.length -1 ]);
// Arr1[3] ="granth.codes"
// console.log(Arr1);
//array constructor
//dd
// // let newarr = new Array ("a" ,"b" ,"c");
// // console.log (newarr );
// slice value index se index value ko leta hai
//  let Arr1 =["honey " , "chavi","steve" , "granth"];
//  console.log (Arr1);
//  Arr1.push ("himanshu");
//  console.log (Arr1);
// // method of slice 
// //Syntax:array.slice (startindex ,endindex-1)
// console.log (Arr1.slice(1,2)); 1 se 2 tk
// let Arr2 = Arr1.slice(1,1);
//  console.log (Arr2);
// learn about splice its modified modern array
// let nam =["Ab" ,"bb", "Cc","Dd","Ee","Dd","Ee"];
// console.log(nam) ;
// nam.splice(2 ,3, "value1", "value2");
// //Syntax array.spliceindex ,
// //how many value you modified -> start index (2) ,modified things
// console.log(nam);
// how to add  two array-->
//  "" in array ---->
// The concat() method concatenates (joins) two or more arrays. The concat() method returns a new array, containing the joined arrays.
//  The concat() method does not change the existing arrays.

// let nam = ["Ab" , "bb","Cc","Dd" ,"Ee" ,"Dd" ,"Ee"] ;
// let nam1 =[1,2, 3,4 ,5 ,6 ,7 ,8 ,9] ;
// //if we have  thrid array then what we do --> we simple add second variable name in log
// let nam2 =[9 ,7,6,5,3,1,6,1]
// console.log (nam.concat(nam1 ,nam2)) ;
// // add two value ^^^^^^

// how add WE COPY VALUE INSIDE THE ARRAY -->
// local syntax where index you  replaced ,from where to where ,exp 4 to 6 its means 4 ,5 index 

// let arr1 =[1,2,3,4,5,6,7,8,9] ;

// console.log (arr1.copyWithin(1 ,4,6));
// //syn : array.copyWithin (target_index , start , end )

// let arr1 = [1,2,3,4,5,6,7,8] ;
// console.log ()

// ------->>>>>>>>>    includes 

/// just learn about includes  -->  includes check the value you given index or notsearchElement — The element to search for.

//fromIndex — The position in this array at which to begin searching for searchElement.


//  let arr1 = [1 ,2, 3,4, 5,6, 6,7 ,8] ;
// console.log (arr1.includes(5 ,4));
// ----------------------------------------------------------------------------//


// ********* --------->>>> index of 
// let arr1 = [1 ,2, 3,4, 5,6, 7,8, 9] ;
// console.log (arr1.indexOf(4));

// what the position values are present 



let arr2 = [1 ,2, 3,4, 5,6,7 ,"LCO" ,8] ;
console.log (arr2.lastIndexOf("LCO"));