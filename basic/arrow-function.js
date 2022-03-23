/**
 *author:doulu
 *create time:2018-08-12
 *description:箭头函数
 * https://www.cnblogs.com/biubiuxixiya/p/8610594.html
 * 1、函数体内的this对象，是定义时所在的对象
 * 2、不能用作构造函数（不能new）
 * 3、不能使用arguments对象（用rest参数代替）
 * 4、不能使用yield命令（所以不能用作generator函数）
 */
let obj = {
    a: 10,
    b: () => {
        console.log(this.a); // undefined
        console.log(this); // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
    },
    c: function() {
        console.log(this.a); // 10
        console.log(this); // {a: 10, b: ƒ, c: ƒ}
    }
};
obj.b();
obj.c();
let obj1 = {
    a: 10,
    b: function(){
        console.log(this.a); //10
    },
    c: function() {
        return ()=>{
            console.log(this.a); //10
        }
    }
};
obj1.b();
obj1.c()();


let FunConstructor = () => {
    console.log('lll');
};
// let fc = new FunConstructor();//报错

function A(a){
    console.log(arguments);
}
A(1,2,3,4,5,8);  //  [1, 2, 3, 4, 5, 8, callee: ƒ, Symbol(Symbol.iterator): ƒ]

let B = (b)=>{
    console.log(arguments);
};
B(2,92,32,32);   // Uncaught ReferenceError: arguments is not defined

let C = (...c) => {
    console.log(c);
};
C(3,82,32,11323);  // [3, 82, 32, 11323]

let obj2 = {
    a: 10,
    b: function(n) {
        let f = (n) => n + this.a;
        return f(n);
    },
    c: function(n) {
        let f = (n) => n + this.a;
        let m = {
            a: 20
        };
        return f.call(m,n);
    }
};
console.log(obj2.b(1));  // 11
console.log(obj2.c(1)); // 11

//箭头函数没有原型属性
let a = ()=>{
    return 1;
};

function b(){
    return 2;
}
console.log(a.prototype);  // undefined
console.log(b.prototype);   // {constructor: ƒ}