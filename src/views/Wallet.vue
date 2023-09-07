<template>
	<div class='home'>
		<Statistics
			:filter='false'
			:button='true'
			:statistics='info'
		/>
		<Search />
		<Table
			:detail='false'
			:list='list_info'
		/>
	</div>
</template>

<script setup>
	import Search from '@/components/Search.vue';
	import Statistics from '@/components/Statistics.vue';
	import Table from '@/components/Table.vue';

	const info = [
		{
			name: 'Тек	щий баланс',
			number: 50000,
			icon: 'currency'
		}, {
			name: 'Сколько потрачено',
			number: 150000,
			icon: 'currency'
		},
	];
	const list_info = [
		{
			name: 'Алибеков Алибек Алибекулы',
			phone: '+7 777 777 77 77',
			company: 'Alibek Internation',
			cash: '- 12345.0',
		}, {
			name: 'Алибеков Алибек Алибекулы',
			phone: '+7 777 777 77 77',
			company: 'Alibek Internation',
			cash: '- 12345.0',
		}, {
			name: 'Алибеков Алибек Алибекулы',
			phone: '+7 777 777 77 77',
			company: 'Alibek Internation',
			cash: '- 12345.0',
		}, {
			name: 'Алибеков Алибек Алибекулы',
			phone: '+7 777 777 77 77',
			company: 'Alibek Internation',
			cash: '- 12345.0',
		}, {
			name: 'Алибеков Алибек Алибекулы',
			phone: '+7 777 777 77 77',
			company: 'Alibek Internation',
			cash: '- 12345.0',
		}, {
			name: 'Алибеков Алибек Алибекулы',
			phone: '+7 777 777 77 77',
			company: 'Alibek Internation',
			cash: '- 12345.0',
		}, {
			name: 'Алибеков Алибек Алибекулы',
			phone: '+7 777 777 77 77',
			company: 'Alibek Internation',
			cash: '- 12345.0',
		},
	];
</script>
