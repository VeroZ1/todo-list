import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue();

// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
	// 当被绑定的元素插入到 DOM 中时……
	inserted: function(el) {
		// 聚焦元素
		el.focus();
	}
});

new Vue({
	render: h => h(App),
}).$mount('#app')
