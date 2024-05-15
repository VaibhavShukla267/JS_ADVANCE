// learning alert using event listener


// document.getElementById('stairs').addEventListener('click',function(){
//     // alert('Stairs is clicked')
//     // To work on events
//     console.log("Stairs is Clicked")
    
// },false)

// Some method in events


// type,timestamp,,defaultPrevented
// target,toElement,srcElement,currentTarget
// clientX,clientY,screenX,screenY
// altkey,ctrlkey,shiftkey,keyCode



// document.getElementById('images').addEventListener('click',function(){
//     console.log("UL is Clicked")
// },false)

// Isme output me ayga ki....
//  aagr ham stairs pe click kre to phle stairs is clicked aayga fir ul is clicked............but agar ham kahi aur click kre to phle ul is clciked aayga kyuki hamne dursi images me alag se koi fucntion  ni lgaya hai.... 
// This feature is called propagation or bublling jo ki neeche vaale ko upar kheech ke le aata hai 


// But when we don't want bubbling 

// document.getElementById('stairs').addEventListener('click',function(e){
//     console.log("Stairs is Clicked")
//     e.stopPropagation()
    
// },false)
// It only prints stair is clicked 

// Now if we want that when we click on google then it should not reach the website

// document.getElementById('google').addEventListener('click',function(e){

//     e.preventDefault()
//     e.stopPropagation()
//     console.log("Google Clicked")
// },false)

// if we want to remove images by clicking the picture

// This is long procedure
// const pic2=document.querySelector('#stairs');
// pic2.addEventListener('click',function(e){
//     pic2.remove()
// });
// const pic=document.querySelector('#train');
// pic.addEventListener('click',function(e){
//     pic.remove()
// });
// const pic3=document.querySelector('#car');
// pic3.addEventListener('click',function(e){
//     pic3.remove()
// });
// const pic4=document.querySelector('#building');
// pic4.addEventListener('click',function(e){
//     pic4.remove()
// });

// For better approch target ul

// document.querySelector('#images').addEventListener('click',function(e){
//     console.log(e.target.parentNode);
//     let removeIt=e.target.parentNode
//     removeIt.remove();
// })

// But here if we click on list button then all images are gone

document.querySelector('#images').addEventListener('click',function(e){
    console.log(e.target.tagName);
    if (e.target.tagName ==='IMG'){
        console.log(e.target.id)
        let removeIt=e.target.parentNode
        removeIt.remove();
    }
    })

    // Isme sabse phle hamne images ko select kiya hai fir event listener ka use krke usme ek event create kiya hai 'e' jabhi click krenge to e chalega e.target se ham uss element ko target kr sakte hai....(e.target.tagName) tag name ki madad se ham uss particular element ke tag ko acces kr sakte hai.. fir uspe operations perform kr sakte hai.... e.target.parentNode is ul 
    