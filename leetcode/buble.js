function buble(arr){
  console.log('--------------最传统的冒泡排序-----')
  var begin = new Date().getTime()
  var length = arr.length
  var temp = null
  for(var i =0;i< length;i++){
    for(var j = 0;j <=length-i;j++){
        if(arr[j]>arr[j+1]){
          temp = arr[j]
          arr[j] = arr[j+1]
          arr[j+1] = temp
        }
    }
  }
  var end = new Date().getTime()
  var time = end - begin
  console.log(`所用时间为：${time}ms`)
  return arr
}
function buble2(arr){
  console.log('--------------改进的冒泡排序-----')
  var begin = new Date().getTime()
  var length = arr.length,
      temp = null,
      i=length-1,
      pos=0
  while(i>0){
      for(var j=0;j<length;j++){
        if(arr[j]>arr[j+1]){
          temp = arr[j]
          arr[j]=arr[j+1]
          arr[j+1]=temp
          pos = j
        }
      }
      i = pos
  }
  var end = new Date().getTime()
  var time = end - begin
  console.log(`所用时间为：${time}ms`)
  return arr
}
function selectSort(arr){
  var length = arr.length
  var minIndex,temp
  for(var i=0;i<length-1;i++){
    minIndex = i
    for(var j=i+1;j<length;j++){
      if(arr[j]<arr[minIndex]){
        minIndex = j
      }
    }
    temp = arr[i]
    arr[i]=arr[minIndex]
    arr[minIndex]=temp
  }
  return arr
}
function insertionSort(arr){
  var length = arr.length,
      key,j
  for(var i=1;i<length;i++){
    key = arr[i]
    j = i-1
    while(j>=0&&arr[j]>key){
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = key
  }
  return arr
}
function binaryinsertionSort(arr){
  var length = arr.length
  for(var i =1;i<length;i++){
    var left =0,
        right= i-1,
        key = arr[i]
    while(left <= right){
    var mid = parseInt((left+right)/2)
        if(arr[mid]>key){
          right = mid -1
        }else{
          left = mid +1
        }
    }
    for(var j = i-1;j>=left;j--){
      arr[j+1]=arr[j]
    }
    arr[left] = key
  }
  return arr
}
function shellSort(arr){
  var length = arr.length,
    temp,
    gap = 1
  console.time('希尔排序耗时:')
  while(gap<length/5){
    gap = gap*5+1
  }
  for(gap;gap>0;gap = Math.floor(gap/5)){
    for(var i = gap;i<length;i++){
      temp = arr[i]
      for(var j = i - gap;j>=0&&arr[j]>temp;j-=gap){
        arr[j+gap] = arr[j]
      }
      arr[j+gap] = temp
    }
  }
  return arr
}
function quickSort(array,left,right){
  if(left<right){
    var x = array[right],i=left-1,temp
    for(var j =left,j<=right;j++){
      if(array[j]<=x){
        i++;
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
    }
    quickSort(array,left,i-1)
  }
}
var arr = [12,9,5,6,11,30,22,1,3,7,50,23,26,28,93,15,46]
//console.log(buble(arr))
//console.log(buble2(arr))
//console.log(selectSort(arr))
//console.log(insertionSort(arr))
console.log(shellSort(arr))
