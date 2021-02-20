let arr = [[3,0],[6,2],[1,5],[2,2]];

const sleepingPeople = (arr)=>{
    let nightRiders = arr.reduce((peopleInside, busStop) => {
       return  peopleInside + busStop[0]-busStop[1]; 
    },0);
    return nightRiders;
};

console.log(sleepingPeople(arr));