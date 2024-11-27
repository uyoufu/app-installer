export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/contact-us.html", { loader: () => import(/* webpackChunkName: "contact-us.html" */"/app/app-installer/docs/.vuepress/.temp/pages/contact-us.html.js"), meta: {"title":"联系我们"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/app/app-installer/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"主页"} }],
  ["/android-recommended/", { loader: () => import(/* webpackChunkName: "android-recommended_index.html" */"/app/app-installer/docs/.vuepress/.temp/pages/android-recommended/index.html.js"), meta: {"title":""} }],
  ["/apps/bentley-free.html", { loader: () => import(/* webpackChunkName: "apps_bentley-free.html" */"/app/app-installer/docs/.vuepress/.temp/pages/apps/bentley-free.html.js"), meta: {"title":"Bentley-Free 软件安装教程"} }],
  ["/apps/scoop.html", { loader: () => import(/* webpackChunkName: "apps_scoop.html" */"/app/app-installer/docs/.vuepress/.temp/pages/apps/scoop.html.js"), meta: {"title":"scoop, 开源免费的个人和企业级软件安装器"} }],
  ["/archives/", { loader: () => import(/* webpackChunkName: "archives_index.html" */"/app/app-installer/docs/.vuepress/.temp/pages/archives/index.html.js"), meta: {"title":""} }],
  ["/free-commercial/", { loader: () => import(/* webpackChunkName: "free-commercial_index.html" */"/app/app-installer/docs/.vuepress/.temp/pages/free-commercial/index.html.js"), meta: {"title":""} }],
  ["/windows-recommended/", { loader: () => import(/* webpackChunkName: "windows-recommended_index.html" */"/app/app-installer/docs/.vuepress/.temp/pages/windows-recommended/index.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/app/app-installer/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
