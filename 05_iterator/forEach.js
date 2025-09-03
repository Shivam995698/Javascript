//for each loop 

let arr1 = ["rahul","rohit","rishu","bsyu"]
// arr1.forEach(//iske andar hum ek function ko pass karenge)


// arr1.forEach(function (item,index,arr){
//     console.log(item);
// })


//First  way 

arr1.forEach(function (item){
    console.log(item);
})


//Object inside the loop 

let arr5 = [
    {
        language:"c++",
        file:"cpp"
    },
    {
        language:"java",
        file:"java"
    },
    {
    language:"python",
    file:"py"
    }
]
arr5.forEach((item)=>{
    console.log(item.language+" file name "+item.file);
})



//Secomd way 

// arr1.forEach((item)=>{
//     console.log(item);
// })