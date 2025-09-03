// fetch('https://something.com').then().catch().finally()


//1

const Promiseone = new Promise(function(resolve,reject)
{
  //perform async task 
  //DB call network call 
  setTimeout(function()
{
  console.log('Async task is completed');
  resolve();
},1000)
});
Promiseone.then(function()
{
  console.log("Promise consumed Sucessfully");
})

//then ye connect hota hai resolve se 


new Promise(function(resolve,reject)
{
  setTimeout(function()
{
  console.log('Async2 task is completed');
  resolve();
},1000)
}).then(function()
{
  console.log("Promise2 consumed Sucessfully");
})

//promise3  


//passing data in resolved 

const promise3 = new Promise(function(resolve,reject)
{
  setTimeout(function(){
    resolve({username:"shivam",email:'shivam@gmail.com'})
  },1000)
})
promise3.then(function(user)
{
  console.log(user);
})
promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.