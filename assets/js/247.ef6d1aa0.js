(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{800:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("本文是在 ConardLi的“"),a("a",{attrs:{href:"https://juejin.im/post/5cec1bcff265da1b8f1aa08f",target:"_blank",rel:"noopener noreferrer"}},[t._v("【JS 进阶】你真的掌握变量和类型了吗"),a("OutboundLink")],1),t._v("”文章上的总结和扩展，集中记述了js中的变量和数据类型的相关知识点及应用场景，共分为5部分。")])]),t._v(" "),a("blockquote",[a("p",[t._v("本文为“JS专题-变量与类型”的第3篇，3）JS 其他引用类型，主要关注常用的引用类型（Object、Array、Date、RegExp、Function）之外，三种包装类型（Boolean、Number、String）。")])]),t._v(" "),a("h1",{attrs:{id:"引用类型细分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引用类型细分"}},[t._v("#")]),t._v(" 引用类型细分")]),t._v(" "),a("p",[t._v("在ES标准定义中，Object代表了引用类型，其实它的背后代表了很多引用类型变量，它们并不是由Object构造的，但是它们原型链的终点都是Object。")]),t._v(" "),a("h2",{attrs:{id:"普通引用类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#普通引用类型"}},[t._v("#")]),t._v(" 普通引用类型")]),t._v(" "),a("ul",[a("li",[t._v("Object 对象")]),t._v(" "),a("li",[t._v("Array 数组")]),t._v(" "),a("li",[t._v("Date 日期")]),t._v(" "),a("li",[t._v("RegExp 正则")]),t._v(" "),a("li",[t._v("Function 函数")])]),t._v(" "),a("h2",{attrs:{id:"特殊引用类型-包装类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特殊引用类型-包装类型"}},[t._v("#")]),t._v(" 特殊引用类型：包装类型")]),t._v(" "),a("ul",[a("li",[t._v("Boolean")]),t._v(" "),a("li",[t._v("Number")]),t._v(" "),a("li",[t._v("String")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ConardLi'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ConardLi'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ConardLi'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// object")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ConardLi'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// string")]),t._v("\n")])])]),a("h3",{attrs:{id:"为什么要有包装类型-包装类型和原始类型的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要有包装类型-包装类型和原始类型的区别"}},[t._v("#")]),t._v(" 为什么要有包装类型（包装类型和原始类型的区别）？")]),t._v(" "),a("blockquote",[a("p",[t._v("引用类型和包装类型的主要区别就是"),a("strong",[t._v("对象的生存期")]),t._v("。\n使用new操作符创建的引用类型的实例，在执行流离开当前作用域之前都一直保存在内存中，而基本类型则只存在于一行代码的执行瞬间，然后立即被销毁，这意味着我们不能在运行时为基本类型添加属性和方法。")])]),t._v(" "),a("p",[t._v("既然原始类型不能扩展属性和方法，为了便于操作基本类型值，ES就提供了上述3种包装类型。那么我们是如何使用原始类型调用方法的呢？这就要引出装箱与拆箱了。")]),t._v(" "),a("h3",{attrs:{id:"装箱与拆箱"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#装箱与拆箱"}},[t._v("#")]),t._v(" 装箱与拆箱")]),t._v(" "),a("ul",[a("li",[t._v("装箱转换：把基本类型转换为对应的包装类型")]),t._v(" "),a("li",[t._v("拆箱操作：把引用类型转换为基本类型")])]),t._v(" "),a("p",[t._v("每当我们操作一个基础类型时，后台就会自动创建一个包装类型的对象，从而让我们能够调用一些方法和属性，例如下面的代码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ConardLi"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("substring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("实际上发生了以下几个过程：")]),t._v(" "),a("ol",[a("li",[t._v("创建一个String的包装类型实例")]),t._v(" "),a("li",[t._v("在实例上调用substring方法")]),t._v(" "),a("li",[t._v("销毁实例")])]),t._v(" "),a("p",[t._v("也就是说，我们使用基本类型调用方法，就会自动进行装箱和拆箱操作，相同的，我们使用Number和Boolean类型时，也会发生这个过程。")]),t._v(" "),a("p",[t._v("从引用类型到基本类型的转换，也就是拆箱的过程中，会遵循ECMAScript规范规定的"),a("code",[t._v("toPrimitive")]),t._v("原则来进行"),a("code",[t._v("抽象操作")]),t._v("，一般会调用引用类型的"),a("code",[t._v("valueOf")]),t._v("和"),a("code",[t._v("toString")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"自动拆箱规则-toprimitive-转换规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动拆箱规则-toprimitive-转换规则"}},[t._v("#")]),t._v(" 自动拆箱规则（"),a("code",[t._v("toPrimitive")]),t._v(" 转换规则）")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("默认情况下，执行这个抽象操作时会"),a("code",[t._v("先执行valueOf")]),t._v("方法，如果返回的不是原始值，会"),a("code",[t._v("继续执行toString")]),t._v("方法，如果返回的还不是原始值，那么会报错")]),t._v(";")]),t._v(" "),a("li",[t._v("如果有指定转换类型时，情况又会有所不同：\n"),a("ul",[a("li",[t._v("引用类型转换为Number类型，先调用valueOf，再调用toString")]),t._v(" "),a("li",[t._v("引用类型转换为String类型，先调用toString，再调用valueOf")]),t._v(" "),a("li",[t._v("若valueOf和toString都不存在，或者没有返回基本类型，则抛出TypeError异常。")])])]),t._v(" "),a("li",[t._v("注意：valueOf和toString方法在Date，array等对象中有些是被重写过的，所以不同对象调用此方法可能产生的操作不同，如果没有这些方法，会调用最原始的Object.prototype上的valueOf和toString方法")])]),t._v(" "),a("h3",{attrs:{id:"主动拆箱装箱-显式类型转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主动拆箱装箱-显式类型转换"}},[t._v("#")]),t._v(" 主动拆箱装箱（显式类型转换）")]),t._v(" "),a("p",[t._v("除了上述程序中自动的拆箱装箱操作，我们也可以手动拆箱装箱：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("valueOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//number")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//string")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);