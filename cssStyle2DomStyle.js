/*
题目描述
css 中经常有类似 background-image 这种通过 - 连接的字符，通过 javascript 设置样式的时候需要将这种样式转换成 backgroundImage 驼峰格式，请完成此转换功能
1. 以 - 为分隔符，将第二个起的非空单词首字母转为大写
2. -webkit-border-image 转换后的结果为 webkitBorderImage 
输入例子:
cssStyle2DomStyle('font-size')

输出例子:
fontSize
*/

function cssStyle2DomStyle(sName) {
	var arr = sName.split('-')
    arr = arr.filter(function(data){
        return data!=''
    })
    arr.forEach(function(data,index){
        if(index!=0)
        arr[index] = data[0].toUpperCase()+data.substr(1)
    })
    return arr.join('')
}
