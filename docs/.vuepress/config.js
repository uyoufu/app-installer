import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

// 配置参考:https://v1.vuepress.vuejs.org/zh/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5
// 图标通过 https://www.logosc.cn/favicon-generator 生成
export default defineUserConfig({
  lang: 'zh-CN',

  title: '逛逛开源界',
  description: '逛逛开源界，发现更多效率的宝藏软件',

  theme: defaultTheme({
    logo: '/images/logo.png',
    search: true,
    searchMaxSuggestions: 10,
    navbar: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: 'Window效率',
        link: '/windows-recommended'
      },
      {
        text: '免费试用',
        link: '/free-commercial'
      },
      {
        text: '安卓App',
        link: '/android-apps'
      },
      {
        text: '联系我们',
        link: 'contact-us'
      }
    ]
  }),

  bundler: viteBundler()
})
