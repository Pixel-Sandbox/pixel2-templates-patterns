---
to: patterns/<%=h.changeCase.paramCase(name)%>/vue.config.js
---

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
