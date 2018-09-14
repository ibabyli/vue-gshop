<template>
	<div id="app">
		<router-view />
		<FooterGuilde v-show="$route.meta.showFooter"/>
	</div>
</template>

<script>
	import {mapActions} from 'vuex';
	import FooterGuilde from './components/FooterGuilde/FooterGuilde.vue'
	//import {reqFoodCategorys} from './api' //测试用的
	export default {
		/**
		 * 测试用的
		 */
		/*async mounted() {
			const result = await reqFoodCategorys();
			console.log(result);
		},*/
		mounted() {
			//this.$store.dispatch('getAddress');
			this.getAddress();
		},
		methods: {
			...mapActions(['getAddress'])
		},
		components: {
			FooterGuilde
		},
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.app
		width 100%
		height 100%
		background #f5f5f5
</style>
<!--
	作者：1586017762@qq.com
	时间：2018-09-14
	描述：获取地址两种方式
	第一种：
		mounted() {
			this.$store.dispatch('getAddress');
		},
	第二种：
		// 声明使用vuex
		import {mapActions} from 'vuex';
		mounted() {
			this.getAddress();
		},
		methods: {
			...mapActions(['getAddress'])
		},
-->