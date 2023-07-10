function sayMyName(){
    console.log("N");
    console.log("i");
    console.log("t");
    console.log("i");
    console.log("s");
    console.log("h");
}

// sayMyName()

// function addTwoNumber(num1,num2){
//     console.log(num1 + num2);
// }

function addTwoNumber(num1,num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumber(2,5)

// console.log("Result: ",result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a user name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Nitish"))
// console.log(loginUserMessage("nitish"))

function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,20,34,37,65))

const user = {
    userName:"hitesh",
    prices:200
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
}


// handleObject(user)
handleObject({
    userName:"shyama",
    price:202
})

const myNewArray = [200,400,230,233]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([10,12,34,]));