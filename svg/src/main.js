import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.less' // global css
import '@/icons' // icon

Vue.config.productionTip = false

import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui';
Vue.use(ElementUI);

// import Viewer from 'v-viewer'
// import 'viewerjs/dist/viewer.css'

// //Vue.use(Viewer) 默认配置写法
// Vue.use(Viewer, {
//     defaultOptions: {
//         zIndex: 9999
//     }
// })

// import {
//   Row,
//   Col,
//   Table,
//   TableColumn,
//   Dropdown,
//   DropdownMenu,
//   DropdownItem,
//   Input,
//   Button,
//   Form,
//   FormItem,
//   Tag,
//   Dialog,
//   Card,
//   Tree,
//   Checkbox,
//   DatePicker,
//   TimePicker,
//   Select,
//   Option,
//   Loading,
//   Progress,
//   Message,
//   Tabs,
// } from 'element-ui'

// Vue.use(Row)
// Vue.use(Col)
// Vue.use(Table)
// Vue.use(TableColumn)
// Vue.use(Dropdown)
// Vue.use(DropdownMenu)
// Vue.use(DropdownItem)
// Vue.use(Input)
// Vue.use(Button)
// Vue.use(Form)
// Vue.use(FormItem)
// Vue.use(Tag)
// Vue.use(Dialog)
// Vue.use(Card)
// Vue.use(Tree)
// Vue.use(Checkbox)
// Vue.use(DatePicker)
// Vue.use(TimePicker)
// Vue.use(Select)
// Vue.use(Option)
// Vue.use(Loading)
// Vue.use(Progress)
// Vue.use(Tabs)

// Message.install = function (Vue) {
//   Vue.prototype.$message = Message
// }
// Vue.use(Message)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
