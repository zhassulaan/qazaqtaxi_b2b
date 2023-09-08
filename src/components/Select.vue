<template>
 	<div class='select'>
		<div class='select-option'
			v-for='tariff in tariffs'
			:key='tariff.id'
		>
			<input class='select-option__radio' type='radio' />
			<h4 class='select-option__text'>{{ tariff.name }}</h4>
		</div>
	</div>
</template>

<script setup>
const prop = defineProps({
	tariffs: Array,
});
</script>

<style scoped lang='scss'>
.select {
	display: grid;
	grid-gap: 20px;
	width: 25.390625vw;
	background-color: var(--clr-white);
	border-radius: 10px;
	padding: 33px 2.34375vw;
	&-option {
		display: flex;
		align-items: center;
		gap: 1.171875vw;
		&__radio {
			width: 20px;
			height: 20px;
			accent-color: var(--clr-black);
		}
		&__text {
			line-height: 17px;
		}
	}
}
</style>
