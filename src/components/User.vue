<template>
<div class="container">
	<div class="row">
		<div class="content-center">
			<h3>사용자 정보 표시</h3>
			<ul>
				<li>username : {{user.username}}</li>
				<li>name : {{user.name}}</li>
				<li>email : {{user.email}}</li>
			</ul>
		</div>
	</div>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name : 'user',
	computed: mapState(['user']),
	mounted : function() {
		this.$store.dispatch("USER", { username: this.$route.params.username });
	},
	methods : {
		
	}
}
</script>

<style scoped>
.content-center{
	margin-top: 70px;
	width: 100%;
}
</style>