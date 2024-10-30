import comp from "/app/app-installer/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"主页\",\"heroImage\":\"/images/hero.svg\",\"actions\":[{\"text\":\"随便逛逛\",\"link\":\"/history\",\"type\":\"primary\"},{\"text\":\"APP精选\",\"link\":\"/recommended\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"品质佳软\",\"details\":\"所有软件均经过严格筛选，拒绝流氓、后门\"},{\"title\":\"拒绝选择\",\"details\":\"同一种功能的软件，只保留评分最高的一款\"},{\"title\":\"极简安装\",\"details\":\"自带安装管家，可一键快速安装、免费使用\"}],\"footer\":\"Copyright © 2021-persent WanderOpenSource\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"index.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
