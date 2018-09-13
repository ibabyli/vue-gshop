<template>
	<div id="app">
		<router-view />
		<FooterGuilde v-show="$route.meta.showFooter"/>
	</div>
</template>

<script>
	import FooterGuilde from './components/FooterGuilde/FooterGuilde.vue'
	export default {
		components: {
			FooterGuilde
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.app
		width 100%
		height 100%
		background #f5f5f5
</style>