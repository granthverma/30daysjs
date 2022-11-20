const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");
const black = document.querySelector(".black");
const white = document.querySelector(".white");

const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const center =document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);


const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;

};

// console.log(getBGColor(pink));

// var orangeElementColor = getBGColor(orange);

// orange.addEventListener("mouseenter" , ()=> {
//     center.style.background = color ;
// });

const magicColorChanger = (element ,color) => {
    return element.addEventListener("mouseenter" , ()=> {
        center.style.background = color ;
});

} ;

magicColorChanger(red , getBGColor(red));
magicColorChanger(cyan , getBGColor(cyan));
magicColorChanger(violet , getBGColor(violet));
magicColorChanger(orange , getBGColor(orange));
magicColorChanger(pink , getBGColor(pink));
magicColorChanger(black , getBGColor(black));
magicColorChanger(white , getBGColor(white));
magicColorChanger(green , getBGColor(green));
magicColorChanger(blue , getBGColor(blue));
