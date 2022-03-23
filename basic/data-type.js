/**
 *author:doulu
 *create time:2018-08-15
 *description:
 * 基本数据类型：undefined、null、boolean、string、number
 * 复杂数据类型：object
 * typeof检查基本数据类型
 *引用类型：Object、Array、Date、RegExp、Function
 * 基本包装类型：Number、String、Boolean
 */
console.log(typeof undefined);//undefined
console.log(typeof null); //object
console.log(typeof Boolean); //function
console.log(typeof String);//function
console.log(typeof Number);//function
console.log(typeof Object);//function
/*确定一个值是哪种基本类型用typeof*/
/*确定一个值是哪种引用类型用instanceof*/
/*所有引用类型的值都是object的实例*/
//object instanceof AFunction
// res = variable instanceof constructor
let arr = [1,2];
let date = new Date();
console.log( arr instanceof Object);//true
console.log( arr instanceof Array);//true
console.log( date instanceof Object);//true

//Object类型是所以它的实例基础，也就是Object类型具有的所有属性和方法，同样存在于更具体的对象中
/**
 * constructor
 * hasOwnProperty(prototypeName)给定的属性在当前实例对象中是否存在
 * valueOf()返回值通常与toString()方法返回值相同
 * isProptotypeOf(object)传入的对象是否是当前对象的原型
 * 【prototypeObj.isPrototypeOf(object)】
 * 原型对象的prototype里面的属性和方法是共享的，而构造函数里面的属性和方法则是独立的
 */
let obj = {
    name:'doulu',
    getFisrt:'DL'
};
let oobj = {
    name:'lucy'
};
function fname(name) {
    this.name = 'DL'
}
fname.prototype.lastName = 'LU';
let f1 = new fname('d');

console.log(obj.hasOwnProperty('name'),obj.hasOwnProperty('age'));
console.log(obj.valueOf());

console.log(fname.isPrototypeOf(f1));//false
console.log(fname.prototype.isPrototypeOf(f1));//true
console.log(fname.prototype == f1.__proto__);//true
