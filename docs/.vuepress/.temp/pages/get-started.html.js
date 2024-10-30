import comp from "/app/app-installer/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"开始使用\",\"lang\":\"zh-CN\",\"frontmatter\":{\"uuid\":\"7deea49a-fd1e-11eb-ad13-597bfc858c85\",\"title\":\"开始使用\",\"tags\":[\"AppInstaller\"],\"updated\":\"2022-01-19T00:00:00.000Z\",\"abbrlink\":\"2QMK677\"},\"headers\":[{\"level\":2,\"title\":\"🥝简介\",\"slug\":\"🥝简介\",\"link\":\"#🥝简介\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"get-started.md\"}")
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
