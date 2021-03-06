/*封装函数 f，使 f 的 this 指向指定的对象 
输入例子:
bindThis(function(a, b){return this.test + a + b}, {test: 1})(2, 3)

输出例子:
6*/

function bindThis(f, oTarget) {
    return function(){
    return f.apply(oTarget,arguments)
    }
}

