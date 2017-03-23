/*
题目描述
将 rgb 颜色字符串转换为十六进制的形式，如 rgb(255, 255, 255) 转为 #ffffff
1. rgb 中每个 , 后面的空格数量不固定
2. 十六进制表达式使用六位小写字母
3. 如果输入不符合 rgb 格式，返回原始输入 
输入例子:
rgb2hex('rgb(255, 255, 255)')

输出例子:
#ffffff
*/

function rgb2hex(sRGB) {
    var reg = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)/
    var flag = sRGB.match(reg)
    if(!flag){
        return sRGB
    }
    
   	var expression='#'
    for(var i=1;i<=3;i++){
    var temp = parseInt(flag[i])
    if(temp>=0&&temp<=255)
        expression+= (temp<16)?'0'+temp.toString(16):temp.toString(16)
    else 
        return sRGB
    }    	
    return expression
}
