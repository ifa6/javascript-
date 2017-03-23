/*

题目描述
按所给的时间格式输出指定的时间
格式说明
对于 2014.09.05 13:14:20
yyyy: 年份，2014
yy: 年份，14
MM: 月份，补满两位，09
M: 月份, 9
dd: 日期，补满两位，05
d: 日期, 5
HH: 24制小时，补满两位，13
H: 24制小时，13
hh: 12制小时，补满两位，01
h: 12制小时，1
mm: 分钟，补满两位，14
m: 分钟，14
ss: 秒，补满两位，20
s: 秒，20
w: 星期，为 ['日', '一', '二', '三', '四', '五', '六'] 中的某一个，本 demo 结果为 五 
输入例子:
formatDate(new Date(1409894060000), 'yyyy-MM-dd HH:mm:ss 星期w')

输出例子:
2014-09-05 13:14:20 星期五*/
function formatDate(oDate, sFormation) {
    var year   = oDate.getFullYear()
    var month  = oDate.getMonth()
    var day    = oDate.getDate()
    var hour   = oDate.getHours()
    var minute = oDate.getMinutes()
    var second = oDate.getSeconds()
    var weekday= oDate.getDay()
    function form(num){
        return (num<10)?'0'+num:num
    }
    date=['日','一','二','三','四','五','六']
    var format={
        yyyy: year,
        yy:   year.toString().slice(-2),
        MM:   form(month+1),
        M:    month+1,
        dd:   form(day),
        d:    day,
        HH:   form(hour),
        H:    hour,
        hh:   form(hour%12),
        h:    hour%12,
        mm:   form(minute),
        m:    minute,
        ss:   form(second),
        s:    second,
        w:    date[weekday]
    }
    for(var key in format){
        sFormation=sFormation.replace(key,format[key])
    }
    return sFormation
    
}
