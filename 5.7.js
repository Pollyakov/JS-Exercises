//return the length of the shortest word(s).
const shortestIs = (str) =>{
   let arr = str.split(' ');
   let lengths = arr.map(w => w.length);
   let min = Math.min(...lengths);
   return min;
};
console.log(shortestIs('privet MEdved ura'));

//Given a string of words, return the longest word[s]
const longest = (str) =>{
    let arr = str.split(' ');//[ 'privet', 'MEdved', 'ura' ]
    let lengths = arr.map(w => w.length);//[ 6, 6, 3 ]
    // let max = Math.max(...lengths);
    let k = arr.indexOf(Math.max(...lengths));
    console.log(k);
    return arr[k];
    
 };
 console.log(longest('privet MEdved ura'));