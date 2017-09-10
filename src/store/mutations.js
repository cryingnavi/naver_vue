//상태를 변경하는 기능만을 뽑아서...
export default {
	"LIST": function(state, payload){
		state.postList = payload.data;
	},
	"DETAIL": function(state, payload){
		state.post = payload.data;
	},
	"USER": function(state, payload){
		state.user = payload.data;
	},
	"EDIT": function(state, payload){
		//state.user = payload.data;
	},
	"LOGIN": function(state, payload){
		state.user = payload.data;
	},
	"ISLOGIN": function(state, payload){
		state.isLogin = payload.data;
	},
	"USERDATA": function(state, payload){
		state.userData = payload.data;
	}
}