class Calcultor{
    constructor(num1,num2){
        this.num1=num1;
        this.num2=num2;
        return this;
    }

    sum(){
        return ((this.num1) + (this.num2));
       
    }

    substract(){
        return this.num1-this.num2;

    }
    multiplication(){
        return this.num1*this.num2;

    }

    div(){
        if(this.num2!==0){
            
        return this.num1/this.num2;
        }
        else{
            return `Zero Division Error`
        }
        
    }


}
let num1=prompt(`Enter The Fisrt Number`)
let num2=prompt(`Enter the Second Number`)
let calculation1=new Calcultor(num1,num2);
console.log(calculation1)

let calculationElements=document.querySelector("#calculations")
calculationElements.innerHTML=`The Addition is ${calculation1.sum()} <br>`
calculationElements.innerHTML+=`The Substraction is ${calculation1.substract()} <br>`
calculationElements.innerHTML+=`The Multiplication is ${calculation1.multiplication()} <br>`
calculationElements.innerHTML+=`The Division is ${calculation1.div()}<br>`


