/*
题目描述
获取 url 中的参数
1. 指定参数名称，返回该参数的值 或者 空字符串
2. 不指定参数名称，返回全部的参数对象 或者 {}
3. 如果存在多个同名参数，则返回数组 
输入例子:
getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe', 'key')

输出例子:
[1, 2, 3]
*/
function getUrlParam(sUrl, sKey) {
    var reg = /(\w+)=(\w+)&*/g;
    // 结果集保存
    var result = {};
    var temp;
    var key, value;
 
    while(temp = reg.exec(sUrl)) {
        key = temp[1];
        value = temp[2];
 
        if (result[key] && !(result[key] instanceof Array)) {
            result[key] = [result[key], value];     // 如果发现了第二个同名参数,则从字符串变为数组
        } else if (result[key] instanceof Array) {
            result[key].push(value);    // 已经是数组,又找到了,就push进去
        } else {
            result[key] = value;    // 第一次,还是普通保存
        }
    }
 
    if (sKey) {
        return result[sKey] ? result[sKey] : '';    // 为了避免undefined的情况
    } else {
        return result;  // 返回全部的对象参数
    }
}
