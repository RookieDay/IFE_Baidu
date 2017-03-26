##
- 在上一任务基础上继续JavaScript的体验
 + 接触一下JavaScript中的高级选择器
 + 学习JavaScript中的数组对象遍历、读写、排序等操作
 + 学习简单的字符串处理操作

- 任务注意事项
 + 实现简单功能的同时，请仔细学习JavaScript基本语法、事件、DOM相关的知识
 + 请注意代码风格的整齐、优雅
 + 代码中含有必要的注释
 + 建议不使用任何第三方库、框架
 + 示例代码仅为示例，可以直接使用，也可以完全自己重写

- 在线学习参考资料
 + [JavaScript入门篇](http://www.imooc.com/learn/36)
 + [MDN JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)

 
 - 一道坑人的面试题目
 map() 方法创建一个新数组，其结果是该数组中的每个元素调用一个提供的函数。
 ```
 let numbers = [1, 5, 10, 15];
let roots = numbers.map(function(x) {
    return x * 2;
});
// roots is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]

let numbers = [1, 4, 9];
// let roots = numbers.map(Math.sqrt);
let roots = numbers.map(function(x){
    return Math.sqrt(x);
});
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]
 ```

 语法
const new_array = arr.map(callback[, thisArg])

参数
callback
生成新数组元素的函数，使用三个参数：
currentValue
callback 的第一个参数，数组中正在处理的当前元素。
index
callback 的第二个参数，数组中正在处理的当前元素的索引。
array
callback 的第三个参数，map 方法被调用的数组。
thisArg
可选的。执行 callback 函数时 使用的this 值。

返回值
一个新数组，每个元素都是回调函数的结果。


描述
map 方法会给原数组中的每个元素都按顺序调用一次 callback 函数。callback 每次执行后的返回值（包括 undefined）组合起来形成一个新数组。 callback 函数只会在有值的索引上被调用；那些从来没被赋过值或者使用 delete 删除的索引则不会被调用。
callback 函数会被自动传入三个参数：数组元素，元素索引，原数组本身。
如果 thisArg 参数有值，则每次 callback 函数被调用的时候，this 都会指向 thisArg 参数上的这个对象。如果省略了 thisArg 参数,或者赋值为 null 或 undefined，则 this 指向全局对象 。
map 不修改调用它的原数组本身（当然可以在 callback 执行时改变原数组）。
使用 map 方法处理数组时，数组元素的范围是在 callback 方法第一次调用之前就已经确定了。在 map 方法执行的过程中：原数组中新增加的元素将不会被 callback 访问到；若已经存在的元素被改变或删除了，则它们的传递到 callback 的值是 map 方法遍历到它们的那一时刻的值；而被删除的元素将不会被访问到。


通常情况下，map 方法中的 callback 函数只需要接受一个参数，就是正在被遍历的数组元素本身。但这并不意味着 map 只给 callback 传了一个参数。这个思维惯性可能会让我们犯一个很容易犯的错误。
```
// 下面的语句返回什么呢:
["1", "2", "3"].map(parseInt);
// 你可能觉的会是[1, 2, 3]
// 但实际的结果是 [1, NaN, NaN]

// 通常使用parseInt时,只需要传递一个参数.
// 但实际上,parseInt可以有两个参数.第二个参数是进制数.
// 可以通过语句"alert(parseInt.length)===2"来验证.
// map方法在调用callback函数时,会给它传递三个参数:当前正在遍历的元素, 
// 元素索引, 原数组本身.
// 第三个参数parseInt会忽视, 但第二个参数不会,也就是说,
// parseInt把传过来的索引值当成进制数来使用.从而返回了NaN.

/*
//应该使用如下的用户函数returnInt

function returnInt(element){
  return parseInt(element,10);
}

["1", "2", "3"].map(returnInt);
// 返回[1,2,3]
*/
```


parseInt() 函数可解析一个字符串，并返回一个整数。

语法
parseInt(string, radix)
参数	描述
string	必需。要被解析的字符串。
radix	
可选。表示要解析的数字的基数。该值介于 2 ~ 36 之间。
如果省略该参数或其值为 0，则数字将以 10 为基础来解析。如果它以 “0x” 或 “0X” 开头，将以 16 为基数。
如果该参数小于 2 或者大于 36，则 parseInt() 将返回 NaN。

返回值
返回解析后的数字。

说明
当参数 radix 的值为 0，或没有设置该参数时，parseInt() 会根据 string 来判断数字的基数。

举例，如果 string 以 "0x" 开头，parseInt() 会把 string 的其余部分解析为十六进制的整数。如果string 以 0 开头，那么 ECMAScript v3 允许 parseInt() 的一个实现把其后的字符解析为八进制或十六进制的数字。如果string 以 1 ~ 9 的数字开头，parseInt() 将把它解析为十进制的整数。
