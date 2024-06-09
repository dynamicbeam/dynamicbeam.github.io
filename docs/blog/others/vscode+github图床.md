# github图床配置

+ github上新建公开仓库
![20240503200501](https://raw.githubusercontent.com/dynamicbeam/picbed/master/20240503200501.png)

# vscode安装picgo插件
![20240503201025](https://raw.githubusercontent.com/dynamicbeam/picbed/master/20240503201025.png)


>插件配置github和cdn
1. 获取github上的token
+ 点击"Settings"按钮：
+ 进入页面后，点击"Developer settings"按钮
+ 点击"Personal access tokens"按钮，然后点击Generate token：
+ 填写描述，选择"repo"权限，然后拉到下面点击"Generate token"按钮

2. 插件配置
`vscode`文件->首选项->设置->找到picgo的配置
>配置如下：
![20240503201959](https://raw.githubusercontent.com/dynamicbeam/picbed/master/20240503201959.png)



# 过程中遇到的问题
+ 需要注意的是github要求仓库大小不超过1G，否则会被检测到做图床，可以快到1G时另外建一个库
+ github图片显示不了
解析不到这个域名`raw.githubusercontent.com`，将ip加到本地hosts

参考[GitHub图片显示失败](https://www.cnblogs.com/devilmaycry812839668/p/17778589.html)

+ cdn失效
去掉custom url

![20240503204528](https://raw.githubusercontent.com/dynamicbeam/picbed/master/20240503204528.png)

+ github的访问不是很好的话可以用七牛云代替

![20240503211911](http://scwh1zyu0.hn-bkt.clouddn.com/20240503211911.png)



![20240503212419](http://scwh1zyu0.hn-bkt.clouddn.com/20240503212419.png)

+ vscode不能显示http链接的图片

>`ctrl+shift+p`->预览安全->允许不安全内容

![vscode+github图床-2024-05-04-09-35-05](http://scwh1zyu0.hn-bkt.clouddn.com/vscode+github图床-2024-05-04-09-35-05.png)