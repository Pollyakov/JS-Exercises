//Given a string of words, return the longest word[s]
const longest = (str) =>{
    let arr = str.split(' ');//[ 'privet', 'MEdved', 'ura' ]
    let lengths = str.split(' ').map(w => w.length);//[ 6, 6, 3 ]
    let max = Math.max(...lengths);//6
    let k = lengths.indexOf(Math.max(...lengths));
    return arr[k];
 };
 console.log(longest('privet MEdved ura jbjhblkdfldkjbgldskfjbg'));