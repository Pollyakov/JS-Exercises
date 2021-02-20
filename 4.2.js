// you need to create a fibonacci function
// that given a signature array/list, returns the first n elements - signature included of the so
// seeded sequence.

const returnTribonacci = (arr, n) => {

    let tribo = [...arr];
    for (let i = 3; i <= n; i++){
        tribo[i] = tribo[i-1]+tribo[i-2]+tribo[i-3];
    };
    return tribo;
};

console.log(returnTribonacci([1,1,1],7));
console.log(returnTribonacci([0,0,1],7));


