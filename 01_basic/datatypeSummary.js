//  Primitive 

// 7 types : String,Number,Boolean,Null,BigInt,undefined,Symbol

const score = 100
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);

const bigNumber = 134534343434n



// Reference (Non peimitive)

// Array,Objects,Functions

const heros = ["Shaktiman", "nagraj", "doga"]

let myobj = {
    name: "Nitish",
    age: 22,
}

const myFunction = function () {
    // console.log("Hmm");
}

// console.log(typeof myobj);

let myYoutubename = "nitishchau"

let anothername = myYoutubename
anothername = "chaicode"
console.log(anothername);
console.log(myYoutubename);


let userOne = 
{
    email:"userone@gmail.com",
    upi:'user@upi'
}

let userTwo = userOne

userTwo.email = "niti@google.com"

console.log(userOne.email);
console.log(userTwo.email);