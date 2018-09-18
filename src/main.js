/**
 * 入口JS
 */
import Vue from 'vue'
import {Button, Toast} from 'mint-ui'
import App from './App.vue'
import router from './router'
import store from './store'

// 注册全局组件标签
Vue.component(Button.name, Button) //<mt-button>
Vue.component(Toast.name, Toast) 

new Vue ({
	el: '#app',
	//components: { App }  	vue1.0的写法
	render: h => h(App),  // vue2.0的写法
	router, //使用上vue-router
	store, //使用上vuex
})
