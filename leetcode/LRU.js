function LRU(capacity){
  this.capacity = capacity
  this.array1 = []
  this.array2 = []
  this.count = 0
}
LRU.prototype.get = function(key){
  this.flag =true
  for(var obj of this.array1){
    // console.log(obj.key)
    if(obj.key == key){
      this.flag=false
     // obj.count = this.count
     // console.log(obj.count)
      //return obj.value
     // console.log(this.array2)
      this.array2.push(obj)
    }
  }
  if(this.flag){
    return -1
  }
  var max =0
  var maxIndex=0
  //console.log('---------------',this.array2)
    for(var index in this.array2){
      if(this.array2[index].count >max)
        {
          max = this.array2[index].count
          maxIndex = index 
        }
    }
    obj = this.array2[maxIndex]

    console.log('array2\n',this.array2)
    obj.count = ++this.count
   // console.log(this.array1)
    var result = this.array2[maxIndex].value
    this.array2= []
    return result
  
}
LRU.prototype.put = function(key,value){
      this.flag=true
  if(this.array1.length<this.capacity){
    this.array1.push({key:key,value:value,count:++this.count})
    //console.log(this.array1+'----'+this.array1.length)
  }else{
    var min = 9999
    var minindex=0
    for(var index in this.array1){
      if(this.array1[index].count <min)
        {
          min = this.array1[index].count
          minindex = index 
        }
    }
    //console.log('min--'+min+'----minindex'+minindex)
    this.array1[minindex] = {key:key,value:value,count:++this.count}
  }
    console.log('array1\n',this.array1)
  //console.log(this.count)
}
var cache = new LRU(2)
//cache.put(1,1)
//console.log(1)

//cache.put(2,2)
//console.log(1)
//console.log(cache.get(1))
//cache.put(3,3)
console.log(cache.get(2))
cache.put(2,6)
console.log(cache.get(1))
cache.put(1,5)
cache.put(1,2)
console.log(cache.get(1))
console.log(cache.get(2))
//cache.put(4,4)
//console.log(cache.get(1))
//console.log(cache.get(3))
//console.log(cache.get(4))
