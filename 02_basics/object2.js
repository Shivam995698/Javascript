//Object ko singleton kese kar ssakte hai ya constructor ke help se kaise declare kar sakte hai  

// const tinder = new Object(); //iss trah bhi hum object ko declare kar sakte  hai 
// console.log(tinderUser);


const tinderUser = {};
tinderUser.name = "Shivam verma",
tinderUser.id = "123",
tinderUser.isLoggedIn = false;
console.log(tinderUser);

//Here we are nesting the object
const regularUser = {
    email:"someone@gmail.com",
    fullname:{
        userfullname:{
            firstName:"Shivam",
            lastName:"Verma"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstName);

// Merging Two object

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};

//Now we are 

// const obj3 = {obj1,obj2};

// console.log(obj3);
// iss targh karne se ye hoga ke jo nested object ban jayenge

const obj4 = Object.assign({},obj1,obj2);
console.log(obj4);

//Second method using the Spread Operator

const obj5 = {...obj1,...obj2};
console.log(obj5);



//Ek aur Syntax aap use karoge jab value jo hai vo database se aaye

//abb mann lo ke ek value aa rahe hai data base se like this 


const arr1 = [
    {
        id:"1",
        Email:"shivam@gmail.com"
    },
    {
        id:"2",
        Email:"Rahul@gmail.com"
    },
    {
        id:"3",
        Email:"Rohit@gmail.com"
    }
]
const ans = arr1[1].Email;
console.log(ans);

//abb hum keys ko array k form mei bhi store kara sakte hai phir us par hum iterate kara sakte hai 

console.log(Object.keys(tinderUser));//abb ye keys tumahre object k form mei store ho gaye abb tum iss   // iterate kar sakte ho; 
 console.log(Object.values(tinderUser));                                   
//for values 
console.log(Object.entries(tinderUser));
//for checking wheater  the object is present or not  
console.log(Object.hasOwnPerty(tinderUser)); 