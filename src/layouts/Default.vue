<template>
	<div>
		<Header />
		<router-view />
	</div>
</template>

<script setup>
	import Header from '@/components/layouts/Header.vue';
</script>

<style scoped>
	div {
		background-color: var(--clr-background);
		min-height: 100vh;
	}
</style>
