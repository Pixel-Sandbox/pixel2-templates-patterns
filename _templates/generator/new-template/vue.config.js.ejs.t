---
to: templates/<%=h.changeCase.paramCase(product)%>/<%=h.changeCase.paramCase(product)%>-<%=h.changeCase.paramCase(name)%>/vue.config.js
---

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
