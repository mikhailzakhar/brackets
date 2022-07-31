module.exports = function check(str, bracketsConfig) {
    let arr = [];
    
    for(let i=0; i<str.length; i++) {
      for(let j=0; j<bracketsConfig.length; j++) {
        if (str[i] === bracketsConfig[j][0] && str[i] === bracketsConfig[j][1]) {
          if (arr.includes(str[i])) {
            symb = arr.pop();
            if (symb != bracketsConfig[j][0])
              return false;           
          }
          else {
            arr.push(str[i]);          
          }
        }
  
        if (str[i] === bracketsConfig[j][0] && str[i] !== bracketsConfig[j][1])
          arr.push(str[i]);
        if (str[i] !== bracketsConfig[j][0] && str[i] === bracketsConfig[j][1]) {
          symb = arr.pop();
          if (symb != bracketsConfig[j][0])
            return false;        
        }
      }
    }
    
    if(arr.length === 0)
      return true;
    else
      return false;
  
}
