const user = {
    username:"Nitish",
    loginCount : 9,
    signIn:true,

    getUserDetails:function(){
        // console.log("Got user from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username,loginCount,logedIn){
    this.username = username
    this.loginCount = loginCount
    this.logedIn = logedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User('nitish',12,true)
const userTwo = new User('Chai',11,true)
console.log(userOne.constructor);
// console.log(userTwo);