
// These are objects literals

const StudentDetails={
    StudentName:"Vaibhav Shukla",
    CollegeName:"HBTU",
    Location:"Nawabganj",


    GetStudentCollegeDetails:function(){
        console.log("Accessed The Student Details Section");
        console.log(`StudentCollege: ${this.CollegeName}`);
    },

    GetStudentCollegeLocation:function(){
        console.log(`Acceseed College Location`);
        console.log(`College Location: ${this.location}`);

    },
    GetStudentName: function(){
        console.log("Accessed The Name Section");
        console.log(`StudentName: ${this.StudentName}`);
        // This is current context
        console.log(this);
    },
}

// Node environment me this ke current context me Student details ka puraa objects  hai but global context me empty hai....
// But browser me current context me Student details ka pura object dikhta hai aur aur global context me iske saare window objects dikhta hai 




// console.log(StudentDetails.StudentName)
// console.log(this);
console.log(StudentDetails.GetStudentName());
console.log(StudentDetails.GetStudentCollegeDetails());
console.log(StudentDetails.GetStudentCollegeLocation());


// Now constructor functions
// These are the functions that allow us to create multiple instances form one objects literals... this helps us to create new context
// Examples:::::::>
// const date =new Date();
// const promiseOne=new Promise();
// Constructors gives us new copy 

// For eg of not using constructor::::::::::::>

// function Student(SName,SClass,SNo){
//     this.StudentName=SName;
//     this.StudentClass=SClass;
//     this.StudentNumber=SNo;
    

//     return this
// }
// const One=Student("Jonny","3","123")
// console.log(One);
// const Two=Student("Sena","22","333");
// console.log(One);

// Isme ham jab const Two ko call kr rahe hai fir On eko print komprint krva rahe hai To On eMe Twi ka data overwrite ho rha hai....
// Iss problem ko solve krne ke constructor new ka introduction hua...


// To solve this just add new......................


function Student(SName,SClass,SNo){
    this.StudentName=SName;
    this.StudentClass=SClass;
    this.StudentNumber=SNo;

    // Lets create new method or function

    this.greeting=function(){
        console.log(`Welcome ${SName}`)
    }

    return this
}
const One=new Student("Jonny","3","123",)
console.log(One);
One.greeting();

const Two=new Student("Sena","22","333");
// console.log(One);
console.log(Two)
console.log(One.constructor)

// What happens if we don't define return this then nothing happpens its an implicit call....


// instamceof