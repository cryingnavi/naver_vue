var BASE_URL = "/api";
export default {
	LIST: BASE_URL + "/list",
	DETAIL: BASE_URL + "/list/${id}",
	EDIT: BASE_URL + "/edit/${id}",
	DELETE: BASE_URL + "/list/${id}",
	USER: BASE_URL + "/user/${username}",
	LOGIN: BASE_URL + "/login",
	LOGOUT: BASE_URL + "/logout",
	WRITE: BASE_URL + "/list",
}