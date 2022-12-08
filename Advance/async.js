const uno = () =>{
    console.log("I am one");

};

const tres = () => {
    setTimeout(() =>{
        console.log("YOOOOOOOOO");
    }, 200);
    console.log("I am Two");
};

const dos = () => {
    console.log("I am Three");
};

uno ();
tres();
dos();