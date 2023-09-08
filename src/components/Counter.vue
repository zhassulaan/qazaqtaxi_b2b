<template>
 	<div class='counter'>
		<icon-order
			class='counter-icon'
			v-if="icon === 'order'"
		/>
		<icon-currency
			class='counter-icon'
			v-if="icon === 'currency'"
		/>
		<icon-user
			class='counter-icon'
			v-if="icon === 'user'"
		/>

		<div class='counter-button btn'
			v-if='button'
			@click='balance_modal = true'
		>
			<p class='counter-button__text'>Пополнить</p>
			<icon-add />
		</div>

		<h3 class='counter-title'>{{ statistic.name }}</h3>
		<h1 class='counter-text'>{{ statistic.number }}</h1>
	</div>

	<Balance
		v-if='balance_modal'
		@open='card_modal = true'
		@close='balance_modal = false'
	/>
	<Card
		v-if='card_modal'
		@close='card_modal = false'
	/>
</template>

<script setup>
import { ref } from 'vue';
import IconAdd from '@/components/icons/Add.vue';
import IconCurrency from '@/components/icons/Currency.vue';
import IconOrder from '@/components/icons/Order.vue';
import IconUser from '@/components/icons/User.vue';
import Balance from '@/components/modals/Balance.vue';
import Card from '@/components/modals/Card.vue';

const props = defineProps({
	statistic: Object,
	icon: String,
	button: {
		type: Boolean,
		default: false,
	},
});
const balance_modal = ref(false);
const card_modal = ref(false);
</script>

<style scoped lang='scss'>
.counter {
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 15px;
	width: 25.78125vw;
	height: 156px;
	background-color: var(--clr-white);
	border-radius: 15px;
	padding: 62px 0 0 3.75vw;
	&-icon,
	&-button {
		position: absolute;
		top: 14px;
	}
	&-icon {
		left: 1.71875vw;
	}
	&-button {
		right: 1.71875vw;
		display: flex;
		justify-content: space-between;
		width: 121px;
		height: 30px;
		background-color: var(--clr-grey);
		border-radius: 6.25px;
		padding: 5px 10px;
		&__text {
			color: var(--clr-text-secondary);
			line-height: 20px;
			font-size: 15px;
			font-weight: 500;
		}
	}
	&-title,
	&-text {
		color: var(--clr-text-primary);
	}
	&-title {
		line-height: 17px;
	}
	&-text {
		line-height: 40px;
	}
}
</style>
