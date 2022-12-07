var myMap =new Map();

myMap.set(1 ,"ALO");
myMap.set(2,"BLO");
myMap.set(3 ,"CLO");
myMap.set(4 ,"DLO");
myMap.set(5 ,"ELO");
myMap.set(6 ,"FLO");


console.log(myMap);

for (let key of myMap.keys()){
    console.log(`ey s ${key}`);
}
for (let value of myMap.values()){
    console.log(`Value is ${value}`);

}
for (let[key ,value]  of myMap){
    console.log(`Key is ${key}
    and Value id ${value}
    
    `);

    myMap.forEach((v ,k) => console.log(`${v}and key is${k} `));


    myMap.delete(2);
    console.log (myMap);

}







// looking like objects but not objects
// any keys , any values 
// for alwqys key 
// for each give values