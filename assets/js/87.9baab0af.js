(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{590:function(t,s,a){t.exports=a.p+"assets/img/minChunks.b0a60ee7.png"},923:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"code-spliting"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#code-spliting"}},[t._v("#")]),t._v(" Code Spliting")]),t._v(" "),n("h2",{attrs:{id:"什么是-code-splitting"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是-code-splitting"}},[t._v("#")]),t._v(" 什么是 code splitting")]),t._v(" "),n("p",[t._v("代码分割（code splitting）是指，将项目代码中无需立即调用的代码，在代码构建时转变为异步加载的过程。将项目代码构建打包时，根据指定规则分割成多个 bundles（输出文件），这些模块文件可以被按需动态加载或者并行加载。")]),t._v(" "),n("h2",{attrs:{id:"代码分割的意义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码分割的意义"}},[t._v("#")]),t._v(" 代码分割的意义")]),t._v(" "),n("p",[t._v("代码分割的本质其实就是在"),n("strong",[t._v("源代码直接上线")]),t._v("和"),n("strong",[t._v("打包成唯一脚本")]),t._v("main.bundle.js这两种极端方案之间的一种更适合实际场景的"),n("code",[t._v("中间状态")]),t._v("。是「"),n("code",[t._v("用可接受的服务器性能压力增加来换取更好的用户体验")]),t._v("」。")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("源代码直接上线")]),t._v("：虽然过程可控，但是http请求多，性能开销大。")]),t._v(" "),n("li",[n("strong",[t._v("打包成唯一脚本")]),t._v("：一把梭完自己爽，服务器压力小，但是页面空白期长，用户体验不好。")])]),t._v(" "),n("h2",{attrs:{id:"代码分割入手点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码分割入手点"}},[t._v("#")]),t._v(" 代码分割入手点")]),t._v(" "),n("p",[t._v("可以从以下3个方面去配置代码分割：")]),t._v(" "),n("ul",[n("li",[t._v("1、"),n("code",[t._v("入口文件方式（Entry Points）")]),t._v("：通过手动指定 webpack 打包入口文件（entry），可以"),n("strong",[t._v("配置多个入口文件")]),t._v("，打包不同的代码，然后根据业务需求，实现代码块的加载。")]),t._v(" "),n("li",[t._v("2、"),n("code",[t._v("动态引入/懒加载（Dynamic Imports/Lazy-Loading）")]),t._v("：通过使用例如 es6 的"),n("a",{attrs:{href:"http://webpack.js.org/api/module-methods/#import-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("import()"),n("OutboundLink")],1),t._v("、"),n("a",{attrs:{href:"https://webpack.js.org/api/module-methods#requireensure",target:"_blank",rel:"noopener noreferrer"}},[t._v("require.ensure"),n("OutboundLink")],1),t._v("、"),n("a",{attrs:{href:"https://webpack.js.org/api/module-methods#amd",target:"_blank",rel:"noopener noreferrer"}},[t._v("AMD"),n("OutboundLink")],1),t._v("等方法来指定代码进行构建分割。")]),t._v(" "),n("li",[t._v("3、"),n("code",[t._v("避免重复（Prevent Duplication）")]),t._v("：\n"),n("ul",[n("li",[n("strong",[t._v("webpack3")]),t._v("："),n("code",[t._v("CommonsChunkPlugin")]),t._v("提取公共代码块被。")]),t._v(" "),n("li",[n("strong",[t._v("webpack4")]),t._v("："),n("code",[t._v("SplitChunksPlugin")]),t._v("自动分割，通过"),n("a",{attrs:{href:"https://webpack.js.org/plugins/split-chunks-plugin/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SplitChunksPlugin"),n("OutboundLink")],1),t._v("来配置代码构建的自动分割。")])])])]),t._v(" "),n("h2",{attrs:{id:"代码分割类型-两种"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码分割类型-两种"}},[t._v("#")]),t._v(" 代码分割类型（两种）")]),t._v(" "),n("h3",{attrs:{id:"静态代码分割"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#静态代码分割"}},[t._v("#")]),t._v(" 静态代码分割")]),t._v(" "),n("p",[t._v("静态代码分割：在代码中明确声明需要异步加载的代码。调用一个声明了异步加载代码的变量时，它总是返回一个 Promise 对象。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Listener "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./listeners.js'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getModal")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/modal.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \nListener"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'didSomethingToWarrentModalBeingLoaded'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Async fetching modal code from a separate chunk")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getModal")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("module")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" modalTarget "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Modal'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    \n        module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("initModal")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("modalTarget"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h3",{attrs:{id:"动态代码分割"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#动态代码分割"}},[t._v("#")]),t._v(" 动态代码分割")]),t._v(" "),n("p",[t._v("动态代码分割：在代码调用时根据当前的状态，「动态地」异步加载对应的代码块。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getTheme")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("themeName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("./src/themes/")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("themeName"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// using `import()` 'dynamically'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("feeling"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stylish"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTheme")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'stylish'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("module")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("applyTheme")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("feeling"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("trendy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTheme")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'trendy'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("module")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("applyTheme")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"魔法注释"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#魔法注释"}},[t._v("#")]),t._v(" 魔法注释")]),t._v(" "),n("p",[t._v("魔术注释是由 Webpack 提供的，可以为代码分割服务的一种技术。通过在 import 关键字后的括号中使用指定注释，我们可以对代码分割后的 chunk 有更多的控制权，让我们看一个例子：")]),t._v(" "),n("h4",{attrs:{id:"对分离出的-chunk-进行命名"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#对分离出的-chunk-进行命名"}},[t._v("#")]),t._v(" 对分离出的 chunk 进行命名")]),t._v(" "),n("p",[t._v("（"),n("code",[t._v("webpackChunkName")]),t._v("）")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// index.js")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* webpackChunkName: “my-chunk-name” */")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./footer'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// webpack.config.js")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  output"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    filename"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" “bundle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js”"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    chunkFilename"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" “"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lazy"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("chunk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js”\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h4",{attrs:{id:"对异步加载模块不同打包模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#对异步加载模块不同打包模式"}},[t._v("#")]),t._v(" 对异步加载模块不同打包模式")]),t._v(" "),n("p",[t._v("（"),n("code",[t._v("webpackMode")]),t._v("）")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// index.js")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* webpackChunkName: “my-chunk-name” */")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* webpackMode: lazy */")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./someModule'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("webpackMode：")]),t._v(" "),n("ul",[n("li",[t._v("默认值为"),n("code",[t._v("lazy")]),t._v("，它会使所有异步模块都会被"),n("strong",[t._v("单独抽离")]),t._v("成单一的 chunk。")]),t._v(" "),n("li",[t._v("若设置该值为"),n("code",[t._v("lazy-once")]),t._v("，Webpack 就会将所有带有标记的异步加载模块"),n("strong",[t._v("放在同一个")]),t._v(" chunk 中。")])]),t._v(" "),n("h4",{attrs:{id:"使异步模块预加载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使异步模块预加载"}},[t._v("#")]),t._v(" 使异步模块预加载")]),t._v(" "),n("p",[t._v("（"),n("code",[t._v("webpackPrefetch")]),t._v("、"),n("code",[t._v("webpackPreload")]),t._v("）")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* webpackPrefetch: true */")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./someModule'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("让浏览器会在 "),n("strong",[t._v("Idle（空闲时间）")]),t._v(" 状态时预先帮我们加载所需的资源：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("webpackPrefetch")]),t._v("：令我们可以使用与 "),n("code",[t._v("<link rel=“prefetch”>")]),t._v(" 相同的特性。")]),t._v(" "),n("li",[n("code",[t._v("webpackPreload")]),t._v("：令我们可以使用与 "),n("code",[t._v("<link rel=“preload”>")]),t._v(" 相同的特性。")])]),t._v(" "),n("h2",{attrs:{id:"避免重复-webpack3与webpack4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#避免重复-webpack3与webpack4"}},[t._v("#")]),t._v(" 避免重复（webpack3与webpack4）")]),t._v(" "),n("h3",{attrs:{id:"两个版本的解决方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#两个版本的解决方案"}},[t._v("#")]),t._v(" 两个版本的解决方案")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// webpack.config.js (for webpack 4)")]),t._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  optimization"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    splitChunks"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      chunks"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'all'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 智能将依赖项提取到独立的 chunk 中, vendor.js")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    runtimeChunk"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 提取runtime.js 或叫 manifest.js")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// webpack.config.js (for webpack 3)")]),t._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("webpack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("optimize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CommonsChunkPlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vendor'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个函数决定哪个模块会被打入 chunk")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("minChunks")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("module")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n        module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("includes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node_modules'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 必须在 vendor 生成之后执行（因为 webpack 把runtime打进了最新的 chunk）")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("webpack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("optimize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CommonsChunkPlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'runtime'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// minChunks: Infinity 表示任何应用模块都不能打进这个 chunk")]),t._v("\n      minChunks"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("Infinity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意：包含 vendor 的 CommonsChunkPlugin 实例必须在包含 runtime 的之前，否则会报错。")]),t._v("\n")])])]),n("h3",{attrs:{id:"splitchunksplugin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#splitchunksplugin"}},[t._v("#")]),t._v(" SplitChunksPlugin")]),t._v(" "),n("p",[n("strong",[t._v("Webpack4 废弃了 CommonsChunkPlugin")]),t._v("，引入了 "),n("code",[t._v("optimization.splitChunks")]),t._v(" 这个选项，默认是不用设置的。Webpack 4 引入了 mode 这个选项（提供"),n("strong",[t._v("development")]),t._v("、"),n("strong",[t._v("production")]),t._v("两种模式）。"),n("strong",[t._v("如果 mode 是 "),n("code",[t._v("production")]),t._v("，那 Webpack 4 就会开启 Code Splitting")]),t._v("。")]),t._v(" "),n("h4",{attrs:{id:"默认自动分割-普通应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#默认自动分割-普通应用"}},[t._v("#")]),t._v(" 默认自动分割（普通应用）")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认配置")]),t._v("\nsplitChunks"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 表示选择哪些 chunks 进行分割，可选值有：async，initial和 all")]),t._v("\n    chunks"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"async"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 表示新分离出的chunk必须大于等于minSize，默认为30000，约30kb。")]),t._v("\n    minSize"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 表示一个模块至少应被minChunks个chunk所包含才能分割。默认为1。")]),t._v("\n    minChunks"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 表示按需加载文件时，并行请求的最大数目。默认为5。")]),t._v("\n    maxAsyncRequests"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 表示加载入口文件时，并行请求的最大数目。默认为3。")]),t._v("\n    maxInitialRequests"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 表示拆分出的chunk的名称连接符。默认为~。如chunk~vendors.js")]),t._v("\n    automaticNameDelimiter"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'~'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置chunk的文件名。默认为true。当为true时，splitChunks基于chunk和cacheGroups的key自动命名。")]),t._v("\n    name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cacheGroups 下可以可以配置多个组，每个组根据test设置条件，符合test条件的模块，就分配到该组。模块可以被多个组引用，但最终会根据priority来决定打包到哪个组中。默认将所有来自 node_modules目录的模块打包至vendors组，将两个以上的chunk所共享的模块打包至default组。")]),t._v("\n    cacheGroups"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        vendors"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            test"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("[\\\\/]node_modules[\\\\/]")]),n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            priority"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            minChunks"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            priority"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            reuseExistingChunk"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("Webpack4 的 Code Splitting 默认会"),n("strong",[t._v("基于内置规则自动拆分")]),t._v("：")]),t._v(" "),n("ul",[n("li",[t._v("新 bundle 被两个及以上模块引用，或者来自 node_modules")]),t._v(" "),n("li",[t._v("新 bundle 大于 30kb （压缩之前）")]),t._v(" "),n("li",[t._v("异步加载并发加载的 bundle 数不能大于 5 个")]),t._v(" "),n("li",[t._v("初始加载的 bundle 数不能大于 3 个")])]),t._v(" "),n("p",[t._v("简单的说，Webpack 会把代码中的公共模块自动抽出来，变成一个包，前提是这个包大于 30kb，不然 Webpack 是不会抽出公共代码的。对于普通的应用，Webpack 4 内置的规则就足够了。")]),t._v(" "),n("h4",{attrs:{id:"特殊应用需求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#特殊应用需求"}},[t._v("#")]),t._v(" 特殊应用需求")]),t._v(" "),n("p",[t._v("对于特殊的需求，splitChunks 有一个参数叫 "),n("code",[t._v("cacheGroups")]),t._v("，可以定义自定义 chunk 组，通过 test 条件对模块进行过滤，符合条件的模块分配到相同的组。")]),t._v(" "),n("h4",{attrs:{id:"chunks选项-async、-initial-和-all"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#chunks选项-async、-initial-和-all"}},[t._v("#")]),t._v(" chunks选项（async、 initial 和 all）")]),t._v(" "),n("p",[t._v("chunks 用以告诉 splitChunks 的作用对象，其可选值有 "),n("code",[t._v("async")]),t._v("、 initial 和 "),n("code",[t._v("all")]),t._v("。")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("默认值")]),t._v("是 "),n("code",[t._v("async")]),t._v("，也就是默认只选取异步加载的chunk进行代码拆分。")]),t._v(" "),n("li",[t._v("值为 "),n("code",[t._v("all")]),t._v(" 时，处理范围包括了初始chunk和异步chunk。推荐在开发中将 chunks 设置为 all。")]),t._v(" "),n("li",[t._v("值为 initial 时，作用范围变成了非异步加载的初始 chunk。")])]),t._v(" "),n("h3",{attrs:{id:"commonschunkplugin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#commonschunkplugin"}},[t._v("#")]),t._v(" CommonsChunkPlugin")]),t._v(" "),n("p",[t._v("webpack3中使用的分割插件，因为配置规则太复杂，导致实际的工作中只能来回复制配置规则，因此已被业界弃用。但这里还是简单介绍下：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("webpack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("optimize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CommonsChunkPlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'manifest'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    minChunks"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("Infinity")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[n("code",[t._v("Infinity")]),t._v("是无限的意思，这就是说必须有无限多个代码chunk都用到了这个js文件，我们才把它抽取出来放到这个公共大块里，很显然，不可能有 js文件满足“被无限多个”代码chunk使用，所以这里生成的其实就是一个空的chunk，它只有一个文件名manifest，而文件长度是0，用来“生成 webpack 运行时代码（runtime）”。这就是minChunks: Infinity的作用。")]),t._v(" "),n("p",[n("code",[t._v("minChunks")]),t._v("作为函数的时候，说一下minChunks作为函数两个参数的含义：")]),t._v(" "),n("ul",[n("li",[t._v("module：当前chunk及其包含的模块")]),t._v(" "),n("li",[t._v("count：当前chunk及其包含的模块被引用的次数\nminChunks作为函数会遍历每一个入口文件及其依赖的模块，返回一个布尔值，为true代表当前正在处理的文件（module.resource）合并到commons chunk中，为false则不合并。")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(590),alt:""}})]),t._v(" "),n("p",[t._v("上面的代码其实就是生成一个叫做vendor的commons chunk，那么有哪些模块会被加入到vendor中呢？就对入口文件及其依赖的模块进行遍历，如果该模块是js文件并且在node_modules中，就会加入到vendor当中，其实这也是一种让vendor只保留第三方库的办法。")]),t._v(" "),n("h2",{attrs:{id:"各种框架实现懒加载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#各种框架实现懒加载"}},[t._v("#")]),t._v(" 各种框架实现懒加载")]),t._v(" "),n("ul",[n("li",[t._v("React: "),n("a",{attrs:{href:"https://reacttraining.com/react-router/web/guides/code-splitting",target:"_blank",rel:"noopener noreferrer"}},[t._v("Code Splitting and Lazy Loading"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("Vue: "),n("a",{attrs:{href:"https://alexjoverm.github.io/2017/07/16/Lazy-load-in-Vue-using-Webpack-s-code-splitting/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lazy Load in Vue using Webpack's code splitting"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("AngularJS: "),n("a",{attrs:{href:"https://medium.com/@var_bin/angularjs-webpack-lazyload-bb7977f390dd",target:"_blank",rel:"noopener noreferrer"}},[t._v("AngularJS + Webpack = lazyLoad"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"参考链接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://juejin.im/post/5b9b0fdfe51d450e7210892d#heading-16",target:"_blank",rel:"noopener noreferrer"}},[t._v("【译】Google - 使用 webpack 进行 web 性能优化（二）：利用好持久化缓存"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://juejin.im/post/5e796ec1e51d45271e2a9af9#heading-5",target:"_blank",rel:"noopener noreferrer"}},[t._v("项目不知道如何做性能优化？不妨试一下代码分割"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://juejin.im/post/5b304f1f51882574c72f19b0#heading-7",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webpack 4 配置最佳实践"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://juejin.im/post/5e7c83b4e51d455c6c269608#heading-9",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何使用 splitChunks 精细控制代码分割"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://juejin.im/post/5e6f4b4e6fb9a07cd443d4a5",target:"_blank",rel:"noopener noreferrer"}},[t._v("「吐血整理」再来一打Webpack面试题"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);