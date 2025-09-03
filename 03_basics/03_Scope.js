let a = 100;
if(true)
{
    let a = 10;
    const b = 20;
    var c = 30;
}


// console.log(a);
// console.log(b);
// console.log(c);//ye access  ho raha hai jo ki nahi hona chayiye 


//we can declare function in two way 

function twoNumber(num)
{
    return num;
}

//and second one you can declare in this wway 
console.log(fiveNumber(5)); // Error because of the hoisting  
const fiveNumber = function(num2)
{
    return num2;
}
console.log(fiveNumber(5));