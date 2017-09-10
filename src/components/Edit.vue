<template>
<div class="container">
	<div class="row">
		<div class="content-center">
			<form>
				<h3>
					<input type="text" v-model="post.title" />
				</h3>
				<hr/>
				<div style="float: right;">
					<span>{{post.author}}</span> <span>{{post.date}}</span>
				</div>

				<textarea style="min-height: 300px;width:100%;" v-model="post.content"></textarea>
				<div style="float: right;">
					<button type="button" class="btn btn-primary btn-lg" @click="edit">수정하기</button>
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
	name : 'edit',
	computed: _.extend({
			href: function(){
				return '/#!/user/' + this.post.author;
			}
		},
		mapState(['post', 'isLogin', 'userData'])
	),
	mounted : function() {
		this.$store.dispatch("DETAIL", { id: this.$route.params.id });
	},
	methods : {
		edit: function(){
			var me = this;
			this.$store.dispatch("EDIT", {
				id: this.$route.params.id,
				title: this.post.title,
				content: this.post.content
			}).then(function(){
				me.$router.push({ name: 'detail', params: { id: me.$route.params.id }})
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