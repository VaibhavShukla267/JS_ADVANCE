randomColor=function(){
    const hex="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<8;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}


// hamare code me error issliye aya tha kyuki hamne intervalID ko const kr diya tha after if condition.
let intervalID;
const startChangingColor=function(){
    if(!intervalID){
    intervalID=setInterval(Changecolor,1000);
    }
    function Changecolor(){
        document.body.style.backgroundColor=randomColor()
    }
    
};

const stopChangingColor=function () {
    
    clearInterval(intervalID);
    intervalID=null;
    console.log("Color Changing Stopped")
    
};

document.querySelector("#start").addEventListener('click',startChangingColor)
document.querySelector("#stop").addEventListener('click',stopChangingColor)





// const randomColor = function () {
//     const hex = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += hex[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   };
  
//   let intervalId;
//   const startChangingColor = function () {
//     if (!intervalId) {
//       intervalId = setInterval(changeBgColor, 1000);
//     }
  
//     function changeBgColor() {
//       document.body.style.backgroundColor = randomColor();
//     }
//   };
//   const stopChangingColor = function () {
//     clearInterval(intervalId);
//     intervalId = null;
//   };
  
//   document.querySelector('#start').addEventListener('click', startChangingColor);
  
//   document.querySelector('#stop').addEventListener('click', stopChangingColor);