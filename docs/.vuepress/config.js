module.exports = {
  base: '/financial-vue/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'financial-vue',
      description: 'Fullstack Vue App Monorepo Boilerplate'
    }
  },
  serviceWorker: true,
  themeConfig: {
    repo: 'snurby7/financial-vue',
    docsDir: 'docs',
    editLinks: true,
    sidebarDepth: 1,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'Guide',
            link: '/guide/'
          },
          {
            text: 'Changelog',
            link: 'https://github.com/financial-vue/blob/dev/CHANGELOG.md'
          }
        ],
        sidebar: {
          '/guide/': [
            '/guide/'
          ]
        }
      }
    }
  }
}
