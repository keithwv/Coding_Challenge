const { performance } = require('perf_hooks')
 
// function below will create 

const createRandomNumberList = (min, max) => {

    let numberList = [];
    while (numberList.length<max) {
    
    let random_number = Math.floor(Math.random()*(max-min+1))+min;
     if (!numberList.includes(random_number)) {
    numberList.push(random_number)
     }
    }
    return numberList
}
const start = performance.now()
const numberList = createRandomNumberList(1, 100000  )
const end = performance.now()
console.log(end-start)
console.log(numberList)
console.log(numberList.length)

const unique_values = new Set(createRandomNumberList(1,30)).size
 
console.log("number of unique numbers:", unique_values)
// const checkforduplications = (array) => {
//     console.log(new Set(array).size !== array.length)
//     return new Set(array).size !== array.length
// }

// // checkforduplications(numberList)

// let x = createRandomNumberList()
// console.log(x)


module.exports = createRandomNumberList

