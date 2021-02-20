// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"


const toCamelCase = (str) => {
    return str.split(/[,_-]+/).map( (s, i) => i !== 0 ? s.charAt(0).toUpperCase() + s.slice(1) : s).join('');
  };
console.log(toCamelCase("It's_cold-outside"));

