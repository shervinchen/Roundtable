(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{847:function(t,e,v){"use strict";v.r(e);var a=v(14),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"小程序基础"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#小程序基础"}},[t._v("#")]),t._v(" 小程序基础")]),t._v(" "),v("p",[t._v("本文主要是记录一些小程序的背景知识，可以作为小程序开发的入门普及。")]),t._v(" "),v("p",[t._v("如果找不到请直接到"),v("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档 - 微信官方文档 - 小程序"),v("OutboundLink")],1),t._v("。")]),t._v(" "),v("p",[t._v("另附"),v("a",{attrs:{href:"https://taro-docs.jd.com/taro/docs/README",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档 - taro"),v("OutboundLink")],1),t._v("。")]),t._v(" "),v("h2",{attrs:{id:"小程序-与-h5-比较"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#小程序-与-h5-比较"}},[t._v("#")]),t._v(" 小程序 与 H5 比较")]),t._v(" "),v("p",[t._v("总得来说，小程序 无论从用户体验还是市场认可上都要优于 H5。")]),t._v(" "),v("p",[t._v("优势主要体现在如下几个方面：")]),t._v(" "),v("h3",{attrs:{id:"优势-开发体验方面"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#优势-开发体验方面"}},[t._v("#")]),t._v(" 优势：开发体验方面")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("运行环境：小程序特殊的运行环境使得其流畅度和性能更优化。\nH5 的运行环境是浏览器，小程序的运行环境是"),v("code",[t._v("基于浏览器内核完全重构的一个内置解析器")]),t._v("，针对小程序做了专门优化，因此运行流畅度和性能更好。"),v("strong",[t._v("本质上来说，H5 是浏览器页面，而小程序是计算机页面")]),t._v("。")])]),t._v(" "),v("li",[v("p",[t._v("开发成本：小程序的开发成本更低。\n传统 Web 和 H5 开发时，需要用到各种不同的开发工具，还要考虑浏览器兼容性。但开发小程序时则可以使用微信提供的统一的开发工具和开发标准，可以随意调用微信开发提供的 API，无需担心浏览器兼容性，因此其开发成本更低。")])]),t._v(" "),v("li",[v("p",[t._v("系统权限：小程序系统权限更丰富。\n小程序借力微信，可以连接更多系统权限，如网络通信状态、数据缓存能力等，而 H5 web 应用则较少，业务逻辑简单、功能单一。")])])]),t._v(" "),v("h3",{attrs:{id:"优势-用户体验方面-市场更认可"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#优势-用户体验方面-市场更认可"}},[t._v("#")]),t._v(" 优势：用户体验方面（市场更认可）")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("加载速度：小程序的加载速度更快，接近 APP\nH5 打开时实际是打开 web 网页，而网页需要在浏览器中渲染，这些加载时间会给用户造成卡的感觉。而小程序作为微信内的云端应用，使用通过 WebSocket 双向通信（保证无需刷新即时通信）、本地缓存（图片与 UI 本地缓存降低与服务器交互延时）以及微信底层技术优化实现了小程序接近原生 APP 的体验，因此加载速度更快，操作起来更流畅。")])]),t._v(" "),v("li",[v("p",[t._v("二次打开：小程序多次打开更便捷，更易触达，且切到后台页面会 keep alive")])])]),t._v(" "),v("h3",{attrs:{id:"劣势"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#劣势"}},[t._v("#")]),t._v(" 劣势")]),t._v(" "),v("ol",[v("li",[t._v("小程序有 size 限制；")]),t._v(" "),v("li",[t._v("小程序的技术框架给开发带来诸多限制；")]),t._v(" "),v("li",[t._v("小程序需要上架审核，相比 H5 灵活性、及时性较差；")])]),t._v(" "),v("h2",{attrs:{id:"小程序基础知识-可直接浏览这篇博文"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#小程序基础知识-可直接浏览这篇博文"}},[t._v("#")]),t._v(" 小程序基础知识（可直接浏览这篇博文）")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://juejin.cn/post/6844904130390016014",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序踩坑之旅"),v("OutboundLink")],1)]),t._v(" "),v("p",[t._v("本文分标题记录的很全，大部分内容都可以找到。。")]),t._v(" "),v("h2",{attrs:{id:"小程序基础知识-补充"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#小程序基础知识-补充"}},[t._v("#")]),t._v(" 小程序基础知识（补充）")]),t._v(" "),v("h3",{attrs:{id:"什么是原生组件-native-component"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是原生组件-native-component"}},[t._v("#")]),t._v(" 什么是原生组件？native-component")]),t._v(" "),v("p",[t._v("原生组件：小程序中的部分组件是"),v("strong",[t._v("由客户端创建的原生组件")]),t._v("，这些组件有：")]),t._v(" "),v("ul",[v("li",[t._v("camera")]),t._v(" "),v("li",[t._v("canvas")]),t._v(" "),v("li",[t._v("input（仅在 focus 时表现为原生组件）\n"),v("ul",[v("li",[v("code",[t._v("所以focus时会有input内的文本字体变化、高度大小变化带来的闪烁")]),t._v("。")])])]),t._v(" "),v("li",[t._v("live-player")]),t._v(" "),v("li",[t._v("live-pusher")]),t._v(" "),v("li",[t._v("map")]),t._v(" "),v("li",[t._v("textarea")]),t._v(" "),v("li",[t._v("video")])])])}),[],!1,null,null,null);e.default=r.exports}}]);