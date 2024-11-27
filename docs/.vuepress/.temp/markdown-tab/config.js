import { CodeTabs } from "/app/app-installer/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/app/app-installer/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/app/app-installer/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
