<template>
	<div class="container">
		<div class="row">
			<div class="main-login main-center">
				<form class="form-horizontal" name="loginForm">
					<div class="form-group">
						<label for="name" class="cols-sm-2 control-label">Your ID</label>
						<div class="cols-sm-10">
							<div class="input-group">
								<span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
								<input type="text" class="form-control" name="name" id="name"  placeholder="Enter your Name" v-model="username" required="" />
							</div>
						</div>
					</div>

					<div class="form-group">
						<label for="pwd" class="cols-sm-2 control-label">Your Password</label>
						<div class="cols-sm-10">
							<div class="input-group">
								<span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
								<input type="text" class="form-control" name="pwd" id="pwd"  placeholder="Enter your Password" v-model="pwd" required=""/>
							</div>
						</div>
					</div>

					<div class="form-group">
						<button type="button" class="btn btn-primary btn-lg btn-block" @click="onSubmit">Login in</button>
					</div>

					<div class="form-group">
						<strong>아래 세개의 계정만 로그인이 됩니다.</strong>
						<p>(비밀 번호는 아무거나 입력할 수 있습니다.)</p>
						<ul>
							<li>super - 관리자 계정입니다.</li>
							<li>user1 - 일반 계정입니다.</li>
							<li>user2 - 일반 계정입니다.</li>
						</ul>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name : 'home',
	data: function(){
		return {
			username: "super",
			pwd: ""
		};
	},
	methods : {
		onSubmit: function(){
			var me = this;
			if(this.username && this.pwd){
				this.$store.dispatch("LOGIN", {
					username: this.username,
					pwd: this.pwd
				});
			}
		}
	}
}
</script>
<style scoped>
.main-login{
	background-color: #fff;
	/* shadows and rounded borders */
	-moz-border-radius: 2px;
	-webkit-border-radius: 2px;
	border-radius: 2px;
	-moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
	-webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.main-center{
	margin: 0 auto;
	width: 350px;
	padding: 40px 40px;
	margin-top: 70px;
}
</style>
