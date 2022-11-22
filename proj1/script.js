var counter =document.querySelector(".counter");
var followers =document.querySelector(".followers");


let count =1 ;

setInterval (()=>{
    if (count<1000) {
        count++;
        counter.innerText =count;
    }
},7) ;

setTimeout (() => {
    followers.innerText ="Followers in Instagram !"
},8000) ;





//one - methods   two -how many interval you want repeats