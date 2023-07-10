// const coading = ['js','ruby','phython','java','C++']

// const value = coading.forEach((item)=>{
//     console.log(item);
//     return item;
// })

// console.log(value);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNum = myNums.filter((num) => {
//     return num > 4
// })

// const newNum = []

// myNums.forEach((num)=>{
//     if (num > 4) {
//         newNum.push(num)
//     }
// })

// console.log(newNum);


const books = [
    {
        title: 'Book A',
        genre: 'Fiction',
        publish: 2010,
        edition: 'First Edition'
    },
    {
        title: 'Book B',
        genre: 'Mystery',
        publish: 2015,
        edition: 'Second Edition'
    },
    {
        title: 'Book C',
        genre: 'Fantasy',
        publish: 2018,
        edition: 'Third Edition'
    },
    {
        title: 'Book D',
        genre: 'Science Fiction',
        publish: 2020,
        edition: 'Fourth Edition'
    },
    {
        title: 'Book E',
        genre: 'Romance',
        publish: 2012,
        edition: 'Fifth Edition'
    },
    {
        title: 'Book F',
        genre: 'Thriller',
        publish: 2016,
        edition: 'Sixth Edition'
    },
    {
        title: 'Book G',
        genre: 'Historical Fiction',
        publish: 2019,
        edition: 'Seventh Edition'
    },
    {
        title: 'Book H',
        genre: 'Biography',
        publish: 2008,
        edition: 'Eighth Edition'
    },
    {
        title: 'Book I',
        genre: 'Horror',
        publish: 2014,
        edition: 'Ninth Edition'
    },
    {
        title: 'Book J',
        genre: 'Self-Help',
        publish: 2017,
        edition: 'Tenth Edition'
    },
];


// const userBooks = books.filter((bk)=>bk.genre === 'Fiction')

const userBooks = books.filter((bk)=>bk.publish >= 2012 && bk.genre === "Horror")

console.log(userBooks);