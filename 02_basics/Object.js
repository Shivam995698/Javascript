//singlton 

//object literals 

//adding symbol in  and add it like a key 
const mysum = Symbol("key1");

//key-value pair
const JsUser = {
    name: "Shivam",
    "full name":"Shivam verma",//abb iss value ko . se nahi access 
    //kar sakte 
    age:18,
    [mysum]:"Rahul",
    location:"Jaipur",
    isLoggedIn:false,
    lastLogging : ["Mobday","Tuesday"]
}
// console.log(JsUser.name);
// console.log(JsUser["email"]);

// console.log(JsUser["full name"]);

//accessing the Object 

// console.log(JsUser[mysum]);


JsUser.greeting = function()
{
    console.log("Hello js user");  
}
JsUser.greetingTwo = function()
{
    console.log(`Hello js user ${this.name}`);  //this se vo current object ko refer karne lagta hai
}
console.log(JsUser.greeting());//Hello js user
// undefined

console.log(JsUser.greeting); // ye srif ek annyonomus function return karega that its


console.log(JsUser.greetingTwo());

