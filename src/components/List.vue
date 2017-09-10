<template>
<div class="container">
	<div class="row">
		<div class="content-center">
			<table class="table">
				<thead>
					<tr>
						<th>#</th>
						<th>Title</th>
						<th>Author</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(post, index) in postList" @click="detail(post.id)">
						<th scope="row">{{index + 1}}</th>
						<td>{{post.title}}</td>
						<td><a v-bind:href="href[index]">{{post.author}}</a></td>
						<td>{{post.date}}</td>
					</tr>
				</tbody>
			</table>

			<div style="float: right;" v-show="isLogin">
				<button type="button" class="btn btn-primary btn-lg" @click="write">글쓰기</button>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import { mapState } from 'vuex';
import _ from 'lodash';

export default {
	name : 'list',
	computed: _.extend({
			href: function(){
				var arr = [];
				for(var i=0; i<this.postList.length; i++){
					arr.push('/#/user/' + this.postList[i].author);
				}
				return arr;
			}
		},
		mapState(['postList', 'isLogin'])
	),
	mounted : function() {
		this.$store.dispatch("LIST");
	},
	methods : {
		detail: function(id){
			this.$router.push({ name: 'detail', params: { id: id }})
		},
		write: function(){
			this.$router.push({ name: 'write' })	
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