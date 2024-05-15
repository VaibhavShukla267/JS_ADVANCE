// Generate A random color

// first we need to create a variable to store a random color values

// yah pe hamne ek hex variable bnaya hai jo ki alag alag number aur strings store kr rha hai 
// color variable ka use krke ham ek color code bna rahe hai..
// for loop ki madad se ham 6 different different color store krva sakte hai
// color+=hex ki madad se ham do variable ke sath merge kr rahe hai

const randomColor=function(){
    const hex='0123456789ABCEF';
    let color='#';
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
};
let intervalID=null;
const startChangingColor=function(){
    if(!intervalID){
        intervalID=setInterval(changeBgColor,100);
    }

    function changeBgColor(){
        document.body.style.backgroundColor=randomColor();
    }
};

const stopChangingColor=function(){
    if (intervalID){
    clearInterval(intervalID);
    intervalID=null;
    }
}

document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)
