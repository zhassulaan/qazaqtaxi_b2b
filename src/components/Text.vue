<template>
	<div class='text'>
		<h6>{{ text }}</h6>
	</div>
</template>

<script setup>
const prop = defineProps({
	text: String,
});
</script>

<style scoped lang='scss'>
.text {
	width: 21.875vw;
	height: 53px;
	border-radius: 10px;
	background-color: var(--clr-white);
	padding: 18px 1.5625vw;
	h6 {
		font-size: 15px;
		font-weight: 500;
	}
}
</style>
