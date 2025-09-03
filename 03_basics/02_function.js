//Rest Operator(...)
//we use rest operator  for passing the value dynamically 

function myfunc(...num)
{
    return num;
}
console.log(myfunc(2000,3000,400,5000));



//passing object through function

const user = {
    id:1,
    name:"Shivam"
}


function myfunc2(user)
{
    console.log(`Name of the user is ${user.name}`);
}
// myfunc2(user);

//Tum dirrectly aise bhi pass kar sakte ho 

myfunc2({
    name:"Rhul",
    id:3
})


//same way you can pass array too  