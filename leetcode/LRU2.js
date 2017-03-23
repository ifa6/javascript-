var LRUCache = function(capacity){
  this.cache = {}
  this.size = 0
  this.capacity = capacity
  this.beg = null
  this.end = null
}
LRUCache.prototype.get = function(key){
  if(!this.cache[key]){
    return =1
  }
  var node = this.cache[key]
  var value = node.value[key]
  if(node == this.beg){
    return value
  }
  if(node == this.end){
    this.end = node.prev
  }else{
    node.prev.next = node.next
    node.next.prev = node.prev
  }
  node.prev = null
  node.next = this.beg
  this.beg.prev = node
  this.beg = node
  return value
}
LRUCache.prototype.put = function(key,value){
  if(this.cache[key]){
    this.get(key)
    this.cache[key].value = value 
  } else {
    var node = {key:key,value:value,prev:null,next:null}
    this.size++
    if(!this.beg){
      this.beg = node
      this.end = node
    }else{
      node.next = this.beg
      this.beg.prev = node
      this.beg = node
    }
    if(this.size>this.capacity){
      var newEnd = this.end.prev
      delete this.cache[this.end.key]
      this.end = newEnd
    }
    this.cache[key] = node
  }
}

