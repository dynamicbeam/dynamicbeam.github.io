module.exports = {
  title: '吴志勇的个人博客',
  description: 'Just playing around',
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Guide',
        items: [{ text: '前端', link: '/blog/frontend/'}, { text: '后端', link: '/blog/backend/'}],
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
        ['js','es6'] //侧边栏第一个页面是：/blog/frontend/README.md,、链接文字自动获取(页面的第一个header)，即h1(前端技术)
      ]
    },
    // sidebar: 'auto',
    sidebarDepth: 4,

  }
}