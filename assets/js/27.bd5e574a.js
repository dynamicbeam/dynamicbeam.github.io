(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{308:function(t,s,a){"use strict";a.r(s);var n=a(14),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("在工作中，我们可能同时在进行2个或者多个"),s("a",{attrs:{href:"https://so.csdn.net/so/search?q=%E4%B8%8D%E5%90%8C%E7%9A%84&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[t._v("不同的"),s("OutboundLink")],1),t._v("项目开发，每个项目的需求不同，进而不同项目必须依赖不同版本的NodeJS运行环境，这种情况下，对于维护多个版本的node将会是一件非常麻烦的事情，nvm就是为解决这个问题而产生的，他可以方便的在同一台设备上进行多个node版本之间切换。")]),t._v(" "),s("h2",{attrs:{id:"_1、nvm介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、nvm介绍"}},[t._v("#")]),t._v(" 1、"),s("a",{attrs:{href:"https://so.csdn.net/so/search?q=nvm&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[t._v("nvm"),s("OutboundLink")],1),t._v("介绍")]),t._v(" "),s("p",[s("strong",[t._v("Node Version Manager（NVM）")]),t._v(" 是一种用于管理多个主动节点.js版本的工具。")]),t._v(" "),s("p",[t._v("Node.js平台，Node.js工具社区和Node.js库是快速移动的目标 - 在一个Node.js版本下可能有效的方法不能保证适用于另一个版本的Node.js。因此，用户需要一些方法在 Node 的多个版本之间切换.js")]),t._v(" "),s("h3",{attrs:{id:"为什么使用-nvm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用-nvm"}},[t._v("#")]),t._v(" 为什么使用 NVM？")]),t._v(" "),s("p",[t._v("NVM 允许用户：")]),t._v(" "),s("ul",[s("li",[t._v("使用简单的命令在本地下载任何远程长期支持 （LTS） 版本的 Node.js。")]),t._v(" "),s("li",[t._v("直接从命令行在 Node.js 的多个版本之间轻松切换。")]),t._v(" "),s("li",[t._v("设置别名以轻松在不同下载版本的 Node.js之间切换。")])]),t._v(" "),s("h3",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),s("h2",{attrs:{id:"_2、下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、下载"}},[t._v("#")]),t._v(" 2、下载")]),t._v(" "),s("h3",{attrs:{id:"操作系统支持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作系统支持"}},[t._v("#")]),t._v(" 操作系统支持")]),t._v(" "),s("p",[t._v("nvm同时支持Linux和macOS")]),t._v(" "),s("p",[t._v("我们这里是在Windows上操作")]),t._v(" "),s("p",[t._v("下载链接：")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/coreybutler/nvm-windows/releases",title:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/coreybutler/nvm-windows/releases"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"_3、安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、安装"}},[t._v("#")]),t._v(" 3、安装：")]),t._v(" "),s("p",[t._v("如果电脑上之前已经单独安装了node，先卸载（可以在控制面板里面卸载），然后再安装nvm")]),t._v(" "),s("p",[t._v("傻瓜式一直点击下一步即可安装。")]),t._v(" "),s("p",[t._v("安装完成后，可以打开cmd命令行窗口。执行")]),t._v(" "),s("blockquote",[s("p",[t._v("nvm -v")])]),t._v(" "),s("p",[t._v("就可以看见nvm的版本号啦！")]),t._v(" "),s("h2",{attrs:{id:"_4、配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、配置"}},[t._v("#")]),t._v(" 4、配置")]),t._v(" "),s("p",[t._v("安装完毕后，找到安装的路径，一些简单配置，")]),t._v(" "),s("h3",{attrs:{id:"_4-1配置环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1配置环境变量"}},[t._v("#")]),t._v(" 4.1配置环境变量")]),t._v(" "),s("p",[t._v("（**如果是默认安装在c盘的。就可以跳过。**如果是安装在其他盘的、则需要配置相应的环境变量）")]),t._v(" "),s("p",[t._v("怎样打开环境变量？")]),t._v(" "),s("p",[t._v("打开我的电脑==》右键》属性》高级系统设置》环境变量")]),t._v(" "),s("p",[t._v("在环境变量里就可以看见nvm的路径。如果是安装在其他盘的。就去找到对应的安装路径修改即可。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/dynamicbeam/picbed/master/20240620112608.png",alt:"image.png"}})]),t._v(" "),s("h3",{attrs:{id:"_4-2配置淘宝镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2配置淘宝镜像"}},[t._v("#")]),t._v(" 4.2配置淘宝镜像")]),t._v(" "),s("p",[t._v("使用npm的同学应该都知道，使用淘宝镜像安装比较快。")]),t._v(" "),s("p",[t._v("我们先找到nvm所在文件位置，点开"),s("code",[t._v("setting.txt")])]),t._v(" "),s("p",[t._v("里面的配置。原本只有2行代码。我们只需要在最后面追加2行代码即可：")]),t._v(" "),s("div",{staticClass:"language-cobol extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cobol"}},[s("code",[t._v("node_mirror"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("npmmirror"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mirrors"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\nnpm_mirror"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("npmmirror"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mirrors"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("npm"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n")])])]),s("p",[t._v("然后保存关闭。")]),t._v(" "),s("h2",{attrs:{id:"_5、使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、使用"}},[t._v("#")]),t._v(" 5、使用")]),t._v(" "),s("p",[t._v("打开cmd")]),t._v(" "),s("p",[t._v("执行以下命令：")]),t._v(" "),s("blockquote",[s("p",[t._v("nvm ls                      // 看安装的所有node.js的版本"),s("br"),t._v(" "),s("br"),t._v("\nnvm list available          // 查显示可以安装的所有node.js的版本\n"),s("img",{attrs:{src:"https://raw.githubusercontent.com/dynamicbeam/picbed/master/20240620112820.png",alt:"image.png"}})])]),t._v(" "),s("p",[t._v("可以在可选列表里。选择任意LTS版本安装.")]),t._v(" "),s("p",[t._v("执行：")]),t._v(" "),s("blockquote",[s("p",[t._v("nvm install 18.20.2")])]),t._v(" "),s("p",[t._v("安装好了之后。可以执行：")]),t._v(" "),s("blockquote",[s("p",[t._v("nvm ls")])]),t._v(" "),s("p",[t._v("可以在列表里看到这个版本：")]),t._v(" "),s("p",[t._v("如果想使用18.20.2这个版本的话。就执行：")]),t._v(" "),s("blockquote",[s("p",[t._v("nvm use 18.20.2\n然后执行：")])]),t._v(" "),s("blockquote",[s("p",[t._v("node -v")])]),t._v(" "),s("p",[t._v("就可以看到当前版本已经是18.20.2了")]),t._v(" "),s("h2",{attrs:{id:"常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[t._v("#")]),t._v(" 常用命令：")]),t._v(" "),s("div",{staticClass:"language-cobol extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cobol"}},[s("code",[t._v("nvm "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("off")]),t._v("                     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" 禁用node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js版本管理"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("不卸载任何东西"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnvm "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v("                      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" 启用node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js版本管理\nnvm install "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("version"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" 安装node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js的命名 version是版本号 例如：nvm install "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.12")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),t._v("\nnvm uninstall "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("version"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" 卸载node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js是的命令，卸载指定版本的nodejs，当安装失败时卸载使用\nnvm ls                      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" 显示所有安装的node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js版本\nnvm "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("list")]),t._v(" available          "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" 显示可以安装的所有node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js的版本\nnvm "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("version"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" 切换到使用指定的nodejs版本\nnvm v                       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" 显示nvm版本\nnvm install stable          "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" 安装最新稳定版\n")])])]),s("div",{staticClass:"language-cobol extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cobol"}},[s("code",[t._v("nvm命令行操作命令\n"),s("span",{pre:!0,attrs:{class:"token level number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("nvm nvm "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("list")]),t._v(" 是查找本电脑上所有的node版本\n \n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" nvm "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("list")]),t._v(" 查看已经安装的版本\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" nvm "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("list")]),t._v(" installed 查看已经安装的版本\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" nvm "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("list")]),t._v(" available 查看网络可以安装的版本\n \n"),s("span",{pre:!0,attrs:{class:"token level number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("nvm install 安装最新版本nvm\n \n"),s("span",{pre:!0,attrs:{class:"token level number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("nvm "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("version"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ## 切换使用指定的版本node\n \n"),s("span",{pre:!0,attrs:{class:"token level number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("nvm ls 列出所有版本\n \n"),s("span",{pre:!0,attrs:{class:"token level number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("nvm current显示当前版本\n \n"),s("span",{pre:!0,attrs:{class:"token level number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("nvm alias "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("version"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ## 给不同的版本号添加别名\n \n"),s("span",{pre:!0,attrs:{class:"token level number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("nvm unalias "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ## 删除已定义的别名\n \n"),s("span",{pre:!0,attrs:{class:"token level number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("nvm reinstall-packages "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("version"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ## 在当前版本node环境下，重新全局安装指定版本号的npm包\n \n"),s("span",{pre:!0,attrs:{class:"token level number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("nvm "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" 打开nodejs控制\n \n"),s("span",{pre:!0,attrs:{class:"token level number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("nvm "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("off")]),t._v(" 关闭nodejs控制\n \n"),s("span",{pre:!0,attrs:{class:"token level number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("nvm proxy 查看设置与代理\n \n"),s("span",{pre:!0,attrs:{class:"token level number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("nvm node_mirror [url] 设置或者查看setting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt中的node_mirror，如果不设置的默认是 https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nodejs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dist"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n　　nvm npm_mirror [url] 设置或者查看setting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt中的npm_mirror"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("如果不设置的话默认的是： https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("github"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("npm"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("npm"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("archive"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n \n"),s("span",{pre:!0,attrs:{class:"token level number"}},[t._v("13")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("nvm uninstall "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("version"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 卸载制定的版本\n \n"),s("span",{pre:!0,attrs:{class:"token level number"}},[t._v("14")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("nvm "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" [version] [arch] 切换制定的node版本和位数\n \n"),s("span",{pre:!0,attrs:{class:"token level number"}},[t._v("15")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("nvm root [path] 设置和查看root路径\n \n"),s("span",{pre:!0,attrs:{class:"token level number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("nvm version 查看当前的版本\n")])])]),s("p",[t._v("在做项目的时候。不同的项目使用的nodejs版本可能不一样。我们可以在配置文件package.json里看见：")]),t._v(" "),s("p",[t._v("由于nodejs版本和npm版本的不同。导致项目无法运行。所以我们就需要用到nvm这个工具了！")]),t._v(" "),s("h2",{attrs:{id:"结论"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[t._v("#")]),t._v(" 结论")]),t._v(" "),s("p",[t._v("nvm对于任何Node.js开发人员来说都是一个很棒的工具。它可以实现无忧安装，并在不同版本之间轻松切换，从而节省了真正重要的事情的时间")])])}),[],!1,null,null,null);s.default=r.exports}}]);