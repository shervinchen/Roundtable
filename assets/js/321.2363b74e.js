(window.webpackJsonp=window.webpackJsonp||[]).push([[321],{934:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"webpack基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack基础"}},[t._v("#")]),t._v(" webpack基础")]),t._v(" "),s("h2",{attrs:{id:"什么是webapck"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是webapck"}},[t._v("#")]),t._v(" 什么是webapck")]),t._v(" "),s("p",[t._v("Webpack是一个现代Javascript应用的模块打包器 (module bundler)，能够将任何资源如 JavaScript 文件、CSS 文件、图片等打包成一个或少数文件。这是最核心的功能。")]),t._v(" "),s("ul",[s("li",[t._v("这意味着与以往的发起多个 HTTP 请求来获得资源相比，现在只需要发起少量的 HTTP 请求。")]),t._v(" "),s("li",[t._v("它采用"),s("code",[t._v("tool+plugins")]),t._v("的结构。tool提供基础能力，即文件依赖管理和资源加载管理；在此基础上通过一系列的plugins来丰富打包工具的功能。")]),t._v(" "),s("li",[t._v("在webpack里，所有的文件都是模块。但是"),s("code",[t._v("webpack只认识js模块")]),t._v("，所以要通过一些loader把css、图片等文件转化成webpack认识的模块。")])]),t._v(" "),s("h2",{attrs:{id:"webpack的工作步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack的工作步骤"}},[t._v("#")]),t._v(" webpack的工作步骤")]),t._v(" "),s("ol",[s("li",[t._v("从入口文件开始递归地建立一个依赖关系图。")]),t._v(" "),s("li",[t._v("把所有文件都转化成模块函数。")]),t._v(" "),s("li",[t._v("根据依赖关系，按照配置文件把模块函数分组打包成若干个bundle。")]),t._v(" "),s("li",[t._v("通过script标签把打包的bundle注入到html中，通过manifest文件来管理bundle文件的运行和加载。")])]),t._v(" "),s("h3",{attrs:{id:"打包的规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包的规则"}},[t._v("#")]),t._v(" 打包的规则")]),t._v(" "),s("ul",[s("li",[t._v("一个入口文件对应一个bundle，该bundle包括入口文件模块和其依赖的模块。（"),s("code",[t._v("app.js")]),t._v("：团队编写的源码入口文件）")]),t._v(" "),s("li",[t._v("第三方依赖模块bundle集合。（"),s("code",[t._v("vendor.js")]),t._v("：源码依赖的第三方vendor代码）")]),t._v(" "),s("li",[t._v("按需加载的模块或需单独加载的模块则分开打包成其他的bundle。（"),s("code",[t._v("n.js")]),t._v("：按数字索引的团队源码拆分部分）")]),t._v(" "),s("li",[t._v("runtime解析和加载模块所用的指引数据模块bundle。（"),s("code",[t._v("manifest.js")]),t._v("，有些项目也直接命名为"),s("code",[t._v("runtime.js")]),t._v("：这个manifest文件是"),s("em",[t._v("最先加载的，runtime通过其记录的模块标识符，处理和加载其他bundle文件，使其按要求进行加载和执行。")]),t._v("）。")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 加载顺序： --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- index.html --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./runtime.79f17c27b335abc7aaf4.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./vendor.26886caf15818fa82dfa.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./main.00bab6fd3100008a42b0.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Manifest")]),t._v(" "),s("p",[s("code",[t._v("Manifest")]),t._v("：webpack manifest文件"),s("strong",[t._v("用来引导所有模块的交互")]),t._v("。manifest文件包含了加载和处理模块的逻辑。当webpack编译器处理和映射应用代码时，它把模块的详细的信息都记录到了manifest文件中。当模块被打包并运输到浏览器上时，"),s("code",[t._v("runtime")]),t._v("就会根据"),s("code",[t._v("manifest")]),t._v("文件来处理和加载模块。利用manifest就知道从哪里去获取模块代码。")])]),t._v(" "),s("h3",{attrs:{id:"webpackbootstrap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpackbootstrap"}},[t._v("#")]),t._v(" webpackBootstrap")]),t._v(" "),s("p",[t._v("webpack打包后的文件，只含一个"),s("strong",[t._v("立即执行函数（IIFE）")]),t._v("，称它为 "),s("strong",[t._v("webpackBootstrap(模块函数)")]),t._v("，它仅接收一个未加载的 模块集合（modules）对象。指引文件"),s("code",[t._v("manifest.js")]),t._v("记录了各个模块的"),s("code",[t._v("webpackBootstrap")]),t._v("。")]),t._v(" "),s("p",[t._v("webpackBootstrap模块函数主要做了两件事：")]),t._v(" "),s("ol",[s("li",[t._v("定义一个模块加载函数 "),s("code",[t._v("__webpack_require__")]),t._v("：无论你选择哪种模块语法，那些 import 或 require 语句现在都已经转换为 webpack_require 方法，此方法指向模块标识符(module identifier)。通过使用 "),s("code",[t._v("manifest")]),t._v(" 中的数据，"),s("code",[t._v("runtime")]),t._v(" 将能够查询模块标识符，检索出背后对应的模块。")]),t._v(" "),s("li",[t._v("使用加载函数加载入口模块 "),s("code",[t._v('"./src/index.js"')]),t._v("。")])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("DETAILS")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// webpackBootstrap")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("modules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 缓存 __webpack_require__ 函数加载过的模块")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" installedModules "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/**\n   * Webpack 加载函数，用来加载 webpack 定义的模块\n   * @param {String} moduleId 模块 ID，一般为模块的源码路径，如 "./src/index.js"\n   * @returns {Object} exports 导出对象\n   */')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__webpack_require__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("moduleId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在 __webpack_require__ 函数对象上挂载一些变量及函数 ...")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 传入表达式的值为 "./src/index.js"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__webpack_require__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__webpack_require__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./src/index.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* modules */")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("h2",{attrs:{id:"webpack构建流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack构建流程"}},[t._v("#")]),t._v(" Webpack构建流程")]),t._v(" "),s("p",[t._v("Webpack构建流程是一个"),s("code",[t._v("串行")]),t._v("的过程：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("初始化参数")]),t._v("：从配置文件和 Shell 语句中"),s("code",[t._v("读取与合并参数")]),t._v("，得出最终的参数；")]),t._v(" "),s("li",[s("strong",[t._v("实例化编译器")]),t._v("：用上一步得到的参数"),s("code",[t._v("初始化 Compiler 对象")]),t._v("，加载所有配置的"),s("code",[t._v("插件Plugin")]),t._v("，执行对象的 "),s("code",[t._v("run")]),t._v(" 方法开始"),s("code",[t._v("执行编译")]),t._v("；")]),t._v(" "),s("li",[s("strong",[t._v("确定入口")]),t._v("：根据配置中的 "),s("code",[t._v("entry")]),t._v(" 找出所有的"),s("code",[t._v("入口文件")]),t._v("；")]),t._v(" "),s("li",[s("strong",[t._v("编译模块")]),t._v("：从入口文件出发，调用所有配置的 "),s("code",[t._v("Loader对模块进行翻译")]),t._v("，再找出该模块依赖的模块，再"),s("code",[t._v("递归本步骤直到所有入口依赖的文件都经过了本步骤的处理")]),t._v("；"),s("code",[t._v("得到")]),t._v("每个模块被翻译后的"),s("code",[t._v("最终内容以及它们之间的依赖关系")]),t._v("；")]),t._v(" "),s("li",[s("strong",[t._v("输出资源")]),t._v("：根据入口和模块之间的依赖关系，"),s("code",[t._v("组装成一个个包含多个模块的 Chunk")]),t._v("，再把每个 Chunk 转换成"),s("code",[t._v("一个单独的文件加入到输出列表")]),t._v("，这步是可以修改输出内容的最后机会；")]),t._v(" "),s("li",[s("strong",[t._v("输出完成")]),t._v("：在确定好输出内容后，"),s("code",[t._v("根据配置确定输出的路径和文件名，把文件内容写入到文件系统")]),t._v("；")])]),t._v(" "),s("p",[t._v("在以上过程中，Webpack 会在特定的时间点"),s("code",[t._v("广播出")]),t._v("特定的事件，插件Plugin 在监听到感兴趣的事件后会"),s("code",[t._v("执行特定的逻辑")]),t._v("，并且 插件Plugin 可以调用 Webpack 提供的 API 改变 Webpack 的运行结果。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("简单说")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("初始化")]),t._v("：启动构建，读取与合并配置参数，加载 Plugin，实例化 Compiler。")]),t._v(" "),s("li",[s("code",[t._v("编译")]),t._v("：从 Entry 出发，针对每个 Module 串行调用对应的 Loader 去翻译文件的内容，再找到该 Module 依赖的 Module，递归地进行编译处理。")]),t._v(" "),s("li",[s("code",[t._v("输出")]),t._v("：将编译后的 Module 组合成 Chunk，将 Chunk 转换成文件，输出到文件系统中。")])])]),t._v(" "),s("h2",{attrs:{id:"bundle、chunk、module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bundle、chunk、module"}},[t._v("#")]),t._v(" bundle、chunk、module")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("module")]),t._v(" 在开发中的所有的资源(.js、.css、.png)都是module，是webpack打包前的概念。")]),t._v(" "),s("li",[s("code",[t._v("chunk")]),t._v(" 是webpack在进行模块的依赖分析的时候，代码分割出来的代码块。一个 chunk 可能包含若干 module。")]),t._v(" "),s("li",[s("code",[t._v("bundle")]),t._v(" 最终输出到用户端的chunk，被称之为bundle；一般一个chunk对应一个bundle，只有在配置了sourcemap时，才会出现一个chunk对应多个bundle的情况。")])]),t._v(" "),s("h2",{attrs:{id:"entry、output、path、publicpath"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#entry、output、path、publicpath"}},[t._v("#")]),t._v(" entry、output、path、publicPath")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("entry")]),t._v("：入口文件是webpack建立依赖图的起点，有3种方式配置："),s("strong",[t._v("字符串、数组、对象")]),t._v("。")]),t._v(" "),s("li",[s("code",[t._v("output")]),t._v("：output配置告诉webpack怎么处理打包的代码。\n"),s("ul",[s("li",[s("code",[t._v("path")]),t._v("：所有输出文件的目标路径，即打包后文件在硬盘中的存储位置（"),s("strong",[t._v("dist文件夹")]),t._v("）。")]),t._v(" "),s("li",[s("code",[t._v("publicPath")]),t._v("：输出“解析文件的目录”，指定资源文件引用的目录，打包后浏览器访问服务时url 中的通用部分：\n"),s("ul",[s("li",[t._v("publicPath对于打包路径不会有任何影响，如果不设置，则有可能会导致静态资源，如图片找不到的情况。")]),t._v(" "),s("li",[t._v("publicPath的指，就是dist目录之后的路径。\n"),s("ul",[s("li",[t._v("path为'_dirname/dist/assets'，则publicPath为: '/assets/'。")]),t._v(" "),s("li",[t._v("path为'_dirname/dist'，则publicPath为: './'，也就是当前路径下。")])])])])])])])]),t._v(" "),s("h2",{attrs:{id:"loader和plugin的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loader和plugin的区别"}},[t._v("#")]),t._v(" Loader和Plugin的区别")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Loader")]),t._v(" 本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果。\n"),s("ul",[s("li",[t._v("因为 Webpack 只认识 JavaScript，所以 "),s("code",[t._v("Loader")]),t._v(" 就成了翻译官，对其他类型的资源进行转译的预处理工作。")]),t._v(" "),s("li",[s("code",[t._v("Loader")]),t._v(" 在 "),s("strong",[t._v("module.rules")]),t._v(" 中配置，作为模块的解析规则，类型为数组。每一项都是一个 Object，内部包含了 "),s("strong",[t._v("test(类型文件)")]),t._v("、"),s("strong",[t._v("loader")]),t._v("、"),s("strong",[t._v("options(参数)")]),t._v(" 等属性。")])])]),t._v(" "),s("li",[s("code",[t._v("Plugin")]),t._v(" 就是插件，基于事件流框架 Tapable，插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，"),s("code",[t._v("Plugin")]),t._v(" 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。\n"),s("ul",[s("li",[s("code",[t._v("Plugin")]),t._v(" 在 plugins 中单独配置，类型为数组，每一项是一个 Plugin 的实例，参数都通过构造函数传入。")])])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dev"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("useEslint "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createLintingRule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.vue$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        loader"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-loader'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        options"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" vueLoaderConfig\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.js$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        loader"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-loader'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        include"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node_modules/webpack-dev-server/client'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\ndevtool"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("build"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("productionSourceMap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("build"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("devtool "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\noutput"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" outputPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    filename"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" utils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assetsPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'js/[name].[chunkhash].js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    chunkFilename"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" utils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assetsPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'js/[id].[chunkhash].js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    publicPath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" publicPath\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nplugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// http://vuejs.github.io/vue-loader/en/workflow/production.html")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("webpack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DefinePlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'process.env'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" env\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UglifyJsPlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        uglifyOptions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            output"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                comments"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            compress"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                warnings"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        sourceMap"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("build"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("productionSourceMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        parallel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use multi-process parallel running to improve the build speed.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h4",{attrs:{id:"webpack常用loader和plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack常用loader和plugin"}},[t._v("#")]),t._v(" Webpack常用loader和plugin：")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("sass-loader")]),t._v(", 把sass编译成css。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("css-loader")]),t._v(", 让webpack能识别处理css，转化成 CommonJS 模块。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("style-loader")]),t._v(", 把css识别处理后转成的js字符串，生成为 style节点，插入到 html中。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("file-loader")]),t._v("，加载文件，webpack 以文件格式发出所需对象并返回文件的公共URL")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("babel-loader")]),t._v("，解析es6 成AST，生成新的AST再生成es5")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("define-plugin")]),t._v("，定义环境变量 (Webpack4 之后指定 mode 会自动配置)")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("html-webpack-plugin")]),t._v("，自动生成新的html文件")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("clean-webpack-plugin")]),t._v("，构建项目时清空dist目录")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("webpack-dev-server")]),t._v("，起开发server，支持实时加载代码")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("uglifyjs-webpack-plugin")]),t._v("，代码压缩")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("CommonsChunkPlugin")]),t._v("，抽取相同代码形成单独的模块")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("HashedModuleIdsPlugin")]),t._v("，用hash代替id命名")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("LoaderOptionsPlugin")]),t._v("，代码迁移")])])]),t._v(" "),s("h2",{attrs:{id:"如何提高webpack开发效率"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何提高webpack开发效率"}},[t._v("#")]),t._v(" 如何提高webpack开发效率")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("webpack-merge")]),t._v("：提取公共配置，减少重复配置代码。")]),t._v(" "),s("li",[s("code",[t._v("speed-measure-webpack-plugin")]),t._v("：简称 SMP，分析出 Webpack 打包过程中 Loader 和 Plugin 的耗时，有助于找到构建过程中的性能瓶颈。")]),t._v(" "),s("li",[t._v("webpack-dashboard：可以更友好的展示相关打包信息。")]),t._v(" "),s("li",[t._v("size-plugin：监控资源体积变化，尽早发现问题。")]),t._v(" "),s("li",[s("code",[t._v("HotModuleReplacementPlugin")]),t._v("：模块热替换。")])]),t._v(" "),s("h2",{attrs:{id:"如何对bundle体积进行监控和分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何对bundle体积进行监控和分析"}},[t._v("#")]),t._v(" 如何对bundle体积进行监控和分析")]),t._v(" "),s("ul",[s("li",[t._v("VSCode 中有一个"),s("code",[t._v("插件 Import Cost")]),t._v(" 可以帮助我们对引入模块的大小进行实时监测。")]),t._v(" "),s("li",[t._v("还可以使用 "),s("code",[t._v("webpack-bundle-analyzer")]),t._v(" 生成 bundle 的模块组成图，显示所占体积。")]),t._v(" "),s("li",[t._v("另外，对打包速度分析用："),s("code",[t._v("speed-measure-webpack-plugin")]),t._v(" 插件")])]),t._v(" "),s("h2",{attrs:{id:"简述编写loader思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简述编写loader思路"}},[t._v("#")]),t._v(" 简述编写loader思路")]),t._v(" "),s("p",[t._v("略")]),t._v(" "),s("h2",{attrs:{id:"简述编写plugin思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简述编写plugin思路"}},[t._v("#")]),t._v(" 简述编写plugin思路")]),t._v(" "),s("p",[t._v("略")]),t._v(" "),s("h2",{attrs:{id:"参考链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://juejin.im/post/5e6f4b4e6fb9a07cd443d4a5",target:"_blank",rel:"noopener noreferrer"}},[t._v("「吐血整理」再来一打Webpack面试题"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://segmentfault.com/a/1190000019117897",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webpack 是怎样运行的?"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);