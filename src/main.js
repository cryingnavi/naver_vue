import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App'
import store from './store'

import Home from './components/Home';
import List from './components/List';
import Detail from './components/Detail';
import Edit from './components/Edit';
import User from './components/User';
import Write from './components/Write';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
	routes : [
		{  path: '/', name:'home', component:Home, beforeEnter(to, from, next) {
			next(store.state.isLogin ? '/list' : true);
		}},
		{  path: '/list', name:'list', component:List},
		{  path: '/list/:id', name:'detail', component:Detail },
		{  path: '/edit/:id', name:'edit', component:Edit, beforeEnter(to, from, next) {
			next(store.state.isLogin ? true : '/');
		}},
		{  path: '/user/:username', name:'user', component:User },
		{  path: '/write', name:'write', component:Write, beforeEnter(to, from, next) {
			next(store.state.isLogin ? true : '/');
		}}
	]
});

new Vue({
	store,
	router,
	el: '#app',
	template: '<App/>',
	components: { App }
});
