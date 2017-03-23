function EventTarget(){
  this.handlers={} //用来存储事件相对应的callback
}
EventTarget.prototype={
  constructor:EventTarget,
  add(type,callback){
      if(!this.handlers[type]){
        this.handlers[type]=[callback]
        
      }else{
        this.handlers[type].push(callback)
      }
  },
  fire(type){
    console.log(this.handlers[type])
    if(this.handlers[type].length!=0 ){
      var handlers = this.handlers[type]
      for(var i=0;i<handlers.length;i++){
        handlers[i]()
      }
    }else{
      console.log(`no this ${type} function`)
    }
    
  },
  remove(type,handle){
    if(this.handlers[type] !=undefined){
      var handlers=this.handlers[type]
      
      for(var i=0;i<handlers.length;i++){
        if(handlers[i]==handler){
          break;
        }
      }
      handlers.splice(i,1)
    }else{
      console.log('error')
    }
  }
}
var event = new EventTarget()
var handler = function(){
  console.log('haha')
}
event.add('test',handler)
event.fire('test')
event.remove('test',handler)
event.fire('test')
