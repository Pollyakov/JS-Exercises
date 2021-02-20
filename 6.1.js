// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters
//  from a..z and A..Z.

const accum = (str) => {
    let arr = [...str];
    return arr.map((ch, i) => ch.toUpperCase() + ch.toLowerCase().repeat(i))
    .join('-');
};
console.log(accum("abcd"));

