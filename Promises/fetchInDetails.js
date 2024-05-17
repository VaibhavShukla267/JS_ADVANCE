// The global fetch() method starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.

// The promise resolves to the Response object representing the response to your request.

// A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.

// The fetch() method is controlled by the connect-src directive of Content Security Policy rather than the directive of the resources it's retrieving.
// fetch(resource)
// fetch(resource, options)


// Important interview question **
// Promise se apne request kri aur vaha ek error code aa gya 404,504 to vo apko resolve me milega ya reject me milega???
// Answer is ki..........vo hamesha hme response me milega...error tb hoga jb vo request kr hi ni paya hai browser se......sirf uss case me error milta hai...network code does'nt know error code.



// One question comes that why we the output of async await first then we see the output of .then().catch()??????


// Hamko yaad hoga ki hmane basic structure padha tha ki kyse Js engine aur environment kaam krta hai....Vah ape hame do queues tha ek tha Task queue aur ek tha Priority queue....Tasks me apne basics functions aate hai for eg:set interval,setTimeout,DomApI,etc aur vo task queue se jaake seeddha call stack chle jaate hai.....
// But fetch() me jo bhi fucntion hota hai vo hamare seedha priority queue also known as microtask queue me jata hai  aur call stack me sabse phle add hota hai....


//response=fetch('something') fetch ka kaam do part me hota hai
// 1:>web browser/native node
    // i:>isse hame milti hai Network Request::::Ya to network me data jyga ya ni jyga............agar jaake koi response aya hai to hamesha vo onfulfiled me jata hai...............agar ni aaa pya to on Rejection.

// Note:::::

// yaad rakhne jaisi hame koi 404 ya 504 error aayi to vo bhi hamra on fulfiled me jata hai kyuki network request to aayi hi hai...


// 2:>data space reservation for varible in memory
    // i:>onfulfilled[function]/resolve 
    // ii:>on Rejection[function]/reject
    // They both contain functions these are responsible for fullfilment of data....
    // They are not in the range since we cannot push values directly in  these arrays.They are private field...
// Now data has the responsiblity to fulfil the response variable in global memory....i.e response=fetch('something);





async function GetUserData(){

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