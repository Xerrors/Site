module.exports = {
  head: [
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicon.png' }],
  ],
  title: 'Angor',
  description: 'Angor playground',
  permalink: "/:year/:month/:day/:slug",
  themeConfig: {
    sidebar: false,
    github: "https://github.com/Xerrors/Site",
    logo: '/avatar.jpg',
    lastUpdated: '修改于',
    search: false,
    nav: [
      { text: '📃 文章', link: '/blog/' },
      { text: '📰 专栏Alpha', link: '/zhuanlan/' },
      { text: '🎵 音乐', link: '/music/' },
      { text: '🤪 动态', link: '/zone/' },      
      { text: '🚥 导航', link: '/guide/' },
      {
        text: '🔨 工具',
        items: [
          { text: '🔐 寻密', link: '/tools/findpwd.html' },
          { text: '🔗 友链', link: '/about/links.html' }
        ]
      }
    ]
  },
  // plugins: ['@vuepress/pwa'],
  plugins: [
    [
      'vuepress-plugin-medium-zoom',
      {
        selector: '.my-wrapper .my-img',
        delay: 1000,
        options: {
          margin: 24,
          background: '#BADA55',
          scrollOffset: 0,
        },
      },
    ],
  ],
  configureWebpack: {
    resolve: {
      alias: {
        // '@alias': 'src/'
      }
    }
  }
}