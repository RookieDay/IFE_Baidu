#
- 任务注意事项
1. 尝试 position 和 float 的效果，思考它们的异同和应用场景。
2. 注意测试不同情况，尤其是极端情况下的效果。
3. 图片和文字内容请自行替换，尽可能体现团队的特色。
4. 调节浏览器宽度，固定宽度和自适应宽度的效果始终符合预期。
5. 改变中间一栏的内容长度，以确保在中间一栏较高和右边一栏较高时，父元素的高度始终为子元素中最高的高度。
6. 其他效果图中给出的标识均被正确地实现。
7. 左右两栏宽度固定，中间一栏根据父元素宽度填充满，最外面的框应理解为浏览器。背景色为 #eee 区域的高度取决于三个子元素中最高的高度。

- 知识点
```
取值

static
该关键字指定元素使用正常的布局行为，即元素在文档流中当前的布局位置。此时 top, right, bottom, left 和 z-index 属性无效。
relative
该关键字下，元素先放置在未添加定位时的位置，再在不改变页面布局的前提下调整元素位置（因此会在此元素未添加定位时所在位置留下空白）。position:relative 未定义对 table-*-group, table-row, table-column, table-cell, table-caption 元素应用的效果。
absolute
不为元素预留空间，通过指定元素相对于最近的非 static 定位祖先元素的偏移，来确定元素位置。绝对定位的元素可以设置外边距（margins），且不会与其他边距合并。
fixed
不为元素预留空间，而是通过指定元素相对于屏幕视口（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变。打印时，元素会出现在的每页的固定位置。fixed 属性会创建新的栈上下文。当元素祖先的 transform  属性非 none 时，容器由视口改为该祖先。
sticky 
盒位置根据正常流计算(这称为正常流动中的位置)，然后相对于该元素在流中的 flow root（BFC）和 containing block（最近的块级祖先元素）定位。在所有情况下（即便被定位元素为 table 时），该元素定位均不对后续元素造成影响。当元素 B 被粘性定位时，后续元素的位置仍按照 B 未定位时的位置来确定。position: sticky 对 table 元素的效果与 position: relative 相同。
```
- 相对定位
相对于原来的位置进行偏移。

- 绝对定位
相对定位的元素并未脱离文档流，而绝对定位的元素则脱离了文档流。在布置文档流中其它元素时，绝对定位元素不占据空间。绝对定位元素相对于最近的非 static 祖先元素定位。当这样的祖先元素不存在时，则相对于根级容器定位。

- 固定定位
固定定位与绝对定位相似，但元素的包含块为 viewport 视口。该定位方式常用于创建在滚动屏幕时仍固定在相同位置的元素。在下面的示例中，"One" 元素定位在离页面顶部 80px，离页面左侧 20px 的位置。

- 粘性定位
粘性定位是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位，例如：
在 viewport 视口滚动到元素 top 距离小于 10px 之前，元素为相对定位。之后，元素将固定在与顶部距离 10px 的位置，直到 viewport 视口回滚到阈值以下。

粘性定位常用于定位字母列表的头部元素。标示 B 部分开始的头部元素在滚动 A 部分时，始终处于 A 的下方。而在开始滚动 B 部分时，B 的头部会固定在屏幕顶部，直到所有 B 的项均完成滚动后，才被 C 的头部替代。

须指定 top, right, bottom 或 left 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。
```
#one { position: sticky; top: 10px; }
```

> 注解
对于相对定位元素，top 和 bottom 属性指定它相对于正常位置的垂直偏移，left 和 right 属性指定水平偏移。

对于绝对定位元素，top、right、bottom 和 left 属性指定元素相对于其包含块的偏移，即此时位置为与包含块的相对位置。元素的边距（margin）定位在这些偏移之中。

在大多数时候，绝对定位元素的 height 和 width 属性的值为 auto，它们会自动计算以适合元素的内容。但是非替换（non-replaced）绝对定位元素可以占据 top 和 bottom 的值（除 auto 外）所共同指定的可用空间，而不必设置 height（也就是设其为 auto）。left、right 与 width 也类似。

绝对定位元素的定位值发生冲突时的解决方法:

如果同时指定 top 和 bottom（非 auto），优先采用 top。
如果同时指定 left 和 right，若 direction 为 ltr（英语、汉语等），则优先采用 left；若 direction 为 rtl（阿拉伯语、希伯来语等），则优先采用 right。

- [浮动布局](http://zh.learnlayout.com/clearfix.html)
  [浮动黑科技](http://stackoverflow.com/questions/211383/what-methods-of-clearfix-can-i-use)
  [浮动案例](http://www.barelyfitz.com/screencast/html-training/css/positioning/)
  [浮动position](https://developer.mozilla.org/en-US/docs/Web/CSS/float)

