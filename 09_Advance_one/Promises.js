const promiseOne = new Promise(function (resolve, reject) {
    // do an async task
    // Db calls, crpto,network
    setTimeout(function () {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(() => {
    console.log("Promise consumed");
})

new Promise((res, rej) => {
    setTimeout(() => {
        console.log("Async task 2");
        res()
    }, 1000)
}).then(() => {
    console.log("Async 2 resolved");
})

const promiseThree = new Promise((res, rej) => {
    setTimeout(() => {
        res({ username: "Nitish", email: "nitish@gmail.com" })
    }, 1000)
})

promiseThree.then((user) => {
    console.log(user);
})

const promiseFour = new Promise((res, rej) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            res({ username: "nitish", password: '123' })
        } else {
            rej('ERROR:Something went wrong')
        }
    }, 1000);
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("Promise is either resolved pr reject");
})



const promiseFive = new Promise((res, rej) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            res({ username: "JS", password: '123' })
        } else {
            rej('ERROR:JS went wrong')
        }
    }, 1000);
})

async function consuePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consuePromiseFive()

// async function getAlluser() {
//    try {
//      const response = await fetch('https://jsonplaceholder.typicode.com/users')
//      const data = await response.json()
//      console.log(data);
//    } catch (error) {
//     console.log("E:",error);
//    }
// }

// getAlluser()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))