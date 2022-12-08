const uno = () =>{
    return "I am one";
};

// const dos =() =>{
// setTimeout(() =>{
//     return "I am Two";

// }, 3000);

// };

  const tres = () => {
    return new Promise ((resolve , reject) => {
        setTimeout (() => {
            resolve ("I am two");
        }, 3000);
    });
  };

  const dos = () => {
    return "I am Three";
  };
 

  const callMe = async () => {
    let valOne = uno ();
    console.log(valOne);
     

    let valTwo = await tres ();
    console.log(valTwo);


    let valThree = dos ();
    console.log(valThree);
};

callMe ();













