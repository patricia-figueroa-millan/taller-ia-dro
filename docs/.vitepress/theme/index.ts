import DefaultTheme from 'vitepress/theme'
import PromptDRO from './components/PromptDRO.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('PromptDRO', PromptDRO)
  }
}