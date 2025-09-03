let arr = [1,2,3,4,5,5,6,6,54,4,33,3];

const ans1 = arr
        .map((item)=>(item+10))
        .map((item)=>(item+11))
        .filter((item)=>(item>50))
console.log(ans1);
