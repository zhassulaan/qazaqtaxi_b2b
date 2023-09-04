<template>
	<div class='table'>
		<div class='table-header'>
			<h5 class='index'>№</h5>
			<h5 class='name'>{{ admin ? 'Контактное лицо' : 'ФИО' }}</h5>
			<h5 class='number'>Номер</h5>
			<h5 class='company'>Название компании</h5>
			<h5 class='email'>{{ pre_last_text }}</h5>
			<h5 class='date'>{{ last_text }}</h5>
		</div>

		<div class='table-body'>
			<div class='table-body__row' v-for='(item, idx) in list'>
				<div class='table-body__row-info btn'
					:key='idx + 1'
					@click='handle_toggle(idx + 1)'
				>
					<p class='index'>{{ idx + 1 }}</p>
					<p class='name'>{{ item.name }}</p>
					<p class='number'>{{ item.phone }}</p>
					<p class='company'>{{ item.company }}</p>
					<p class='email'>{{ item.a || item.email }}</p>
					<p class='date'>{{ item.b || item.cash || item.date }}</p>
				</div>

				<div class='table-body__row-detail'
					:class="{ 'hide': active !== idx + 1 }"
					v-if='detail'
					:key='idx + 1'
				>
					<slot name='detail' :item='item'></slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { computed, ref } from 'vue';

	const props = defineProps({
		admin: {
			type: Boolean,
			default: false,
		},
		detail: {
			type: Boolean,
			default: true,
		},
		list: Array,
	});
	const pre_last_text = computed(() => {
		const item = props.list[0];
		if (item.email) {
			return 'Почта компании';
		} else if (item.a) {
			return 'Точка А';
		} else {
			return '';
		}
	});
	const last_text = computed(() => {
		const item = props.list[0];
		if (item.b) {
			return 'Точка В';
		} else if (item.cash) {
			return 'Потрачено, тг';
		} else if (item.date) {
			return 'Дата деактиваций';
		} else {
			return '';
		}
	});
	const active = ref(0);

	function handle_toggle(id) {
		if (id !== active.value) {
			active.value = id;
		} else {
			active.value = 0;
		}
	}
</script>

<style scoped lang='scss'>
	.table {
		&-header,
		&-body__row-info {
			display: flex;
			justify-content: space-evenly;
			.index {
				width: 2.5vw;
			}
			.name {
				width: 19.21875vw;
			}
			.number {
				width: 11.484375vw;
			}
			.company {
				width: 21.015625vw;
			}
			.email {
				width: 18.359375vw;
			}
			.date {
				width: 16.484375vw;
			}
		}
		&-header {
			padding: 20px 1.171875vw 15px;
		}
		&-body {
			&__row {
				margin-top: 15px;
				&-info {
					background-color: var(--clr-grey);
					border-radius: 14px;
					padding: 18px 1.5625vw 17px;
				}
				&-detail {
					display: flex;
					justify-content: space-between;
					max-height: 100vh;
					background-color: var(--clr-grey-2);
					border-radius: 19px;
					padding: 22px 0 22px 2.34375vw;
					overflow: hidden;
					margin-top: 15px;
					transition: .4s;
					&.hide {
						max-height: 0;
						margin-top: 0;
						padding-top: 0;
						padding-bottom: 0;
					}
				}
			}
		}
	}
</style>
