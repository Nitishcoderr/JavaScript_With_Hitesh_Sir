const myNum = [1, 2, 3]

// const myTotal = myNum.reduce(function (acc,currval) {
//     console.log(`acc:${acc} currval ${currval}`);
//     return acc + currval
// },0)

const myTotal = myNum.reduce((acc, curr) => acc + curr, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName : 'js course',
        price : 2999
    },
    {
        itemName : 'js course',
        price : 2999
    },
    {
        itemName : 'java course',
        price : 999
    },
    {
        itemName : 'mobile course',
        price : 5999
    },
]

const totalPrice = shoppingCart.reduce((acc,item)=> acc + item.price,0)

console.log(totalPrice);