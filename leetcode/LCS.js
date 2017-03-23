function lcs(str1,str2){
  var m = str1.length
  var n = str2.length
  var c = Array.from(new Array(m))
  for(var value in c)
    c[value] = new Array(n).fill(0)
  //console.log(c)
  for(var i =1; i < m; i++){
    for(var j = 1; j < n; j++){
      if(str1[i] == str2[j]){
        c[i][j] = c[i-1][j-1]+1
      }else{
        c[i][j]=Math.max(c[i-1][j],c[i][j-1])
      }
    }
  }
  return c[m-1][n-1]+1
}
console.log(lcs("aaaaaaa","aaaabba"))
//console.log(new Array(5).fill(5))
