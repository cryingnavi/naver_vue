import CONF from '../apiConfig.js';
import axios from 'axios';

export default {
	getList: function(){
		return axios.get(CONF.LIST);
	},
	getDetail: function(id){
		return axios.get(CONF.DETAIL.replace("${id}", id));
	},
	edit: function(id, title, content){
		return axios.put(CONF.EDIT.replace("${id}", id), {
			title: title,
			content: content
		});
	},
	del: function(id){
		return axios.delete(CONF.DELETE.replace("${id}", id));
	},
	getUser: function(username){
		return axios.get(CONF.USER.replace("${username}", username));
	},
	login: function(username, pwd){
		return axios.post(CONF.LOGIN, {
			username: username,
			pwd: pwd
		});
	},
	logout: function(){
		return axios.post(CONF.LOGOUT);
	},
	write: function(username, title, content){
		return axios.post(CONF.WRITE, {
			username: username,
			title: title,
			content: content
		});
	}
}