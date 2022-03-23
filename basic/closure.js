/**
 *author:doulu
 *create time:2018-08-08
 * 闭包
 *description:能够读取其他函数内部变量的函数。
 * 在 js 中只有函数内部的子函数才能读取局部变量。所以可以简单的理解为：定义在内部函数的函数。
 *
 * 用途：
 * 1、读取函数内部的变量
 * 2、让变量值始终保持在内存中
 */
function f1(){
    let n=999;
    function f2(){
        console.log(n);
    }
    return f2;
}
let result=f1();
result(); // 999

function Count(){
    let n = 0;
    this.fun = function () {
        // return n++;
        return ++n;
    };
}
let c = new Count();
console.log(c.fun(),c.fun());//1,2


