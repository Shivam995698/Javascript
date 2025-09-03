// let arr5 = [
//     {
//         language:"c++",
//         file:"cpp"
//     },
//     {
//         language:"java",
//         file:"java"
//     },
//     {
//     language:"python",
//     file:"py"
//     }
// ]
// const ans1 =  arr5.forEach((item)=>{
//     console.log(item.language+" file name "+item.file);
// }) 
// console.log(ans1);//undefined aayega 
//kunki for each return nahi  karta 
// for that we have to study the filter dunction 



let myarr = [1,2,3,45,44783,9,893];
const ans = myarr.filter((item)=>{
    return item>45;
})
// console.log(myarr);

//same thing using the forEach loop 
// let aer = [];
// myarr.forEach((i)=>{
//     if(i>4)
//     {
//         aer.push(i);
//     }
// })
// console.log(aer);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const finalans = books.filter((item)=>{
    return item.publish>=200 && item.genre === "History";
})
console.log(finalans);
