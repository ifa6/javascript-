function evalRPN (tokens) {
  var number= new Array()
  for(var token of tokens){
    if(token[0]=='-'&&token.length>1){
    if(token[1].charCodeAt()>=48&&token[1].charCodeAt()<=57){
        number.push(parseInt(token))
      }
    }
    else if(token.charCodeAt()>=48&&token.charCodeAt()<=57){
      number.push(parseInt(token))
    }else{
      switch(token){
        //console.log(token)
        case '+':
        var number2 = number.pop()
        var number1 = number.pop()
        var result  = number1+number2
        number.push(parseInt(result))
        break
        case '-':
        var number2 = number.pop()
        var number1 = number.pop()
        var result  = number1-number2
        number.push(parseInt(result))
        break
        case '*':
        var number2 = number.pop()
        var number1 = number.pop()
        var result  = number1*number2
        number.push(parseInt(result))
        break
        case '/':
        var number2 = number.pop()
        var number1 = number.pop()
          var result  = number1/number2
        number.push(parseInt(result))
        break
      }
    }
  }
  return number[0]
};
var tokens = ['4','13','5','/','+']
console.log(evalRPN(tokens))
