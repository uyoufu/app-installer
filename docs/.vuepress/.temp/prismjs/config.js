import "/app/app-installer/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "/app/app-installer/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "/app/app-installer/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "/app/app-installer/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "/app/app-installer/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "/app/app-installer/node_modules/@vuepress/highlighter-helper/lib/client/composables/collapsedLines.js"

export default {
  setup() {
    setupCollapsedLines()
  }
}
