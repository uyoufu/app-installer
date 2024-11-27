import comp from "/app/app-installer/docs/.vuepress/.temp/pages/apps/bentley-free.html.vue"
const data = JSON.parse("{\"path\":\"/apps/bentley-free.html\",\"title\":\"Bentley-Free 软件安装教程\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Bentley-Free 软件安装教程\",\"date\":\"2024-11-26T00:00:00.000Z\"},\"headers\":[{\"level\":2,\"title\":\"操作文档\",\"slug\":\"操作文档\",\"link\":\"#操作文档\",\"children\":[]},{\"level\":2,\"title\":\"视频介绍\",\"slug\":\"视频介绍\",\"link\":\"#视频介绍\",\"children\":[]},{\"level\":2,\"title\":\"其它说明\",\"slug\":\"其它说明\",\"link\":\"#其它说明\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"apps/bentley-free.md\"}")
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
