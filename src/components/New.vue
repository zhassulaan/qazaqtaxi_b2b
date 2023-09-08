<template>
	<div class='new'>
		<div class='new-column'>
			<slot name='column1'></slot>
		</div>

		<div class='new-column'>
			<slot name='column2'></slot>
		</div>

		<div class='new-column'>
			<slot name='column3'></slot>
			<Button text='Сохранить' @click="emit('close')" />
		</div>
	</div>
</template>

<script setup>
import Button from '@/components/Button.vue';

const emit = defineEmits('close');
</script>

<style scoped lang='scss'>
.new {
	display: flex;
	gap: 8.59375vw;
	max-height: 100vh;
	background-color: var(--clr-grey-2);
	border-radius: 19px;
	padding: 27px 2.34375vw 37px;
	overflow: hidden;
	margin-top: 21px;
	transition: .4s;
	&.hide {
		max-height: 0;
		margin-top: 0;
		padding-top: 0;
		padding-bottom: 0;
	}
	&-column {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 20px;
		.button {
			position: absolute;
			left: 0;
			bottom: 0;
			width: 21.875vw;
			height: 53px;
			font-size: 20px;
			font-weight: 500;
		}
	}
}
</style>
