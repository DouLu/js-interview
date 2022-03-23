/**
 *author:doulu
 *create time:2018-08-12
 *description:https://blog.csdn.net/sum_tw/article/details/53998768
 * 动态规划法求数组中子集的和最大的那个子集的和
 */
function maxSubset() {
    let arr = [-9,1,3,5,-1,7,-5,3,1];
    let max = arr[0];
    let tempValue = 0, x=0 ,y=0;

    for(let i=0;i<arr.length-1;i++){
        tempValue = arr[i];

        for(let j=i+1;j<arr.length;j++){
            tempValue += arr[j];

            if(max<tempValue){
                max=tempValue;
                x=i;
                y=j;
            }
        }
    }
    console.log(x+" "+y+" "+max);
}
maxSubset();

/*如果用函数f(i)表示以第i个数字结尾的子数组的最大和，那么我们需要求出max(f[0...n])。
我们可以给出如下递归公式求f(i)
     |-- array[i] 如果i==0或者f(i-1)<0
f(i)=|
     |-- f(i-1) + array[i] 如果f(i-1)>0
这个公式的意义：
   当以第(i-1)个数字为结尾的子数组中所有数字的和f(i-1)小于0时，如果把这个负数和第i个数相加，得到的结果反而比第i个数本身还要小，所以这种情况下最大子数组和是第i个数本身。
 如果以第(i-1)个数字为结尾的子数组中所有数字的和f(i-1)大于0，与第i个数累加就得到了以第i个数结尾的子数组中所有数字的和。
*/
function maxSubset1() {
    let arr = [-9,1,3,5,-1,7,-5,3,1];
    let len = arr.length;
    let c = new Array(len);//引入一个数组
    let max = -1000;//用来记录数组c[]中的最大值
    let start = 0;//记录数组中子数组的最大和的开始位置
    let end = 0;//记录数组中子数组的最大和的结束位置
    let tmp = 0;//中间变量
    for (let i = 1; i < len; ++i) {
        if (c[i - 1] > 0) {
            c[i] = c[i - 1] + arr[i];
        } else {
            c[i] = arr[i];
            tmp = i;
        }
        if (c[i] > max) {
            max = c[i];
            start = tmp;
            end = i;
        }
    }
    console.log(start+"~"+end+"Max is:"+max);
}
maxSubset1();