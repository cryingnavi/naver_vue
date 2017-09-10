import PostAPI from '../api/PostAPI';

export default {
	LIST: (store, payload)=> {
		PostAPI.getList().then((res)=>{
			store.commit("LIST", {data: res.data.body});
		});
	},
	DETAIL: (store, payload)=> {
		PostAPI.getDetail(payload.id).then((res)=>{
			store.commit("DETAIL", {data: res.data.body});
		});
	},
	USER: (store, payload)=> {
		PostAPI.getUser(payload.username).then((res)=>{
			store.commit("USER", {data: res.data.body});
		});
	},
	LOGIN: (store, payload)=> {
		PostAPI.login(payload.username, payload.pwd).then((res)=>{
			if(res.data.header.code !== 20000){
				alert("Login Fail!!");
			}
			else{
				store.commit("ISLOGIN", {data: true});
				store.commit("USERDATA", {data: res.data.body});
			}
		});
	},
	LOGOUT: (store, payload)=> {
		PostAPI.logout().then((res)=>{
			if(res.data.header.code !== 20000){
				alert("Logout Fail!!");
			}
			else{
				store.commit("ISLOGIN", {data: false});
				store.commit("USERDATA", {data: {}});
			}
		});
	},
	EDIT: function(store, payload){
		PostAPI.edit(payload.id, payload.title, payload.content).then((res)=>{
			store.commit("DETAIL", {data: res.data.body});
		});
	},
	DEL: function(store, payload){
		PostAPI.del(payload.id).then((res)=>{
			store.commit("DETAIL", {data: {}});
		});
	},
	WRITE: function(store, payload){
		PostAPI.write(payload.username, payload.title, payload.content).then((res)=>{
			//store.commit("DETAIL", {data: {}});
		});
	}
}