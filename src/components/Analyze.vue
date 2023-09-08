<template>
	<div class='detail'>
		<div class='detail-box'>
			<p class='detail-box__text'>ФИО</p>
			<Input v-if='edit' :text='info.name' type='text' />
			<Text v-else :text='info.name' />
		</div>

		<div class='detail-box'>
			<p class='detail-box__text'>Номер</p>
			<Input v-if='edit' :text='info.phone' type='text' />
			<Text v-else :text='info.phone' />
		</div>
		
		<div class='detail-box'>
			<p class='detail-box__text'>Название компании</p>
			<Input v-if='edit' :text='info.company' type='text' />
			<Text v-else :text='info.company' />
		</div>
	</div>

	<div class='detail'>
		<Filter />
		<Counter :statistic="{ name: 'Кол-во поездок', number: info.total_order, }" icon='order' />
	</div>

	<div class='detail'>
		<div class='detail-buttons'>
			<Button
				v-if='edit === false'
				text='Редактировать'
				@click='edit = true'
			/>
			<Button
				v-if='edit === true'
				text='Сохранить'
				@click='edit = false'
			/>
			<Button
				v-if='archive'
				text='Активация'
			/>
			<Button
				v-if='!archive'
				text='Деактивация'
			/>
		</div>
		<Counter :statistic="{ name: 'Сумма поездок', number: info.total_cost, }" icon='currency' />
	</div>
</template>

<script setup>
import { ref } from 'vue';
import Button from '@/components/Button.vue';
import Counter from '@/components/Counter.vue';
import Filter from '@/components/Filter.vue';
import Input from '@/components/Input.vue';
import Text from '@/components/Text.vue';

const props = defineProps({
	info: Object,
	archive: {
		type: Boolean,
		default: false,
	},
});
const edit = ref(false);
</script>

<style scoped lang='scss'>
.detail {
	&-box {
		display: grid;
		grid-gap: 5px;
		height: 76px;
		&__text {
			font-size: 15px;
		}
		.input {
			width: 100%;
			height: 53px;
			background-color: var(--clr-white);
			color: var(--clr-black);
		}
		h5 {
			font-size: 15px !important;
		}
	}
	&-buttons {
		display: flex;
		justify-content: space-between;
		margin-left: 3.90625vw;
		.button {
			width: 10.390625vw;
			height: 53px;
			font-weight: 600;
		}
	}
	&:first-child {
		width: 21.875vw;
		display: grid;
		grid-gap: 20px;
		margin-left: 3.046875vw;
	}
	&:nth-child(2),
	&:last-child {
		display: flex;
		flex-direction: column;
		gap: 43px;
		margin-top: 23px;
	}
	&:last-child {
		margin-right: 5.3125vw;
	}
}
</style>
