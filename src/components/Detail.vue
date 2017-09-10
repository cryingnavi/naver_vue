<template>
<div class="container">
	<div class="row">
		<div class="content-center">
			<h3>{{post.title}}</h3>
			<hr/>
			<div style="float: right;">
				<span><a v-bind:href="href">{{post.author}}</a></span> <span>{{post.date}}</span>
			</div>

			<textarea style="min-height: 300px;width:100%;border:none;" readonly="">{{post.content}}</textarea>

			<div style="float: right;" v-show="(isLogin && post.author == userData.username) || (isLogin && userData.isAdmin)">
				<button type="button" class="btn btn-primary btn-lg" @click="edit">수정하기</button>
				<button type="button" class="btn btn-warning btn-lg" @click="del">삭제하기</button>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import { mapState } from 'vuex';
import _ from 'lodash';

export default {
	name : 'detail',
	computed: _.extend({
			href: function(){
				return '/#/user/' + this.post.author;
			}
		},
		mapState(['post', 'isLogin', 'userData'])
	),
	mounted : function() {
		this.$store.dispatch("DETAIL", { id: this.$route.params.id });
	},
	methods : {
		edit: function(){
			this.$router.push({ name: 'edit', params: { id: this.$route.params.id }})
		},
		del: function(){
			if(window.confirm("삭제하겠습니까?")){
				var me = this;
				this.$store.dispatch("DEL", { id: this.$route.params.id }).then(function(){
					me.$router.push({ name: 'list' });
				});
			}
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