//This keyword refer to the current context;

const customer = {
    username:"yash",
    age:23,
    welcome : function()
    {
        console.log(`${this.username} welcome to the company`);
    }
}
// customer.welcome();


const myfunc = function()
{
    let username = "Shivam";
    console.log(this.username);//give output as undefined because this work onlyn for the object
}


// myfunc();


//Arrow Function 

// Basic Arrow function 


// const myfunc2 = ()=>{
//     let username = "Rahul"; 
//     console.log(username);
// }
// myfunc2();


//Implicit return arrow function
 

// const funct2 = (num1,num2)=>num1+num2;

//Note in another way we are using the parenthesis but if we use parentheis instead of curly bracket 
// when you use curly bracket you need to add return keyword 
// but when you use the parenthesis then you dont need the curly bracket 





console.log(funct2(3,4));