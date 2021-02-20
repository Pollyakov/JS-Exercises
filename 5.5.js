//Sam Harris => S.H

let toAbbr = (str)=> {

    let init = str.split(' ');
    let k = init.map(s=>s.charAt(0)).join('.');
    return k;

};
console.log(toAbbr("Ksenia Gountsova"));