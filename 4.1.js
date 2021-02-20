// “Write a function to return an n element in Fibonacci sequence”
//every number after the first
// two is the sum of the two preceding ones.”

// fib_seq = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

const findElement = (n) => {
    let arr = [0,1];
    for (let i = 2; i <= n; i++){
        arr[i] = arr[i-1]+arr[i-2];
        
    };
    return arr[n];
};
console.log(findElement(3));
console.log(findElement(7));

// let numbers= [2,5,8];
// const getAvarage = (numbers)=> {
//     const total = numbers.reduce( (accamulator, element) =>{
//         return accamulator+element;
//     }, 0,);

//     return total/numbers.length;
// };
// console.log(getAvarage(numbers));









