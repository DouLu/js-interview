/**
 *author:doulu
 *create time:2018-08-15
 *description:https://www.cnblogs.com/xiaohuochai/p/5773183.html
 */
//setTimeout的第二个参数设置为0s，并不是立即执行函数的意思，只是把函数放入异步队列。
// 浏览器先执行完同步队列里的任务，才会去执行异步队列中的任务
let Timer = setTimeout(function(){
    console.log(2);
},1000);

setTimeout(function () {
    console.log(1);
},0);

console.log(0);

/**使用setInterval()的问题在于，定时器代码可能在代码再次被添加到队列之前还没有完成执行，
 * 结果导致定时器代码连续运行好几次，而之间没有任何停顿。
 * 为了避免setInterval()定时器的问题，可以使用链式setTimeout()调用
 */
{
    let i = 0;
    let timer1 = setInterval(function () {
        if (i > 10) {
            clearInterval(timer1);
            return false;
        }
        console.log(new Date());
        i++;
    }, 1000);
}
{
    let i=0;
    setTimeout(function fn(){
        if( i<=10){
            setTimeout(fn,1000);
        }
        i++;
        console.log(new Date());
    },1000);
}
