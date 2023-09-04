<template>
	<div class='home'>
		<Controller :admin='true' />
		<Statistics :statistics='info' />
		<Search />

		<Table :admin='true' :list='list_info'>
			<template #detail='{ item }'>
				<Admin
					:info='item'
					:archive='true'
				/>
			</template>
		</Table>
	</div>
</template>

<script setup>
	import Admin from '@/components/Admin.vue';
	import Controller from '@/components/Controller.vue';
	import Statistics from '@/components/Statistics.vue';
	import Search from '@/components/Search.vue';
	import Table from '@/components/Table.vue';

	const info = [
		{
			name: 'Кол-во поездок',
			number: 150,
		}, {
			name: 'Сумма поездок',
			number: 150,
		}, {
			name: 'Кол-во компании',
			number: 150,
		},
	];
	const list_info = [
		{
			name: 'Алибеков Алибек Алибекулы',
			phone: '+7 777 777 77 77',
			company: 'Alibek Internation',
			email: 'alibek@alibek.internation',
			total_order: 150,
			total_cost: 150,
			date: '17.08.2023',
		}, {
			name: 'Алибеков Алибек Алибекулы',
			phone: '+7 777 777 77 77',
			company: 'Alibek Internation',
			email: 'alibek@alibek.internation',
			total_order: 150,
			total_cost: 150,
			date: '17.08.2023',
		}, {
			name: 'Алибеков Алибек Алибекулы',
			phone: '+7 777 777 77 77',
			company: 'Alibek Internation',
			email: 'alibek@alibek.internation',
			total_order: 150,
			total_cost: 150,
			date: '17.08.2023',
		}, {
			name: 'Алибеков Алибек Алибекулы',
			phone: '+7 777 777 77 77',
			company: 'Alibek Internation',
			email: 'alibek@alibek.internation',
			total_order: 150,
			total_cost: 150,
			date: '17.08.2023',
		}, {
			name: 'Алибеков Алибек Алибекулы',
			phone: '+7 777 777 77 77',
			company: 'Alibek Internation',
			email: 'alibek@alibek.internation',
			total_order: 150,
			total_cost: 150,
			date: '17.08.2023',
		}, {
			name: 'Алибеков Алибек Алибекулы',
			phone: '+7 777 777 77 77',
			company: 'Alibek Internation',
			email: 'alibek@alibek.internation',
			total_order: 150,
			total_cost: 150,
			date: '17.08.2023',
		}, {
			name: 'Алибеков Алибек Алибекулы',
			phone: '+7 777 777 77 77',
			company: 'Alibek Internation',
			email: 'alibek@alibek.internation',
			total_order: 150,
			total_cost: 150,
			date: '17.08.2023',
		},
	];
</script>
