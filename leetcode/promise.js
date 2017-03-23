function promise(fn){
  var value = null
  var self = this
  self._resolves=[]
  self._rejects =[]
  self._status = 'PENDING'
  self.then=function(onfulfilled){
    return new promise(function(resolve){
      function handle(value){
       var ret = typeof onfulfilled === 'function' &&onfulfilled(value)||value
        if(ret && ret['then'] === 'function'){
            ret.then(function(value){
              resolve(value)
            })
        }else {
          resolve(ret)
        }
      }
      if(self._status === 'PENDING')
        self._resolves.push(handle)
      else if(self._status === 'FULFILLED')
        handle(value)
    })
  }
  function resolve(val){
    setTimeout(function(){     //确保执行之前then全部执行完
      self._status = 'FULLFILED'
      self._resolves.forEach(function(callback){
	  callback(val)
	})
	},0)
  }
  function reject(reson){
  
  }
  try{
    fn(resolve,reject)
  }catch(e){
    throw e
  }
}
/*function Promise(fn) {
    var promise = this,
        value = null;
        promise._resolves = [];
        promise._status = 'PENDING';

    this.then = function (onFulfilled) {
        return new Promise(function(resolve) {
            function handle(value) {
                var ret = typeof onFulfilled === 'function' && onFulfilled(value) || value;
                if( ret && typeof ret ['then'] == 'function'){
                    ret.then(function(value){
                       resolve(value);
                    });
                } else {
                    resolve(ret);
                }
            }
            if (promise._status === 'PENDING') {
                promise._resolves.push(handle);
            } else if(promise._status === FULFILLED){
                handle(value);
            }
        })
        
    };


    function resolve(value) {
        setTimeout(function(){
            promise._status = "FULFILLED";
            promise._resolves.forEach(function (callback) {
                value = callback.call(promise, value);
            })
        },0);
    }

    fn(resolve);
}*/
function fn1(resolve,reject){
  setTimeout(function(){
    console.log('步骤一:执行')
    resolve('1')
  },1000)
}
function fn2(resolve,reject){
  setTimeout(function(){
    console.log('步骤二:执行')
    resolve('2')
  },500)
}
//main

new Promise(fn1).then(function(val){
  console.log(val)
  return new Promise(fn2)
}).then(function(val){
  console.log(val)
  return 33
}).then(function(val){
  console.log(val)
})
// 先把fn1添加到resolves中，接着调用then方法依次把function放进队列中，执行到任务队列末尾，调用fn1的settimeout函数，输出'步骤一:执行'，接着调用resolve('1')。
// 开始执行callback队列中的calback，
/*function Promise(fn){
  var callback
  this.then = function(done){
    callback = done
  }
  function resolve(){
    callback()
  }
  fn(resolve)
}
function Promise(fn){
  var promise = this
      value = null
      promise._reason = null
      promise._resolves = []
      promise._rejects = []
      promise._status = 'PENDING'
  this.then = function(onFulfilled,onRejected){
      return new Promise(function(resolve,reject){
        function handle(value){
          var ret = typeof onFulfilled ==='function' &&onFulfilled(value)||value
         if(ret && typeof ret['then'] == 'function'){
          ret.then(function(value){
            resolve(value)
          })
         }else{
          resolve(ret)
         }
        }
        function errback(reason){
          reason = isFunction(onRejected)&& onRejected(reason)||reason
          reject(reason)
        }
        if(promise._status === 'PENDING'){
          promise._resolves.push(handle)
          promise._rejects.push(errback)
        }else if(promise._status ==='FULFILED'){
          handle(value)
        }else if(promise._status==='REJECTED'){
          errback(promise._reason)
        }
      })
  }
  function resolve(value){
   setTimeout(function(){
    promise._status = 'FULFILED'
    promise._resolves.forEach(function(callback){
      value=callback(value)
      })
    },0)
   }
   function reject(value){
   setTimeout(function(){
    promise._status = 'REJECTED'
    promise._rejects.forEach(function(callback){
      promise._reason = callback(value)
    })
   },0)
   }
  fn(resolve)
}*/
