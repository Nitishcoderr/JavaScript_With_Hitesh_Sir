const tinderUser = new Object()
const tinder = {}

tinderUser.id = '1324wd'
tinderUser.name = 'Sammy'
tinderUser.isLoggedIn = false

// console.log(tinder);
// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullName:{
        userfullName:{
            firstName:"Niti",
            lastName:"kumar"
        }
    }
}

// console.log(regularUser.fullName.userfullName.firstName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"f",4:"g"}
const obj4 = {5:"k",6:"a"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id:1,
        email:'h@gmail.com',
        
    },
    {
        id:2,
        email:'h@gmail.com',
        
    },
    {
        id:3,
        email:'h@gmail.com',
        
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName: "Js in hindi",
    price:"999",
    courseInstructor:"nitish"
}

// console.log(course.courseInstructor);

const {courseInstructor:instructor} = course

console.log(courseInstructor);
console.log(instructor);

//  {
//     "name":"Nitish",
//     "courseName":"js",
//     "price":"free"
// }