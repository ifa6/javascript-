/*题目描述
为 Array 对象添加一个去除重复项的方法 
输入例子:
[false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN].uniq()

输出例子:
[false, true, undefined, null, NaN, 0, 1, {}, {}, 'a']*/


Array.prototype.uniq = function () {
   
 return this.filter(function(it,i) {
         return it != it ? this.g = this.g == undefined :this.indexOf(it) == i;
     },this)
}
