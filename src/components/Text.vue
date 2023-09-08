<template>
	<div class='item'>
		<h4 class='item-text'>{{ text }}</h4>
	</div>
</template>

<script setup>
const prop = defineProps({
	text: String,
});
</script>

<style scoped lang='scss'>
.item {
	width: 21.875vw;
	height: 53px;
	border-radius: 10px;
	background-color: var(--clr-white);
	padding: 18px 1.5625vw;
	white-space: nowrap;
	&-text {
		overflow: hidden;
		text-overflow: ellipsis;
		line-height: 100%;
	}
}
</style>
