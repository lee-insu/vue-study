import axios from 'axios';

/* const config = {
	baseURL: 'http://localhost:3000/',
}; */

//axios의 api, return시 instance로 바로 연결할 수 있는 장점
const instance = axios.create({
	baseURL: 'http://localhost:3000/',
});

function signupUser(userdata) {
	// const url = 'http://localhost:3000/signup';
	// axios.post =(url,userdata);
	return instance.post('signup', userdata);
}

function loginUser(userdata) {
	return instance.post('login', userdata);
}

export { signupUser, loginUser };
