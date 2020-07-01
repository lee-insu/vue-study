<template>
	<form @submit.prevent="loginForm">
		<div>
			<label for="username">id:</label>
			<input id="username" type="text" v-model="username" />
		</div>
		<div>
			<label for="password">pwd:</label>
			<input id="password" type="text" v-model="password" />
		</div>
		<button :disabled="!usernameValid || !password" type="submit">login</button>
		<p>{{ logMessage }}</p>
	</form>
</template>

<script>
import { loginUser } from '@/api/index.js';
import { validateEmail } from '@/utils/validation.js';

export default {
	data() {
		return {
			username: '',
			password: '',
			logMessage: '',
		};
	},
	computed: {
		usernameValid() {
			return validateEmail(this.username);
		},
	},
	methods: {
		async loginForm() {
			try {
				const userdata = {
					username: this.username,
					password: this.password,
				};
				const { data } = await loginUser(userdata);
				console.log(data);
				this.$store.commit('setUsername', data.user.nickname);
				this.$router.push('/main');
				// this.logMessage = `${data.user.nickname}님 어서와`;
			} catch (error) {
				console.log(error.response);
				this.logMessage = `해당 내용을 찾을 수 없어`;
			} finally {
				this.initForm();
			}
		},
		initForm() {
			this.username = '';
			this.password = '';
		},
	},
};
</script>

<style></style>
