##
- 任务目的
  +  JavaScript初体验
  +  初步明白JavaScript的简单基本语法，如变量、函数
  +  初步了解JavaScript的事件是什么
  +  初步了解JavaScript中的DOM是什么
- 任务描述
  + 参考以下示例代码，补充其中的JavaScript功能，完成一个JavaScript代码的编写
  + 本任务完成的功能为：用户可以在输入框中输入任何内容，点击“确认填写”按钮后，用户输入的内容会显示在“您输入的值是”文字的右边

- 任务注意事项
  +  实现简单功能的同时，请仔细学习JavaScript基本语法、事件、DOM相关的知识
  +  请注意代码风格的整齐、优雅
  +  代码中含有必要的注释
  +  可以不考虑输入的合法性
  +  建议不使用任何第三方库、框架
  +  示例代码仅为示例，可以直接使用，也可以完全自己重写
- 在线学习参考资料
  +  [JavaScript入门篇](http://www.imooc.com/learn/36)
  +  [MDN JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript) 

- innerHTML()  它的作用是获得标签中的值，是节点的一个属性。标签大部分是这样的 ==》 【<xxx>aabb</xxx>】 ，而innerHTML获取的就是这个【aabb】，也就是被标签包裹的值。
- innerText() 有的时候，我们输入的内容是一串html代码，这个时候，我们通过innerHTML取出来的被转换的代码，但是我们有的时候希望取出来的就是我们输入的html，这个时候，就需要用innerText来实现了。
- node.value   有些标签会有value值，比如input，你可以这样定义一个input ==> <input id="aqi-input" value="input">,这样的话，你的input标签的默认值就是input，当你修改输入框中的值被你修改之后，这个value属性值也就被改变了，我们就可以通过【节点.value】来获得这个值。