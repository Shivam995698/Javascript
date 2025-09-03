// function sayHello()
// {
//     console.log('H');
//     console.log('i');
// }

// sayHello();


function myNum(number1,number2)
{
    const num3 = number1+number2;
    return num3;
}
const finalans = myNum(3,4);
console.log(finalans);


function loginUser(user)
{
    if(!user)
    {
        console.log("pls Enter the valid userName");
        return;
    }
    console.log(`${user} login sucessfully`);

}
console.log(loginUser("shivam"))



