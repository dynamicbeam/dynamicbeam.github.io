module.exports = {
  title: '吴志勇的个人博客',
  description: 'Just playing around',
  themeConfig: {
    // displayAllHeaders: true,
    logo: '/assets/img/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Guide',
        items: [{ text: '前端', link: '/blog/frontend/css'}
          , { text: '后端', link: '/blog/backend/'}
          , { text: '其他', link: '/blog/others/vscode+github图床'}
        ],
      },
      {
        text: '友情链接',
        ariaLabel: '友情链接',
        items: [
          { text: 'Github', link: 'https://github.com/dynamicbeam/' },
          { text: 'CSDN', link: 'https://blog.csdn.net/kagurawill' }
        ]
      }

    ],
    

    sidebar: {
      '/blog/frontend/': [
        ['css','css'], //侧边栏第一个页面是：/blog/frontend/README.md,、链接文字自动获取(页面的第一个header)，即h1(前端技术)
        ['js','es6'],//侧边栏第一个页面是：/blog/frontend/README.md,、链接文字自动获取(页面的第一个header)，即h1(前端技术)
        {
          title: '框架',   // 必要的
          // path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          // collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            // '/',
            // '/jquery',
            ['jquery','jquery']
          ]
        },
        ['nvm管理nodejs','nvm管理nodejs'],
      ],
      '/blog/others/': [
        ['vscode+github图床','vscode+github图床'],
        ['服务安装','服务安装'],
        ['Docker教程','Docker教程'],
        ['idea热部署','idea热部署'],
        ['vscode 常用快捷键','vscode 常用快捷键'],
        ['旧笔记本安装pve+黑群晖','旧笔记本安装pve+黑群晖'],
        ['使用阿里云容器镜像服务','使用阿里云容器镜像服务'],
        
      ]
    },
    // sidebar: 'auto',
    sidebarDepth: 2,//md文档里的内容用二级标题，一级标题被侧边栏占了

  }
}