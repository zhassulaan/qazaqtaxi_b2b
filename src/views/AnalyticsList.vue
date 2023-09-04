<template>
	<div class='home'>
		<Controller />
		<Statistics :statistics='info' />

		<New :class="{ 'hide': !add }" @close='add = false'>
			<template #column1>
        <div class='new-column__box'>
					<p>ФИО</p>
					<Input type='text' text='ФИО' />
				</div>
        <div class='new-column__box'>
					<p>Номер</p>
					<Input type='number' text='Номер' />
				</div>
        <div class='new-column__box'>
					<p>Название компании</p>
					<Input type='text' text='Название компании' />
				</div>
        <div class='new-column__box'>
					<p>Лимит на деньги</p>
					<Input type='number' text='Лимит на деньги' />
				</div>
      </template>

			<template #column2>
        <div class='new-column__box'>
					<p>Тариф</p>
					<Select :tariffs='tariffs' />
				</div>
      </template>
		</New>

		<div class='home-control'>
			<Search />
			<Button
				v-if='add === false'
				text='Добавить пользователя'
				@click='add = true'
			/>
			<Button
				v-if='add === true'
				text='Отменить'
				@click='add = false'
			/>
		</div>
		
		<Table :list='list_info'>
			<template #detail='{ item }'>
				<Analyze :info='item' />
			</template>
		</Table>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	import Analyze from '@/components/Analyze.vue';
	import Button from '@/components/Button.vue';
	import Controller from '@/components/Controller.vue';
	import Input from '@/components/Input.vue';
	import New from '@/components/New.vue';
	import Statistics from '@/components/Statistics.vue';
	import Search from '@/components/Search.vue';
	import Select from '@/components/Select.vue';
	import Table from '@/components/Table.vue';

	const info = [
		{
			name: 'Кол-во поездок',
			number: 150,
		}, {
			name: 'Сумма поездок',
			number: 150,
		}, {
			name: 'Кол-во пользователей',
			number: 150,
		},
	];
	const list_info = [
		{
			name: 'Алибеков Алибек Алибекулы',
			phone: '+7 777 777 77 77',
			company: 'Alibek Internation',
			total_order: 150,
			total_cost: 150,
		}, {
			name: 'Алибеков Алибек Алибекулы',
			phone: '+7 777 777 77 77',
			company: 'Alibek Internation',
			total_order: 150,
			total_cost: 150,
		}, {
			name: 'Алибеков Алибек Алибекулы',
			phone: '+7 777 777 77 77',
			company: 'Alibek Internation',
			total_order: 150,
			total_cost: 150,
		}, {
			name: 'Алибеков Алибек Алибекулы',
			phone: '+7 777 777 77 77',
			company: 'Alibek Internation',
			total_order: 150,
			total_cost: 150,
		}, {
			name: 'Алибеков Алибек Алибекулы',
			phone: '+7 777 777 77 77',
			company: 'Alibek Internation',
			total_order: 150,
			total_cost: 150,
		}, {
			name: 'Алибеков Алибек Алибекулы',
			phone: '+7 777 777 77 77',
			company: 'Alibek Internation',
			total_order: 150,
			total_cost: 150,
		}, {
			name: 'Алибеков Алибек Алибекулы',
			phone: '+7 777 777 77 77',
			company: 'Alibek Internation',
			total_order: 150,
			total_cost: 150,
		},
	];
	const tariffs = [
		{
			id: 'econom',
			name: 'Эконом',
		}, {
			id: 'comfort',
			name: 'Комфорт',
		}, {
			id: 'business',
			name: 'Бизнес',
		}, {
			id: 'business+',
			name: 'Бизнес +',
		}, {
			id: 'lady',
			name: 'Леди',
		},
	];
	const add = ref(false);
</script>
