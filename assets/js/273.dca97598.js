(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{850:function(s,t,a){"use strict";a.r(t);var e=a(14),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"git-stash用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-stash用法"}},[s._v("#")]),s._v(" git stash用法")]),s._v(" "),a("h2",{attrs:{id:"_1、保存在本地"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、保存在本地"}},[s._v("#")]),s._v(" 1、保存在本地")]),s._v(" "),a("p",[s._v("git stash会把所有未提交的修改（包括暂存的和非暂存的）都保存起来，用于后续恢复当前工作目录。\n比如下面的中间状态，通过git stash命令推送一个新的储藏，当前的工作目录就干净了。")]),s._v(" "),a("div",{staticClass:"language-s extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ git status\nOn branch master\nChanges to be committed:\n\nnew file:   style.css\n\nChanges not staged for commit:\n\nmodified:   index.html\n\n$ git stash\nSaved working directory and index state WIP on master: 5002d47 our new homepage\nHEAD is now at 5002d47 our new homepage\n\n$ git status\nOn branch master\nnothing to commit, working tree clean\n")])])]),a("p",[s._v("需要说明一点，"),a("strong",[s._v("stash是本地的，不会通过git push命令上传到git server上")]),s._v("。")]),s._v(" "),a("p",[s._v("实际应用中推荐给每个stash加一个message，用于记录版本，使用git stash save取代git stash命令。示例如下：")]),s._v(" "),a("div",{staticClass:"language-s extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$ git stash save "test-cmd-stash"\nSaved working directory and index state On autoswitch: test-cmd-stash\nHEAD 现在位于 296e8d4 remove unnecessary postion reset in onResume function\n$ git stash list\nstash@{0}: On autoswitch: test-cmd-stash\n')])])]),a("h2",{attrs:{id:"_2、重新应用缓存的stash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、重新应用缓存的stash"}},[s._v("#")]),s._v(" 2、重新应用缓存的stash")]),s._v(" "),a("p",[s._v("可以通过git stash pop命令恢复之前缓存的工作目录，输出如下：")]),s._v(" "),a("div",{staticClass:"language-s extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ git status\nOn branch master\nnothing to commit, working tree clean\n$ git stash pop\nOn branch master\nChanges to be committed:\n\n    new file:   style.css\n\nChanges not staged for commit:\n\n    modified:   index.html\n\nDropped refs/stash@{0} (32b3aa1d185dfe6d57b3c3cc3b32cbf3e380cc6a)\n")])])]),a("p",[s._v("这个指令将缓存堆栈中的第一个stash删除，并将对应修改应用到当前的工作目录下。")]),s._v(" "),a("p",[s._v("你也可以使用git stash apply命令，将缓存堆栈中的stash多次应用到工作目录中，但并不删除stash拷贝。命令输出如下：")]),s._v(" "),a("div",{staticClass:"language-s extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ git stash apply\nOn branch master\nChanges to be committed:\n\n    new file:   style.css\n\nChanges not staged for commit:\n\n    modified:   index.html\n")])])]),a("h2",{attrs:{id:"_3、查看现有stash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、查看现有stash"}},[s._v("#")]),s._v(" 3、查看现有stash")]),s._v(" "),a("p",[s._v("可以使用git stash list命令，一个典型的输出如下：")]),s._v(" "),a("div",{staticClass:"language-s extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$ git stash list\nstash@{0}: WIP on master: 049d078 added the index file\nstash@{1}: WIP on master: c264051 Revert "added file_size"\nstash@{2}: WIP on master: 21d80a5 added number to log\n')])])]),a("p",[s._v("在使用git stash apply命令时可以通过名字指定使用哪个stash，默认使用最近的stash（即stash@{0}）。")]),s._v(" "),a("h2",{attrs:{id:"_4、移除stash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、移除stash"}},[s._v("#")]),s._v(" 4、移除stash")]),s._v(" "),a("p",[s._v("可以使用git stash drop命令，后面可以跟着stash名字。下面是一个示例：")]),s._v(" "),a("div",{staticClass:"language-s extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$ git stash list\nstash@{0}: WIP on master: 049d078 added the index file\nstash@{1}: WIP on master: c264051 Revert "added file_size"\nstash@{2}: WIP on master: 21d80a5 added number to log\n$ git stash drop stash@{0}\nDropped stash@{0} (364e91f3f268f0900bc3ee613f9f733e82aaed43)\n')])])]),a("p",[s._v("或者使用git stash clear命令，删除所有缓存的stash。")]),s._v(" "),a("h2",{attrs:{id:"_5、查看指定stash的diff"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、查看指定stash的diff"}},[s._v("#")]),s._v(" 5、查看指定stash的diff")]),s._v(" "),a("p",[s._v("可以使用git stash show命令，后面可以跟着stash名字。示例如下：")]),s._v(" "),a("div",{staticClass:"language-s extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ git stash show\n index.html | 1 +\n style.css | 3 +++\n 2 files changed, 4 insertions(+)\n")])])]),a("p",[s._v("在该命令后面添加-p或--patch可以查看特定stash的全部diff，如下：")]),s._v(" "),a("div",{staticClass:"language-s extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$ git stash show -p\ndiff --git a/style.css b/style.css\nnew file mode 100644\nindex 0000000..d92368b\n--- /dev/null\n+++ b/style.css\n@@ -0,0 +1,3 @@\n+* {\n+  text-decoration: blink;\n+}\ndiff --git a/index.html b/index.html\nindex 9daeafb..ebdcbd2 100644\n--- a/index.html\n+++ b/index.html\n@@ -1 +1,2 @@\n+<link rel="stylesheet" href="style.css"/>\n')])])]),a("h2",{attrs:{id:"_6、从stash创建分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、从stash创建分支"}},[s._v("#")]),s._v(" 6、从stash创建分支")]),s._v(" "),a("p",[s._v("如果你储藏了一些工作，暂时不去理会，然后继续在你储藏工作的分支上工作，你在重新应用工作时可能会碰到一些问题。如果尝试应用的变更是针对一个你那之后修改过的文件，你会碰到一个归并冲突并且必须去化解它。如果你想用更方便的方法来重新检验你储藏的变更，你可以运行 git stash branch，这会创建一个新的分支，检出你储藏工作时的所处的提交，重新应用你的工作，如果成功，将会丢弃储藏。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$ git stash branch testchanges\nSwitched to a new branch "testchanges"\n# On branch testchanges\n# Changes to be committed:\n#   (use "git reset HEAD <file>..." to unstage)\n#\n#      modified:   index.html\n#\n# Changes not staged for commit:\n#   (use "git add <file>..." to update what will be committed)\n#\n#      modified:   lib/simplegit.rb\n#\nDropped refs/stash@{0} (f0dfc4d5dc332d1cee34a634182e168c4efc3359)\n')])])]),a("p",[s._v("这是一个很棒的捷径来恢复储藏的工作然后在新的分支上继续当时的工作。")]),s._v(" "),a("h2",{attrs:{id:"_7、暂存未跟踪或忽略的文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、暂存未跟踪或忽略的文件"}},[s._v("#")]),s._v(" 7、暂存未跟踪或忽略的文件")]),s._v(" "),a("p",[s._v("默认情况下，git stash会缓存下列文件：")]),s._v(" "),a("ul",[a("li",[s._v("添加到暂存区的修改（staged changes）")]),s._v(" "),a("li",[s._v("Git跟踪的但并未添加到暂存区的修改（unstaged changes）\n但不会缓存一下文件：")]),s._v(" "),a("li",[s._v("在工作目录中新的文件（untracked files）")]),s._v(" "),a("li",[s._v("被忽略的文件（ignored files）")])]),s._v(" "),a("p",[s._v("git stash命令提供了参数用于缓存上面两种类型的文件。使用-u或者--include-untracked可以stash untracked文件。使用-a或者--all命令可以stash当前目录下的所有修改。")]),s._v(" "),a("p",[s._v("至于git stash的其他命令建议参考Git manual。")])])}),[],!1,null,null,null);t.default=n.exports}}]);