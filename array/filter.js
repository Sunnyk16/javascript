// let arr=[1,2,3,4,5]
// let a2=arr.filter((value)=>{
//     return value<3;
// })
// console.log(a2);

// const arr1=[-5,3,4,5,-8,2,-9,];
// const Positivenum= arr1.filter((num,i)=>{
//     if(num>0){
//         return true
//     }
    
// })
// console.log(Positivenum);

// const numbers = [-1, 5, -2, 10, 7, -6, 8]

// const positiveNumber = numbers.filter((num, i)=>{
//     if(num>0){
//         return true
//     }
// })

// console.log(positiveNumber)

const numbers = [-1, 5, -2, 10, 7, -6, 8]

const positiveNumber = numbers.filter((num, i)=>{
    if(num>0){
        return true
    }
})
console.log(positiveNumber);

const negativenumber = numbers.filter((num, i)=>{
    if(num<0){
        return true
    }
})

console.log(`negative:`,negativenumber);