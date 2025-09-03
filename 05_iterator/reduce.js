const myTotal = [1,2,3,45,5,6,64];
const ans = myTotal.reduce((acc,curr)=>{
    return acc+curr;
},0)
console.log(ans);