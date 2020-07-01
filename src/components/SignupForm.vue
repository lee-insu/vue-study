<template>
	<form @submit.prevent="submitForm">
		<div>
			<label for="username">id:</label>
			<input id="username" type="text" v-model="username" />
		</div>
		<div>
			<label for="password">pwd:</label>
			<input id="password" type="text" v-model="password" />
		</div>
		<div>
			<label for="nickname">nick</label>
			<input id="nickname" type="text" v-model="nickname" />
		</div>
		<button :disabled="!usernameValid || !password || !nickname" type="submit">
			signup
		</button>
		<p>{{ logMessage }}</p>
	</form>
</template>

<script>
import { signupUser } from '@/api/index';
import { validateEmail } from '@/utils/validation.js';

export default {
	data() {
		return {
			username: '',
			password: '',
			nickname: '',
			logMessage: '',
		};
	},
	computed: {
		usernameValid() {
			return validateEmail(this.username);
		},
	},
	methods: {
		async submitForm() {
			try {
				const userdata = {
					username: this.username,
					password: this.password,
					nickname: this.nickname,
				};
				const { data } = await signupUser(userdata);
				this.logMessage = `${data.nickname}님 ㅎㅇㅎㅇ.`;
			} catch (error) {
				console.log(error.response);
				this.logMessage = `중복 된 항목이 있습니다.`;
			} finally {
				this.initForm();
			}
		},
		initForm() {
			this.username = '';
			this.password = '';
			this.nickname = '';
		},
	},
};
</script>

<style></style>
