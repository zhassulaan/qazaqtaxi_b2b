<template>
	<div class='filter'>
		<h4 class='filter-text btn'
			v-if='start_date'
			@click="toggle('start')"
		>
			{{
				((start_date.day > 9) ? start_date.day : '0' + start_date.day)
					+ '.' +
				((start_date.month > 9) ? start_date.month : '0' + start_date.month)
					+ '.' +
				start_date.year
			}}
		</h4>
		<h4 class='filter-text btn'
			v-if='end_date'
			@click="toggle('end')"
		>
			{{
				((end_date.day > 9) ? end_date.day : '0' + end_date.day)
					+ '.' +
				((end_date.month > 9) ? end_date.month : '0' + end_date.month)
					+ '.' +
				end_date.year
			}}
		</h4>
		<div class='filter-icon btn' @click='toggle()'>
			<icon-calendar />
		</div>
		<Calendar
			:class="{ 'filter-hide': !active }"
			:style="{ left: (date_filter === 'end') ? 'calc(50% - 27.5px)' : auto }"
			:active_date="(date_filter === 'end') ? end_date : start_date"
			@action='selectDay'
		/>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import Calendar from '@/components/Calendar.vue';
import IconCalendar from '@/components/icons/Calendar.vue';

const date = new Date();
const start_date = ref({
	year: date.getFullYear(),
	month: date.getMonth() + 1,
	day: date.getDate(),
});
const end_date = ref({
	year: date.getFullYear(),
	month: date.getMonth() + 1,
	day: date.getDate(),
});
let active = ref(false);
let date_filter = ref('');

function toggle(id) {
	if (id) {
		if (date_filter.value === id) {
			active.value = !active.value;
		} else {
			active.value = true;
		}
		date_filter.value = id;
	} else {
		active.value = !active.value;
	}
}
function selectDay(new_active_date) {
	if (date_filter.value === 'start') {
		start_date.value = new_active_date;
	} else if (date_filter.value === 'end') {
		end_date.value = new_active_date;
	}
}
</script>

<style scoped lang='scss'>
.filter {
	position: relative;
	display: flex;
	align-items: center;
	width: 333px;
	height: 53px;
	background-color: #F8F8F8;
	border-radius: 10px;
	&-text {
		width: calc(50% - 48px / 2);
		text-align: center;
		color: var(--clr-text-primary);
		&:first-child {
			position: relative;
			&::after {
				position: absolute;
				content: '';
				top: 50%;
				right: 0;
				height: 35px;
				width: 1.5px;
				background-color: var(--clr-grey);
				transform: translateY(-50%);
			}
		}
	}
	&-icon {
		position: absolute;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 48px;
		height: 100%;
		background-color: var(--clr-orange);
		border-radius: 0 10px 10px 0;
		opacity: .4;
	}
	&-hide {
		max-height: 0;
		padding-top: 0;
		padding-bottom: 0;
	}
}
</style>