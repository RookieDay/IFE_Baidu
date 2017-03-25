- Array 总结
 + Array.length
 + Array.prototype  属性表示 Array 构造函数的原型，并允许您向所有Array对象添加新的属性和方法。
 Array实例继承自 Array.prototype 。与所有构造函数一样，您可以更改构造函数的原型对象，以对所有 Array 实例进行更改。例如，可以添加新方法和属性以扩展所有Array对象。这用于 polyfilling， 例如。

鲜为人知的事实：Array.prototype 本身也是一个 Array。
    ```
    Array.isArray(Array.prototype); 
    // true
    Array.prototype 属性的属性特性：
    writable	false
    enumerable	false
    configurable	false 
    ```
Array.prototype.constructor
所有的数组实例都继承了这个属性，它的值就是 Array，表明了所有的数组都是由 Array 构造出来的。
Array.prototype.length
上面说了，因为 Array.prototype 也是个数组，所以它也有 length 属性，这个值为 0，因为它是个空数组。

 + Array.from() 创建一个新的数组实例 可以使用类似的map函数 
 方法从一个类似数组或可迭代对象创建一个新的数组实例。
 ```
 const bar = ["a", "b", "c"];
Array.from(bar);
// ["a", "b", "c"]

Array.from('foo');
// ["f", "o", "o"]
 ```
 > 在 ES6 中， Class 语法允许我们为内置类型（比如 Array）和自定义类新建子类（比如叫 SubArray）。这些子类也会继承父类的静态方法，比如 SubArray.from()，调用该方法后会返回子类 SubArray 的一个实例，而不是 Array 的实例。

描述
Array.from() 允许你创建数组从：
    类数组对象（拥有一个 length 属性和若干索引属性的任意对象）   
    可遍历对象（你可以从它身上迭代出若干个元素的对象，比如有 Map 和 Set 等）
Array.from() 方法有一个可选参数 mapFn，让你可以在最后生成的数组上再执行一次 map 方法后再返回。也就是说 Array.from(obj, mapFn, thisArg) 就相当于 Array.from(obj).map(mapFn, thisArg), 除非创建的不是可用的中间数组。 这对一些数组的子类,如  typed arrays 来说很重要, 因为中间数组的值在调用 map() 时需要是适当的类型。

from() 的 length 属性为 1 。
```
// 将类数组对象（arguments）转换成数组
(function () {
    var args = Array.from(arguments);
    return args;
})(1, 2, 3);                            // [1, 2, 3]

// 将可迭代对象（Set 对象）转换成数组
Array.from(new Set(["foo", window]));       // ["foo", window]

// Map 对象也可以
var m = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(m);                          // [[1, 2], [2, 4], [4, 8]]  

// 字符串对象既是类数组又是可迭代对象
Array.from("foo");                      // ["f", "o", "o"]

// 使用 map 函数转换数组元素
Array.from([1, 2, 3], x => x + x);      // [2, 4, 6]

// 生成一个数字序列
Array.from({length:5}, (v, k) => k);    // [0, 1, 2, 3, 4]
```    

 + Array.isArray() 该方法适用于确定传递的值是否为Array。
 描述
如果对象是 Array ，则返回true，否则为false。
有关更多详细信息，请参阅文章以
[绝对精确度确定JavaScript对象是否为数组](http://web.mit.edu/jwalden/www/isArray.html)
Polyfill
假如不存在 Array.isArray()，则在其他代码之前运行下面的代码将创建该方法。
```
if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.protoype.toString.call(arg) === '[object Array]';
  };
}
```

 + Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
 Array.of() 和 Array 构造函数之间的区别在于处理整数参数：Array.of(7) 创建一个具有单个元素 7 的数组，而 Array(7) 创建一个包含 7 个 undefined 元素的数组。
 ```
Array.of(7);       // [7] 
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]
 ```
Polyfill
如果原生不支持的话，在其他代码之前执行以下代码会创建 Array.of() 。

if (!Array.of) {
  Array.of = function() {
    return Array.prototype.slice.call(arguments);
  };
}

 + concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
 ```
 let arr1 = ["a", "b", "c"];
let arr2 = ["d", "e", "f"];

let arr3 = arr1.concat(arr2);

console.log(arr3);
// results in a new array 
// [ "a", "b", "c", "d", "e", "f" ]

console.log(arr1);
// ["a", "b", "c"]

console.log(arr2);
// ["d", "e", "f"]
 ```

描述
concat 方法将创建一个新的数组，然后将调用它的对象(this 指向的对象)中的元素以及所有参数中的数组类型的参数中的元素以及非数组类型的参数本身按照顺序放入这个新数组,并返回该数组.

concat 方法并不修改调用它的对象(this 指向的对象) 和参数中的各个数组本身的值,而是将他们的每个元素拷贝一份放在组合成的新数组中.原数组中的元素有两种被拷贝的方式:

对象引用(非对象直接量):concat 方法会复制对象引用放到组合的新数组里,原数组和新数组中的对象引用都指向同一个实际的对象,所以,当实际的对象被修改时,两个数组也同时会被修改.
字符串和数字(是原始值,而不是包装原始值的 String 和 Number 对象): concat 方法会复制字符串和数字的值放到新数组里.
> 注意: 连接一个或多个数组（值）将不会改变原本的数组/值。进一步说，任何对新数组的操作都不会对原有的数组造成影响（仅当该元素不是对象的引用时），反之亦然。


连接两个数组

下面的代码演示两个数组合并为一个新数组:
```
var alpha = ["a", "b", "c"];
var numeric = [1, 2, 3];

// 组成新数组 ["a", "b", "c", 1, 2, 3]; 原数组 alpha 和 numeric 未被修改
var alphaNumeric = alpha.concat(numeric);
``

连接三个数组
下面的代码演示三个数组合并为一个新数组:
```
var num1 = [1, 2, 3];
var num2 = [4, 5, 6];
var num3 = [7, 8, 9];

// 组成新数组[1, 2, 3, 4, 5, 6, 7, 8, 9]; 原数组 num1, num2, num3 未被修改
var nums = num1.concat(num2, num3);
``

将非数组值合并到数组里
下面的代码演示将多个数组和多个非数组值合并为一个新数组:
```
var alpha = ['a', 'b', 'c'];

// 组成新数组 ["a", "b", "c", 1, 2, 3], 原alpha数组未被修改
var alphaNumeric = alpha.concat(1, [2, 3]);
```


 + copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小。
 ```
 ["alpha", "beta", "copy", "delta"].copyWithin(1, 2, 3);
// 0:"alpha" 1:"beta" 2:"copy" 3:"delta"
// ["alpha", "copy", "copy", "delta"]
// 0:"alpha" 1:"copy" 2:"copy" 3:"delta"

// target === 1:"beta"
// start === 2:"copy", 
// end === 3:"delta"

// 1:"beta" => 1:"copy"

['alpha', 'bravo', 'charlie', 'delta'].copyWithin(2, 0);

// results in ["alpha", "bravo", "alpha", "bravo"]
 ```

 语法
arr.copyWithin(target)
arr.copyWithin(target, start)
arr.copyWithin(target, start, end)
arr.copyWithin(目标索引, [源开始索引], [结束源索引])

参数
target
0 为基底的索引，复制序列到该位置。如果是负数，target 将从末尾开始计算。
如果 target 大于等于 arr.length，将会不发生拷贝。如果 target 在 start 之后，复制的序列将被修改以符合 arr.length。
start
0 为基底的索引，开始复制元素的起始位置。如果是负数，start 将从末尾开始计算。
如果 start 被忽略，copyWithin 将会从0开始复制。
end
0 为基底的索引，开始复制元素的结束位置。copyWithin 将会拷贝到该位置，但不包括 end 这个位置的元素。如果是负数， end 将从末尾开始计算。
如果 end 被忽略，copyWithin 将会复制到 arr.length。

返回值
改变了的数组。

描述
参数target,start和end 必须为整数。
如果start为负，则其指定的索引位置等同于length+start，length为数组的长度。end也是如此。
copyWithin方法不要求其this值必须是一个数组对象；除此之外，copyWithin是一个可变方法，它可以改变this对象本身，并且返回它，而不仅仅是它的拷贝。
copyWithin 就像 C 和 C++ 的 memcpy 函数一样，且它是用来移动 Array 或者 TypedArray 数据的一个高性能的方法。复制以及粘贴序列这两者是为一体的操作;即使复制和粘贴区域重叠，粘贴的序列也会有拷贝来的值。
copyWithin 函数是设计为通用的，其不要求其 this 值必须是一个数组对象。
The copyWithin 是一个可变方法，它不会改变 this 的 length，但是会改变 this 本身的内容，且需要时会创建新的属性。
```
代表的意思是 将1 2 3 4 5 覆盖到 1 2 3 4 5里面的倒数第二个开始的地方开始
[1, 2, 3, 4, 5].copyWithin(-2);
// [1, 2, 3, 1, 2]

代表的意思是 将1 2 3 4 5的下标为3的开始的数字 覆盖到 1 2 3 4 5里面的第0个开始的地方开始
[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]

代表的意思是 将1 2 3 4 5的下标为3的开始的数字下标为4结束的 覆盖到 1 2 3 4 5里面的第0个开始的地方开始
[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]


[1, 2, 3, 4, 5].copyWithin(-2, -3, -1);
// [1, 2, 3, 3, 4]

[].copyWithin.call({length: 5, 3: 1}, 0, 3);
// {0: 1, 3: 1, length: 5}

// ES2015 Typed Arrays are subclasses of Array
var i32a = new Int32Array([1, 2, 3, 4, 5]);

i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]

// On platforms that are not yet ES2015 compliant: 
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]
```

 + entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对
 ```
 var arr = ["a", "b", "c"];
var iterator = arr.entries();
// undefined

console.log(iterator);
// Array Iterator {}

console.log(iterator.next().value); 
// [0, "a"]
console.log(iterator.next().value); 
// [1, "b"]
console.log(iterator.next().value); 
// [2, "c"]
 ```
返回值
一个新的 Array 迭代器对象。

使用for…of 循环
```
var arr = ["a", "b", "c"];
var iterator = arr.entries();
// undefined

for (let e of iterator) {
    console.log(e);
}
// [0, "a"] 
// [1, "b"] 
// [2, "c"]
```

 + every() 方法测试数组的所有元素是否都通过了指定函数的测试。
 语法
arr.every(callback[, thisArg])

参数
callback 用来测试每个元素的函数。
thisArg 执行 callback 时使用的 this 值。

描述
every 方法为数组中的每个元素执行一次 callback 函数，直到它找到一个使 callback 返回 false（表示可转换为布尔值 false 的值）的元素。如果发现了一个这样的元素，every 方法将会立即返回 false。否则，callback 为每一个元素返回 true，every 就会返回 true。callback 只会为那些已经被赋值的索引调用。不会为那些被删除或从来没被赋值的索引调用。
callback 被调用时传入三个参数：元素值，元素的索引，原数组。
如果为 every 提供一个 thisArg 参数，在该参数为调用 callback 时的 this 值。如果省略该参数，则 callback 被调用时的 this 值，在非严格模式下为全局对象，在严格模式下传入 undefined。
every 不会改变原数组。
every 遍历的元素范围在第一次调用 callback 之前就已确定了。在调用 every 之后添加到数组中的元素不会被 callback 访问到。如果数组中存在的元素被更改，则他们传入 callback 的值是 every 访问到他们那一刻的值。那些被删除的元素或从来未被赋值的元素将不会被访问到。

 + fill() 方法将一个数组的所有元素从开始索引填充到具有静态值的结束索引