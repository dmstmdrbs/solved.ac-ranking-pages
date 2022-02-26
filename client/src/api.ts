import axios from "axios";

const BASE_URL = "https://solved.ac/api/v3";
axios.defaults.baseURL = BASE_URL;

export function fetchUserProfile(userId: string) {
	return axios
		.get(`/user/show`, {
			params: {
				solvedacToken: 123,
				handle: userId,
			},
		})
		.then((res) => res.data);
}
