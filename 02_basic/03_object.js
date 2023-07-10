// singleton
// Object.create

// ----> object literals

const mySym = Symbol('Key1')

const jsUser = {
    name:"Nitish",
    "full name":"nit kumar",
    [mySym]:"mykey1",
    age:15,
    location:"jaipur",
    email:"nitis@google.com",
    isLogin:false,
    lastLogin:["Mon","Tue"]

}

// console.log(jsUser.email);
// console.log(jsUser['email']);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = 'nitish@chatgpt.com'
// Object.freeze(jsUser)
jsUser.email = 'nitish@micro.com'
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello js user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello js user ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());