const user = {
    username: "hitesh",
    price: 999,


    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "samm"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hiti"
//     console.log(this.username);
// }

// chai()


// const chai = function(){
//     let username = "hiti"
//     console.log(this.username);
// }


const chai = () => {
    let username = "hiti"
    console.log(this);
}

// chai()

// const addTwo = (num1,num2)=>{
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username:"hirit"})


console.log(addTwo(2, 4));