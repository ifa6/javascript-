var largestRectangleArea = function(heights) {
  var stack = []
  var i = 0
  var result = 0
  var j = 0
  while(i<heights.length){
    if(stack.length==0||heights[i]>=stack[stack.length-1]){
       stack.push(heights[i])
      // console.log('------'+stack)
    }else{
      var count = 0
      var stack_length = stack.length
      
      while(stack.length>0&&stack[stack.length-1]>heights[i]){
        count++
       // console.log(stack.length+'----'+stack[stack.length-1]+'-----'+heights[i])
       var top = stack.pop()
       //console.log('count--'+count)
        temp = count * top 
       //console.log('linshi---'+temp)
        if(result<temp){
          result = temp
        }
        j = stack.length
       // console.log(stack_length)
      }
      for(;j<stack_length+1;j++){
        stack.push(heights[i])
        //console.log(j)
      }
    }
    i++
       console.log('-----'+stack)
  }
  var count=0
    console.log(stack.length)
    console.log(stack+"-----")
  while(stack.length>0){
    count++
    var top = stack.pop()
    temp = count * top 
    if(result<temp){
      result = temp
    }
  }
  console.log(result)
}
var heights=[4,2,0,3,2,5]
largestRectangleArea(heights)
