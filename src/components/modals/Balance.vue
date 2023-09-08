<template>
	<div class='modal'>
		<div class='modal-background btn' @click="emit('close')"></div>
		<div class='modal-content'>
			<h1 class='modal-content__text'>На какую сумму хотите пополнить?</h1>
			
			<div class='modal-content__input'>
				<input
					placeholder='0'
					:value='own_price'
					type='number'
					@input='handleInput'
				/>
			</div>
			
			<div class='modal-content__prices'>
				<Price
					:class="{ 'active': idx === active }"
					:price='item'
					v-for='(item, idx) in prices'
					:key='idx'
					@click='selectPrice(idx)'
				/>
			</div>
			<Button text='Пополнить в указанную сумму' @click='openCardModal()' />
		</div>
	</div>
</template>

<script setup>
import { ref, watch } from 'vue';
import Button from '@/components/Button.vue';
import Price from '@/components/Price.vue';

const emit = defineEmits();
const prices = [100000, 200000, 300000, 400000, 500000];
const active = ref(-1);
const own_price = ref(0);

watch(own_price, (newValue) => {
	if (newValue !== prices[active.value]) {
		active.value = -1;
	}
});

function handleInput(e) {
	own_price.value = parseInt(e.target.value, 10);
}
function selectPrice(idx) {
	active.value = idx;
	own_price.value = prices[idx];
}
function openCardModal() {
	if (own_price.value !== 0) {
		emit('close');
		emit('open');
	}
}
</script>

<style scoped lang='scss'>
.modal-content {
	padding-right: 5.234375vw;
	padding-left: 5.234375vw;
	&__input {
		position: relative;
		width: 33.75vw;
		margin: 50px 0 38px;
		padding-bottom: 13px;
		input {
			width: inherit;
			height: 59px;
			border: none;
			text-align: center;
			color: var(--clr-text-secondary);
			font-size: 70px;
			font-weight: 500;
			&::placeholder {
				color: var(--clr-text-secondary);
			}
		}
		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 1px;
			background-color: var(--clr-black);
		}
	}
	&__prices {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 30px;
	}
}
</style>
