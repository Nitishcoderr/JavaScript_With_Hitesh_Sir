// let myName = 'hitesh         '
// let mychannel = 'nitishchannel         '

// console.log(myName.truelength);


let myHero = ["thor","Spidy"]

let heroPower = {
    thor:"hammer",
    spidy:"sling",

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spidy}`);
    }
}

Object.prototype.nitish = function(){
    console.log(`Nitish is present is all object`);
}

Array.prototype.heyNitish = function(){
    console.log("Nitish say hello");
}


// heroPower.nitish()

// myHero.nitish()
// myHero.heyNitish()
// heroPower.heyNitish()

const User = {
    name:"Chai",
    email:"chai@gmail.com"
}

const Teacher = {
    makeVideo:true
}

const TeachingSupport = {
    isAvailable:false
}

const TASupport = {
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "chaiaurhum          "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is :${this.trim().length}`);
}

anotherUsername.trueLength()
"nitish".trueLength()
"iceTea".trueLength()