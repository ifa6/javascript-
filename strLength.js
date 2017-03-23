/*
题目描述
如果第二个参数 bUnicode255For1 === true，则所有字符长度为 1
否则如果字符 Unicode 编码 > 255 则长度为 2 
输入例子:
strLength('hello world, 牛客', false)

输出例子:
17
*/

function strLength(s, bUnicode255For1) {
	if(bUnicode255For1){
        return s.length
    }else{
        var length=0
        for(var i=0;i<s.length;i++){
            (s.charCodeAt(i)>255)?length=length+2:length++
        }
        
    }
    return length
}
