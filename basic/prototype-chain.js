/**
 *author:doulu
 *create time:2018-08-08
 *description:原型链
 * JavaScript中的每个对象都有一个_proto_属性，我们称之为原型，而原型的值也是一个对象，因此它也有自己的原型，这样就串联起来了一条原型链，
 * 原型链的链头是object,它的prototype比较特殊，值为null。
 原型链的作用是用于对象继承，
 函数A的原型属性(prototype property)是一个对象，当这个函数被用作构造函数来创建实例时，
 该函数的原型属性将被作为原型赋值给所有对象实例，
 比如我们新建一个数组，数组的方法便从数组的原型上继承而来。
 当访问对象的一个属性时, 首先查找对象本身, 找到则返回; 若未找到,
 则继续查找其原型对象的属性(如果还找不到实际上还会沿着原型链向上查找, 直至到根). 只要没有被覆盖的话, 对象原型的属性就能在所有的实例中找到，若整个原型链未找到则返回undefined
 */
function Person(name){
    this.name = name;
}
var p1 = new Person('louis');

console.log(Person.prototype);//Person原型 {constructor: Person(name),__proto__: Object}
console.log(p1.prototype);//undefined

console.log(Person.__proto__);//空函数, function(){}
console.log(p1.__proto__ == Person.prototype);//true
function Dog(name){
    this.name = name;
}
Dog.prototype.callName = function (){
    console.log(this.name,"wang wang");
};

let dog1 = new Dog("Three Mountain");

dog1.printName = function (){
    console.log(this.name);
};

dog1.callName();  // Three Mountain wang wang

dog1.printName(); // Three Mountain

/**
 * http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html
 */
/**
 * 原型对象：
 * 在 JavaScript 中，每当定义一个对象（函数也是对象）时候，对象中都会包含一些预定义的属性。
 * 其中每个函数对象都有一个prototype 属性，这个属性指向函数的原型对象。
 * 【每个对象都有 __proto__ 属性，但只有函数对象才有 prototype 属性】
 * 【实例的构造函数属性（constructor）指向构造函数】
 * 【person1.constructor == Person
 Person.prototype.constructor == Person】
 【原型对象（Person.prototype）是 构造函数（Person）的一个实例】
 */
function Person() {}
/*Person.prototype.name = 'Zaxlct';
Person.prototype.age  = 28;
Person.prototype.job  = 'Software Engineer';
Person.prototype.sayName = function() {
    alert(this.name);
};*/
Person.prototype = {
    name:  'Zaxlct',
    age: 28,
    job: 'Software Engineer',
    sayName: function() {
        console.log(this.name);
    }
};
let person1 = new Person();
person1.sayName(); // 'Zaxlct'
let person2 = new Person();
person2.sayName(); // 'Zaxlct'
console.log(person1.sayname == person2.sayname); //true


function Fn() {
    this.a = 0;
    this.b = function() {
        console.log(this.a)
    }
}
Fn.prototype = {
    b: function() {
        this.a = 20;
        console.log(this.a);
    },
    c: function() {
        this.a = 30;
        console.log(this.a);
    }
};
let myfn = new Fn();
myfn.b();
myfn.c();
//0,30