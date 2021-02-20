const maskify = (str) => {
   let last_four = str.slice(-4);
   let masked  = [];
   for (let i=0; i<=str.length-5; i++){
       masked.push("#");
   };
   return masked.concat(last_four);
   return masked;
};
console.log(maskify("123456789"));