/**
 *author:doulu
 *create time:2018-08-08
 *description:作用域
 * 当执行一段JavaScript代码（全局代码或函数）时，JavaScript引擎会为其创建一个作用域又称为执行上下文（Execution Context），
 * 在页面加载后会首先创建一个全局的作用域，然后每执行一个函数，会建立一个对应的作用域，从而形成了一条作用域链。
 * 每个作用域都有一条对应的作用域链，链头是全局作用域，链尾是当前函数作用域。
 */
console.log(a) ; // undefined
var a = 1;
/**
 *分解步骤
var a;
console.log(a);  // undefined
a = 1;
*/

/**
 * 从当前作用域找，一直到全局作用域
 */
var color = "blue";
function c(){
    if(color==="blue"){
        color = "red";
    }else {
        color = "blue";
    }
}
c();
console.log(color);//red

/**
 * for if else 不能创造作用域
 * 只有函数才能制造作用域
 */
var name = "jack";
function d(){
    if(name==="jack"){
        var name = "tom";
        console.log(name);
    }else {
        console.log(name);//undefined
    }
}
d();
console.log(name);//jack

/*变量提升即将变量声明提升到它所在作用域的最开始的部分*/
(function(){
    console.log(name);//undefined
    if(typeof  name==='undefined'){
        var name = "tom";
        console.log(name);//tom
    }else {
        console.log(name);
    }
})();
console.log(name);//jack
