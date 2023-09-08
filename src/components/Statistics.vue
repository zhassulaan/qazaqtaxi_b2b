<template>
	<div class='statistics'>
		<Filter v-if='filter' />
		<div class='statistics-container'>
			<Counter
				v-for='(statistic, idx) in statistics'
				:key='idx'
				:statistic='statistic'
				:icon='icons[idx]'
				:button='button && idx === 0'
			/>
		</div>
	</div>
</template>

<script setup>
import Counter from '@/components/Counter.vue';
import Filter from '@/components/Filter.vue';

const props = defineProps({
	filter: {
		type: Boolean,
		default: true,
	},
	button: {
		type: Boolean,
		default: false,
	},
	statistics: Array,
});
const icons = ['order', 'currency', 'user'];
</script>

<style setup lang='scss'>
.statistics {
	width: 100%;
	height: 255px;
	background-color: var(--clr-grey);
	border-radius: 19px;
	margin-top: 20px;
	padding: 15px 2.34375vw;
	overflow: hidden;
	&-container {
		display: flex;
		gap: 4.6875vw;
		margin-top: 15px;
	}
}
</style>
