<template>
<div class="container">
	<div class="row">
		<div class="content-center">
			<form>
				<h3>
					<input type="text" v-model="title" />
				</h3>
				<hr/>
				<textarea style="min-height: 300px;width:100%;" v-model="content"></textarea>
				<div style="float: right;" v-show="isLogin">
					<button type="button" class="btn btn-primary btn-lg" @click="write">글쓰기</button>
				</div>
			</form>
		</div>
	</div>
</div>

</template>

<script>
import { mapState } from 'vuex';
import _ from 'lodash';

export default {
	name : 'write',
	data: function(){
		return {
			title: "",
			content: ""
		};
	},
	computed: mapState(['userData', 'isLogin']),
	methods : {
		write: function(){
			var me = this;
			this.$store.dispatch("WRITE", {
				username: this.userData.username,
				title: this.title,
				content: this.content
			}).then(function(){
				me.$router.push({ name: 'list' });
			});
		}
	}
}
</script>

<style scoped>
.content-center{
	margin-top: 70px;
	width: 100%;
}
</style>