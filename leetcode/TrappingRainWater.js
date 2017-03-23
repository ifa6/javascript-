var trap=function(height) {
    var maxIndex=0
    var max = 0
    for(var index in height){
      if(height[index]>max){
        max = height[index]
        maxIndex = index
      }
    }
    //console.log(max+'-----'+maxIndex)
    var area = 0
    var root = height[0]
    for(var i = 0; i<maxIndex;i++){
      if(root<height[i])
        root = height[i]
      else area += (root -height[i])
    }
    var n = height.length
    for(i = n-1,root = height[n-1];i>maxIndex;--i){
      if(root<height[i])
        root = height[i]
      else 
        area += (root-height[i])
    }
    return area
};
var height = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(height))
