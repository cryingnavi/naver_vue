<template>
<div>
	<nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
		<a class="navbar-brand" href="#">NAVER</a>
		<button v-show="isLogin" @click="logout">로그아웃</button>
	</nav>
	<router-view></router-view>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {    
	name: 'app',
	computed: mapState(['isLogin', 'userData']),
	watch: {
		isLogin: function(newVal, oldVal){
			if(newVal){
				this.$router.push({ name: 'list'})
			}
			else{
				this.$router.push({ name: 'home'})	
			}
		}
	},
	methods: {
		logout: function(){
			this.$store.dispatch("LOGOUT");
		}
	}
}
</script>

<style scoped>
@import url("https://cdn.bootcss.com/bootstrap/4.0.0-beta/css/bootstrap.css");
.fixed-top {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		z-index: 1030;
}

.bg-inverse {
		background-color: #292b2c!important;
}

.content-center{
	margin-top: 70px;
	width: 100%;
}
</style>
