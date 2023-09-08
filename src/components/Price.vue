<template>
	<div class='price btn'>
		<h2>{{ price }}</h2>
	</div>
</template>

<script setup>
const prop = defineProps({
	price: String,
});
</script>

<style scoped lang='scss'>
.price {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 169px;
	height: 60px;
	border: 1px solid var(--clr-text-primary);
	border-radius: 15px;
	&.active {
		border: 1px solid var(--clr-orange);
	}
}
</style>
