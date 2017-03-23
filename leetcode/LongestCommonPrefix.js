/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
   if(!strs||!strs[0])
    return ""
   var minlength = strs[0].length
    var minindex  = 0
    var tempStr=""
    var flag = true
    if(strs.length==1)
      return strs[0]
    strs.forEach(function(e,i){
        minlength = Math.min(minlength,e.length)
        if(e.length==minlength)
          minindex = i
    })
   while(flag){
  
    for(var index in strs){
      if(!strs[index]){
        return ""
        }
        if(index!=minindex){
          tempStr =strs[index].slice(0,minlength)
          if(tempStr != strs[minindex]){
              minlength--
              strs[minindex] = strs[minindex].slice(0,minlength)
              flag=true
              break
          }else{
            flag = false
          }
        }
    }
   }
   return tempStr
};
console.log(longestCommonPrefix(["flower","flow","fl"]))
