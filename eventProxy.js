/*
<ul class="ulbtn">
  <li><button class="btn">1</button></li>
  <li><button class="btn">2</button></li>
  <li><button class="btn">3</button></li>
  <li><button class="btn">4</button></li>
</ul>
*/
//使用事件代理
/*
  var ulbtn = document.querySelectorAll('.ulbtn')
  ulbtn.addEventListener("click",function(e){
    var button = e.target
    ....
  })
*/
function eventProxy(element,targetSelector,type,handler){
  element.addEventListener(type,function(event){
    var targets = Array.prototype.slice.call(element.querySelectorAll(targetSelector))
    var target = event.target
    if(targets.indexOf(target)!=-1){
      return handler.apply(target,arguments)
    }
  },false)
}
