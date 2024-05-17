// Before we have promises we use blue birds
// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// Thye are like the events that will happen but eihter aftersome time or instant.
// Promise apne andar call backs leta hai**call back ke andar call backs ke andar call backs
const PromiseOne=new Promise(function(resolve,rejects){
    // Asyn tasks
    // DB calls,cryptography,networks
    setTimeout(function(){
        console.log('Asyn Task 1 Done!!');
        resolve()

    },1000)
})
// Yaha done to hua but hua kya hai??? now see!!
// ***************
// Promise create hone ke baad consume bhi hona chahiye
// To connect resolve to 'then' we can connect using resolve() call back in promise function;


PromiseOne.then(function(){
    console.log(('Promise Consume or resolve done!!'));
})

// Now doing it in shorter way


new Promise(function(resolve,rejects){
    setTimeout(function(){
        console.log("Asyn 2 Is Done!!");
        resolve();
    },1000)


}).then(function(){
    console.log("Resolve 2 Completed!!")
})

// Now new promise here we will see how we can consume data using promises



PromiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Promise 3 Asyn Done!!')
        resolve({
            'name':'Vaibhav Shukla',
            'College':'HBTU',
            'Phone_Number':'9305718509'
        })
    },1000)
})
// Here we can see that we have passed a parameter named user..we can use any name but the parameter of 'then' stores the data that is under the resolve call back ......
// We mostly use objetcs in that call back...

PromiseThree.then(function(user){
    console.log(user);

})
// .then() works when promise completed and .catch() works when we have any error in promise.


PromiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        error=false;
        if(!error){
            resolve({username:'Vaibhav',
                password:'1234'})
            }
        else {
            reject('Something Went Wrong!!!');

        }
        
    },1000)
})
// Remember the below syantax its very important when use soe kind of databases
// here we don't write fuunction name
// We also write at end to get know what happened at last is it completed or failed.
PromiseFour.then((user) => {
   console.log(user)
   return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error)

}).finally(()=>console.log(`fianlly the promise is either rresolbved or rejected!!!`))

// Ye zaruuri ni hai ki ham data hamesa .then .catch se hi access kre 
// But we use async and await function too....
// Async and await cannot hold error to do this we needd to use try catch block



const PromiseFive=new Promise(function(resolve,reject){
   setTimeout(function(){
    error=true
    if (!error){
        resolve({
            username:'Utsav',
            userPassword:'1234'
        })
    }
    // else {
    //     reject(`Error Aa Gayi!!`)

    // }
   },1000)
   
});
async function consumePromiseFive(){
    // await promiseFive ka matlab jo bhi repoonse aaye usko await me store karaao response variable me.. asyn fucntion ke sath ham await ka use krte hai asyn se se ek fucntion bnate hai aawait ki madad se ham promise jo bhi resolve krke value la rha usko store krvaata hai.
    // Aagr ham asyn await ka use kr rahe hai to try catch block is most impotant
    
    
    
    try {
        const response=await PromiseFive
        console.log(response);
        console.log(response.username)
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive()

// Asyn await do not handle arrays



// ******************PRACTICE CODE**********************

const PromiseSix=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            console.log("The Promise 6 being resolved!!")
            resolve({
                petname:"Pappu",
                Type:"Chooha"
            })
        }
        else {
            reject("The Promise 6 cannot be resolved");
        }
        
    },1000)
})
 async function ConsumePromiseSix(){
    try {
        const response=await PromiseSix
        console.log(response)
        console.log(response.petname)
    } catch (error) {
        console.log(error);
        
    }
 }
 ConsumePromiseSix()

//  Use of the above code in real word projects!!!!!

async function GetUserData(){
//    try {

//     const response=await fetch('https://jsonplaceholder.typicode.com/users');
//     const data =await response.json();
//     console.log(data);
//     console.log(data.id)
    
//    } catch (error) {

//     console.log(error)
    
//    }


// If we want to do it with .then .catch



fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);

})
.finally(()=>{
    console.log(`tasks is done or rejected`)
})
}

GetUserData();

// One question comes that why we the output of async await first then we see the output of .then().catch()??????






//*********************Promise.all************************

Promise.all([func1(), func2(), func3()]).then(([result1, result2, result3]) => {
    // use result1, result2 and result3
  });
  

// If one of the promises in the array rejects, Promise.all() immediately rejects the returned promise and aborts the other operations. This may cause unexpected state or behavior. Promise.allSettled() is another composition tool that ensures all operations are complete before resolving.

const applyAsync = (acc, val) => acc.then(val);
const composeAsync =
  (...funcs) =>
  (x) =>
    funcs.reduce(applyAsync, Promise.resolve(x));




// The composeAsync() function accepts any number of functions as arguments and returns a new function that accepts an initial value to be passed through the composition pipeline:
