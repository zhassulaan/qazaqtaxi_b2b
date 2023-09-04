<template>
	<div>
		<Welcome />
		<router-view />
	</div>
</template>

<script setup>
	import Welcome from '@/components/layouts/Welcome.vue';
</script>

<style scoped>
	div {
		display: flex;
		height: 100vh;
	}
</style>
