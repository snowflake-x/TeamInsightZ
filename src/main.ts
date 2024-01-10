import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import { useOverlayStore } from './states/overlayOptions'
import { registryParameter } from './states/gameParameters'
import { LcuData } from './states/lcuData'

import localeFile from '@/i18n/i18n.json'

const i18n = createI18n({
  locale: 'zh-CN',
  fallbackLocale: 'en-US',
  messages: localeFile,
})
export const i18 = i18n
const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.provide('i18n', i18n);
app.use(i18n)

/**
 * 点击外部关闭
 */
app.directive('click-outside', {
  mounted(el: any, bindings: any) {
    el.handler = function (e: any) {
      // 检查目标元素是否是一个 naive-ui 组件
      if (e.target.className.startsWith('n-')||e.path.map((el:any)=>el.className).includes('v-binder-follower-content')) {
        return; // 如果是，那么不做任何事情
      }
      
      if (!(el === e.target || el.contains(e.target))) {
        bindings.value(e)
      }
    }
    document.addEventListener('click', el.handler, true)
  },
  unmounted(el: any) {
    document.removeEventListener('click', el.handler)
  }
})

const overaly = useOverlayStore()

const mountVueUI = async () => {
  let intervalId = setInterval(() => {
    const language = document.body.dataset["locale"] as any;
    if (language) {
      console.log('[TeamInsightz] language: ', language); 
      overaly.language = language;
      i18n.global.locale = language;
      clearInterval(intervalId); // 停止定时器
      const root = document.createElement('div')
      root.setAttribute('id', 'teaminsightz')
      root.style.zIndex = '19002';
      document.body.appendChild(root);
      app.mount('#teaminsightz')
      
      
      window.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key.toLowerCase() === 't') {
          overaly.overlayOptions.show = !overaly.overlayOptions.show
        }
      })  
    }
  }, 100); // 每隔1000毫秒（1秒）执行一次
 
}


// For UI debugging
//@ts-ignore
if (!window.riotInvoke) {
  window.addEventListener('load', mountVueUI)
}

// For pengu
export function init(context: PenguInitContext) {
  // Register socket listener
  registryParameter(context)
  // Init LcuData
  LcuData.init()
  console.log("[TeamInsightz] Pengu init");

}
export function load() {
  mountVueUI()
}