const mp = new Map();
mp.set(1,"Shivam1");
mp.set(2,"Shivam2");
mp.set(3,"Shivam3");
// for(const i of mp)
// {
//     console.log(i);
// }

// output:-
// [ 1, 'Shivam1' ]
// [ 2, 'Shivam2' ]
// [ 3, 'Shivam3' ]


for(const [i,j] of mp)
{
    console.log(i+":-"+j);
}