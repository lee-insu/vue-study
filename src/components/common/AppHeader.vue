<template>
	<header>
		<div class="form">
			<template v-if="isUserLogin">
				<span>{{ userNickname }}</span>
				<a href="javascript:;" @click="logoutUser">로그아웃</a>
			</template>
			<template v-else>
				<router-link to="/login">login</router-link> l
				<router-link to="/signup">signup</router-link>
			</template>
		</div>
	</header>
</template>

<script>
export default {
	computed: {
		isUserLogin() {
			return this.$store.getters.isLogin;
		},
		userNickname() {
			return this.$store.state.nickname;
		},
	},
	methods: {
		logoutUser() {
			this.$store.commit('clearUsername');
			this.$router.push('/');
		},
	},
};
</script>

<style>
.form {
	padding-left: 70%;
}
</style>
