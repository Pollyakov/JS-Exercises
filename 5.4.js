function toWeirdCase(string){

    let stringWords = string.split(' ');
    let length = stringWords.length;
    
    for(let i = 0; i < length; i++)
    {
     stringWords[i] = wcase(stringWords[i]);
    }
    return stringWords.join(' ');
    };
    
    
    const wcase = (str) => {
    let newString = '';
      for( let c = 0; c < str.length; c++){
        newString += c % 2 ? str[c].toLowerCase() : str[c].toUpperCase();
      }
      return newString;
     };

     console.log(toWeirdCase( "String" ));