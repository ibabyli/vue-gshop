/**
 * 路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
	// 所有路由
	routes: [
		{ path: '/msite', component:Msite, meta: {showFooter: true}}, // 首页 ,meta对象：其中可以在App.vue中控制是否显示底下的FooterGuilde
		{ path: '/search', component:Search, meta: {showFooter: true}}, // 搜索
		{ path: '/order', component:Order, meta: {showFooter: true}}, // 订单
		{ path: '/profile', component:Profile, meta: {showFooter: true}}, // 个人
		{ path: '/login', component:Login}, // 登陆
		{ path: '/', redirect: '/msite'},  // 默认显示这个
		
		{ path: '/shop', component:Shop, 
			children: 
			[
				{path: '/shop/goods', component: ShopGoods},
				{path: '/shop/ratings', component: ShopRatings},
				{path: '/shop/info', component: ShopInfo},
				{path: '', redirect: '/shop/goods'},
			]
		},
	]
})
