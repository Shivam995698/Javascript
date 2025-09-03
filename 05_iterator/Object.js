let Obj1 = {
    "s1":"Shivam1",
    "s2":"Shivam2",
    "s3":"Shivam3",
    "s4":"Shivam4"
}
// for(let i of Obj1)
// {
//     console.log(i);
// }

// Object are  not iterable



//for that we have for-of loop 

// for(let i in Obj1)
// {
//     console.log(i+"  this is my value:-"+Obj1[i]);
// }

//for in loop will not work on the map 
//for map you need to use the for of loop 

//let see wheather it will work on the array     

let arr3 = ["shibhjjbff","shbfyus","shfdbys"];
for(i in arr3)
{
    console.log(`The value is ${i}`);
}