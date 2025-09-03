//Immmediately innvoked func



//Syntax 
//(body of the function)(execution)


//name ifif 

(function chai()
{
    console.log("chai is ready")
 })();
 
//unnamed ifif

  
 (function()
{
    console.log("chai is ready")
 })();



 //(; for the ending the execution)

//Kyun use karte hain IIFE?

// Private scope banane ke liye
// Jo variables tum IIFE ke andar banao, wo bahar accessible nahi hote.

// Global scope pollute hone se bachane ke liye
// Bade projects me agar har jagah var/let global ban jaaye to conflicts hote hain.
// IIFE se variables local hi rahte hain.

// Code ko turant execute karne ke liye
// For example initialization code, jo page load hote hi chalna chahiye.


//do ififi likane k liye hame phele wale ifif mei semicolon lagana padega 

((chai)=>{
    console.log("Db is connected");
})();

