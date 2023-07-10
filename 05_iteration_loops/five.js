const coading = ['js','ruby','phython','java','C++']

// coading.forEach( function (item) {
//     console.log(item);
// } )

// coading.forEach( (i)=>{
//     console.log(i);
// })

// function printMe(item){
//     console.log(item);
// }

// coading.forEach(printMe)

// coading.forEach((item,index,arr)=>{
//     console.log(item , index , arr);
// })

const myCoading = [
    {
        languageName : 'Javascript',
        languageFileName : 'js'
    },
    {
        languageName : 'Ruby',
        languageFileName : 'rb'
    },
    {
        languageName : 'C++',
        languageFileName : 'Cpp'
    },
    {
        languageName : 'Phython',
        languageFileName : 'phy'
    },
]

myCoading.forEach((item)=>{
    console.log(item.languageName);
})