/**
 *author:doulu
 *create time:2018-08-08
 *description:在 js 里 this 是一个指向函数执行环境的指针。
 * this 永远指向最后调用它的对象，并且在执行时才能获取值，定义是无法确认他的值
 */
// 'use strict';
//函数调用中的this
let numbers1 = {
    numberA: 5,
    numberB: 10,
    sum: function () {
        console.log(this === numbers1); // => true
        function calculate() {
            // this is window or undefined in strict mode
            console.log(this === numbers1); // => false
            return this.numberA + this.numberB;
        }
        return calculate();//函数调用this为全局对象
    }
};
numbers1.sum(); // => NaN or throws TypeError in strict mode
console.log(numbers1.sum());


let numbers2 = {
    numberA: 5,
    numberB: 10,
    sum: function () {
        console.log(this === numbers2); // => true
        function calculate() {

            console.log(this === numbers2); // => true
            return this.numberA + this.numberB;
        }

        //使用call(this)修改calculate函数的上下文,将calculate函数上下文变为numbers2
        return calculate.call(this);
    }
};
numbers2.sum(); // => 15
console.log(numbers2.sum());


//方法是作为对象的属性存储的函数：
//方法调用
let myOBJ = {
    myFun: function () {
        return 'hello world';
    }
};
let mes = myOBJ.myFun();
console.log(mes);

//方法调用中的this
//this 是拥有这个方法的对象
let calc = {
    num: 0,
    increment: function () {
        console.log(this === calc); // => true
        this.num += 1;
        return this.num;
    }
};
// method invocation. this is calc
calc.increment(); // => 1
calc.increment(); // => 2
console.log(calc.increment());//=>3


/*
this 指向最后调用它的对象，只有执行时才知道
 */
let a = {
    name : "A",
    fn : function (){
        console.log (this.name);
    }
};
//a 调用了fn() 所以此时this为a
a.fn(); // this === a
a.fn.call ({name : "B"}); // this === {name : "B"}

let fn1 = a.fn;
//虽然指定fn1 = a.fn，但是调用是有window调用，所以this 为window
fn1();// this === window

