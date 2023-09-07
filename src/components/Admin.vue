<template>
	<div class='detail' :class="{ 'archive': archive }">
		<div class='detail-box'>
			<p class='detail-box__text'>Контактное  лицо</p>
			<Input
				v-if='edit'
				type='text'
				:text='info.name'
			/>
			<Text v-else :text='info.name' />
		</div>

		<div class='detail-box'>
			<p class='detail-box__text'>Номер</p>
			<Input
				v-if='edit'
				type='text'
				:text='info.phone'
			/>
			<Text v-else :text='info.phone' />
		</div>

		<div class='detail-box'>
			<p class='detail-box__text'>Название компании</p>
			<Input
				v-if='edit'
				type='text'
				:text='info.company'
			/>
			<Text v-else :text='info.company' />
		</div>

		<div class='detail-box'>
			<p class='detail-box__text'>Почта компании</p>
			<Input
				v-if='edit'
				type='text'
				:text='info.company'
			/>
			<Text v-else :text='info.company' />
		</div>

		<div class='detail-buttons' v-if='!archive'>
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
			<Button text='Деактивация' />
		</div>
	</div>

	<div class='detail' :class="{ 'archive': archive }">
		<Filter />
		<Counter
			:statistic="{ name: 'Кол-во поездок', number: info.total_order }"
			icon='order'
		/>
		<Counter
			:statistic="{ name: 'Сумма поездок', number: info.total_cost }"
			icon='currency'
		/>
	</div>

	<div class='detail' :class="{ 'archive': archive }">
		<Counter
			v-if='!archive'
			:statistic="{ name: 'Текущий баланс', number: info.balance }"
			icon='currency'
			:button='true'
		/>
		
		<div class='detail-buttons' v-if='!archive'>
			<Button text='Выставить счет' />
			<Button text='Снять' />
		</div>

		<div class='detail-buttons' v-else>
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
			<Button text='Активация' />
		</div>
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
		margin-bottom: 32px;
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
			.button {
				font-weight: 600;
				&:last-child {
					background: var(--clr-text-secondary);
				}
			}
		}
		&:first-child {
			width: 21.875vw;
			display: grid;
			grid-gap: 27px;
			margin-top: 5px;
			margin-left: 3.046875vw;
			.button {
				height: 51px;
				width: 10.390625vw;
				margin-top: 3px;
			}
		}
		&:nth-child(2),
		&:last-child {
			margin-top: 23px;
		}
		&:nth-child(2) {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.filter {
				margin-bottom: 22px;
			}
		}
		&:last-child {
			display: flex;
			flex-direction: column;
			gap: 20px;
			margin-right: 5.078125vw;
			.button {
				height: 53px;
				width: 12.109375vw;
			}
		}
		&.archive {
			&:first-child {
				grid-gap: 48px;
			}
			&:nth-child(2) .filter {
				margin: 0;
			}
			&:last-child {
				justify-content: end;
				width: 22.34375vw;
				.button {
					width: 10.390625vw;
				}
			}
		}
	}
</style>