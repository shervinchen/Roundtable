(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{436:function(t,_,v){t.exports=v.p+"assets/img/horse-racing.3be4cc59.png"},631:function(t,_,v){"use strict";v.r(_);var r=v(14),a=Object(r.a)({},(function(){var t=this,_=t.$createElement,r=t._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"赛马"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#赛马"}},[t._v("#")]),t._v(" 赛马")]),t._v(" "),r("p",[t._v("题目：64 匹马，8 个赛道（每次比赛马的时间不计，只对比赛的马进行快慢排名）。(1)最少几场比赛找出最快的马；(2)最少几场比赛找出最快的 4 匹马。")]),t._v(" "),r("h2",{attrs:{id:"解题思路"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解题思路"}},[t._v("#")]),t._v(" 解题思路")]),t._v(" "),r("p",[t._v("题意分析：")]),t._v(" "),r("ol",[r("li",[t._v("每次比赛马的时间不计，只对比赛的马进行快慢排名，在一次比赛中 A 马 比 B 马快，那就认为它就是比 B 马快。")]),t._v(" "),r("li",[t._v("只需要找出最快的 4 匹马，不需要知道顺序。")])]),t._v(" "),r("p",[t._v("据此，可以有如下淘汰原理：")]),t._v(" "),r("ol",[r("li",[t._v("一匹马 A 在一次比赛中获得名次 n，那他在 64 匹马中最好可能的排名就是 n；")]),t._v(" "),r("li",[t._v("任意一次比赛，只要排名在第五及以后的马，可以直接淘汰；")]),t._v(" "),r("li",[r("code",[t._v("如果一匹马 A 在一次比赛中获得第四名，那么已知比 A 慢的马可就都可以淘汰了")]),t._v("。")])]),t._v(" "),r("h2",{attrs:{id:"步骤推演"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#步骤推演"}},[t._v("#")]),t._v(" 步骤推演")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("第一步：淘汰一半，64 进 32，共 8 场比赛（因为只要在某场比赛中排名没进前 4，就可以淘汰了）")]),t._v("；")]),t._v(" "),r("li",[r("strong",[t._v("第二步：每组第一名进行比赛，共 1 场比赛，就能得出第一名，和前 10 名，所以是 32 进 10")]),t._v("；")])]),t._v(" "),r("p",[r("img",{attrs:{src:v(436),alt:""}})]),t._v(" "),r("p",[t._v("第一步之后淘汰了一半，我们对上边八场比赛的 8 个第一名进行一次比赛，根据上边的淘汰原理 3，后四组都可以直接淘汰了，而且，可以淘汰不止后 16 匹。我们将前四组按照第一名在这一轮比赛中的排名进行排序，得到下图（其中 A1 > B1 > C1 > D1，’>’ 就是快的意思。"),r("code",[t._v("那么第一名就是A1，也就是9场比赛就能得到第一名了")]),t._v("。")]),t._v(" "),r("p",[t._v("可以发现，既然同样根据淘汰原理 3，既然 D1 已经比 A1、B1、C1 都慢了，它最好排名就是 64 匹中的第四了，那么 D2、D3、D4 都可以直接淘汰了。同理淘汰 B4、C3、C4。"),r("code",[t._v("剩下 10 匹")]),t._v("。")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("第三步：有可能结束 （共 1 场比赛）")]),t._v("。")])]),t._v(" "),r("p",[t._v("从上边的图中可以发现，同一列中，靠上的更快，第一行中，靠左的更快，也就是说第一名我们已经知道了，就是 A1，第二只可能是 A2 或者 B1（但已知比 B1 慢的马 B2、B3、C1、C2、D1，比已知比 A2 慢的马 A3、A4 ）。")]),t._v(" "),r("p",[r("strong",[t._v("剩下的 9 匹马，8 个赛道一次比不出来，那就不让 B1 参加比赛")]),t._v("，剩下的 8 匹马进行一次比赛，"),r("code",[t._v("如果 B2、B3、C1、C2、D1 中的任意一匹马，出现在在这一轮比赛中的前三名，那就把第三名踢掉，B1 和前两名一起，加上 A1 就组成了最快的四匹马")]),t._v("，到这里就结束了")]),t._v(" "),r("p",[t._v("也就是总共进行 10 场比赛（这也是为什么选 B1 不参加比赛的原因，因为它已知比它右边、下边、右下边的马都快）。")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("第四步：一定结束（共 1 场比赛）")]),t._v("。\n"),r("ul",[r("li",[t._v("如果上边一步没有结束，那就说明，上边一轮的前三名是 A2、A3、A4，那就让 A4 和 B1 两匹马比一下就行了\n"),r("ul",[r("li",[t._v("A4 赢了的话，A 组前四就是总体前四，顺序也确定；")]),t._v(" "),r("li",[t._v("B1 赢了的话，A1、A2、A3、B1 是总体前四，但是 B1 位置不确定（想确定的话，刚刚四匹马一起比赛就行了）。")])])])])])]),t._v(" "),r("h2",{attrs:{id:"结论"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[t._v("#")]),t._v(" 结论")]),t._v(" "),r("p",[t._v("总结：9 场比赛可以得第一名，要得出前四名可能 10 场也可能 11 场，如果还要确定前四顺序，那可能是 11 场或者 12 场。")]),t._v(" "),r("h2",{attrs:{id:"参考文献"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://blog.csdn.net/weichi7549/article/details/107371789/",target:"_blank",rel:"noopener noreferrer"}},[t._v("64 匹马，8 个赛道，最少多少次比赛找出最快的 4 匹马，以及对所有马进行排序"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=a.exports}}]);