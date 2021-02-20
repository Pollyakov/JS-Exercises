const  repeat_str = (str, count) => {
    let rpt = '';
    for (let i = 0; i < count; i++) {
      rpt += str;
    }
    return rpt;
};
console.log(repeat_str("Ksenia", 3));