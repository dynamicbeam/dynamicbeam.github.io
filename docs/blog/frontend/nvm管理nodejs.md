在工作中，我们可能同时在进行2个或者多个[不同的](https://so.csdn.net/so/search?q=%E4%B8%8D%E5%90%8C%E7%9A%84&spm=1001.2101.3001.7020)项目开发，每个项目的需求不同，进而不同项目必须依赖不同版本的NodeJS运行环境，这种情况下，对于维护多个版本的node将会是一件非常麻烦的事情，nvm就是为解决这个问题而产生的，他可以方便的在同一台设备上进行多个node版本之间切换。

### 1、[nvm](https://so.csdn.net/so/search?q=nvm&spm=1001.2101.3001.7020)介绍

**Node Version Manager（NVM）** 是一种用于管理多个主动节点.js版本的工具。

Node.js平台，Node.js工具社区和Node.js库是快速移动的目标 - 在一个Node.js版本下可能有效的方法不能保证适用于另一个版本的Node.js。因此，用户需要一些方法在 Node 的多个版本之间切换.js
### 为什么使用 NVM？

NVM 允许用户：

- 使用简单的命令在本地下载任何远程长期支持 （LTS） 版本的 Node.js。
- 直接从命令行在 Node.js 的多个版本之间轻松切换。
- 设置别名以轻松在不同下载版本的 Node.js之间切换。

### 

### 2、下载

### 操作系统支持

nvm同时支持Linux和macOS

我们这里是在Windows上操作

下载链接：

[https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases "https://github.com/coreybutler/nvm-windows/releases")### 3、安装：

如果电脑上之前已经单独安装了node，先卸载（可以在控制面板里面卸载），然后再安装nvm

傻瓜式一直点击下一步即可安装。

安装完成后，可以打开cmd命令行窗口。执行

> nvm -v

就可以看见nvm的版本号啦！ 


### 4、配置

安装完毕后，找到安装的路径，一些简单配置，

### 4.1配置环境变量

（**如果是默认安装在c盘的。就可以跳过。**如果是安装在其他盘的、则需要配置相应的环境变量）

怎样打开环境变量？

打开我的电脑==》右键》属性》高级系统设置》环境变量

在环境变量里就可以看见nvm的路径。如果是安装在其他盘的。就去找到对应的安装路径修改即可。


**如果安装nvm的文件夹里没有nodejs这个文件夹的话，可以自己手动新建一个空的nodejs文件夹即可。**

![](https://img-blog.csdnimg.cn/30e0aee3bed94448b2f9b49c9de3344f.png)

![](https://img-blog.csdnimg.cn/b0fbdbe451ff4f0b9bacd841ea009670.png)

### 4.2配置淘宝镜像

使用npm的同学应该都知道，使用淘宝镜像安装比较快。

我们先找到nvm所在文件位置，点开setting

![](https://img-blog.csdnimg.cn/fe6d4b2d3d0a41d793ceb29db846fd64.png)

 里面的配置。原本只有2行代码。我们只需要在最后面追加2行代码即可：

```cobol
node_mirror: http://npmmirror.com/mirrors/node/npm_mirror: http://registry.npmmirror.com/mirrors/npm/
```

如图所示：

![](https://img-blog.csdnimg.cn/direct/a5297783a3df4efe834c64f26f56206a.png)

然后保存关闭。

### 5、使用

打开cmd

执行以下命令：

> nvm ls                      // 看安装的所有node.js的版本  
>    
> nvm list available          // 查显示可以安装的所有node.js的版本

![](https://img-blog.csdnimg.cn/c7db8059f62240348fd838977618359f.png)

 可以在可选列表里。选择任意版本安装，比如安装16.15.0

执行：

> nvm install 16.15.0

安装好了之后。可以执行：

> nvm ls

可以在列表里看到这个版本：

![](https://img-blog.csdnimg.cn/914f6c07820b483a92c5a3ca6ed56f64.png)

 如果想使用16.15.0这个版本的话。就执行：

> nvm use 16.15.0

然后执行：

> node -v

就可以看到当前版本已经是16.15.0了

![](https://img-blog.csdnimg.cn/a9e8cea717ad466aa02469816ffb017c.png)

### 常用命令：

```cobol
nvm off                     // 禁用node.js版本管理(不卸载任何东西)nvm on                      // 启用node.js版本管理nvm install <version>       // 安装node.js的命名 version是版本号 例如：nvm install 8.12.0nvm uninstall <version>     // 卸载node.js是的命令，卸载指定版本的nodejs，当安装失败时卸载使用nvm ls                      // 显示所有安装的node.js版本nvm list available          // 显示可以安装的所有node.js的版本nvm use <version>           // 切换到使用指定的nodejs版本nvm v                       // 显示nvm版本nvm install stable          // 安装最新稳定版
```

```cobol
nvm命令行操作命令1,nvm nvm list 是查找本电脑上所有的node版本 - nvm list 查看已经安装的版本- nvm list installed 查看已经安装的版本- nvm list available 查看网络可以安装的版本 2,nvm install 安装最新版本nvm 3,nvm use <version> ## 切换使用指定的版本node 4,nvm ls 列出所有版本 5,nvm current显示当前版本 6,nvm alias <name> <version> ## 给不同的版本号添加别名 7,nvm unalias <name> ## 删除已定义的别名 8,nvm reinstall-packages <version> ## 在当前版本node环境下，重新全局安装指定版本号的npm包 9,nvm on 打开nodejs控制 10,nvm off 关闭nodejs控制 11,nvm proxy 查看设置与代理 12,nvm node_mirror [url] 设置或者查看setting.txt中的node_mirror，如果不设置的默认是 https://nodejs.org/dist/　　nvm npm_mirror [url] 设置或者查看setting.txt中的npm_mirror,如果不设置的话默认的是： https://github.com/npm/npm/archive/. 13,nvm uninstall <version> 卸载制定的版本 14,nvm use [version] [arch] 切换制定的node版本和位数 15,nvm root [path] 设置和查看root路径 16,nvm version 查看当前的版本
```

 在做项目的时候。不同的项目使用的nodejs版本可能不一样。我们可以在配置文件里看见：

![](https://img-blog.csdnimg.cn/b2910105c34641da90a9cbb3e225cdfa.png)

 由于nodejs版本和npm版本的不同。导致项目无法运行。所以我们就需要用到nvm这个工具了！

### 结论

nvm对于任何Node.js开发人员来说都是一个很棒的工具。它可以实现无忧安装，并在不同版本之间轻松切换，从而节省了真正重要的事情的时间