<template>
	<div class='home'>
		<Controller :admin='true' />
		<Statistics :statistics='info' />

		<New :class="{ 'hide': !add }" @close='add = false'>
			<template #column1>
        <div class='new-column__box'>
					<p>Контактное  лицо</p>
					<Input type='text' text='Контактное  лицо' />
				</div>
        <div class='new-column__box'>
					<p>Номер</p>
					<Input type='number' text='Номер' />
				</div>
        <div class='new-column__box'>
					<p>Почта компании</p>
					<Input type='email' text='Почта компании' />
				</div>
      </template>
			
			<template #column2>
        <div class='new-column__box'>
					<p>Название компании</p>
					<Input type='text' text='Название компании' />
				</div>
        <div class='new-column__box'>
					<p>БИН</p>
					<Input type='number' text='БИН' />
				</div>
        <div class='new-column__box'>
					<p>Адрес компании</p>
					<Input type='text' text='Адрес компании' />
				</div>
      </template>

			<template #column3>
        <div class='new-column__box'>
					<p>ИИК</p>
					<Input type='number' text='ИИК' />
				</div>
        <div class='new-column__box'>
					<p>БИК</p>
					<Input type='number' text='БИК' />
				</div>
      </template>
		</New>

		<div class='home-control'>
			<Search />
			<Button
				v-if='add === false'
				text='Добавить компанию'
				@click='add = true'
			/>
			<Button
				v-if='add === true'
				text='Отменить'
				@click='add = false'
			/>
		</div>
		
		<Table :admin='true' :list='list_info'>
			<template #detail='{ item }'>
				<Admin :info='item' />
			</template>
		</Table>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import Admin from '@/components/Admin.vue';
import Button from '@/components/Button.vue';
import Controller from '@/components/Controller.vue';
import Input from '@/components/Input.vue';
import New from '@/components/New.vue';
import Search from '@/components/Search.vue';
import Statistics from '@/components/Statistics.vue';
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
		balance: 50000,
	}, {
		name: 'Алибеков Алибек Алибекулы',
		phone: '+7 777 777 77 77',
		company: 'Alibek Internation',
		email: 'alibek@alibek.internation',
		total_order: 150,
		total_cost: 150,
		balance: 50000,
	}, {
		name: 'Алибеков Алибек Алибекулы',
		phone: '+7 777 777 77 77',
		company: 'Alibek Internation',
		email: 'alibek@alibek.internation',
		total_order: 150,
		total_cost: 150,
		balance: 50000,
	}, {
		name: 'Алибеков Алибек Алибекулы',
		phone: '+7 777 777 77 77',
		company: 'Alibek Internation',
		email: 'alibek@alibek.internation',
		total_order: 150,
		total_cost: 150,
		balance: 50000,
	}, {
		name: 'Алибеков Алибек Алибекулы',
		phone: '+7 777 777 77 77',
		company: 'Alibek Internation',
		email: 'alibek@alibek.internation',
		total_order: 150,
		total_cost: 150,
		balance: 50000,
	}, {
		name: 'Алибеков Алибек Алибекулы',
		phone: '+7 777 777 77 77',
		company: 'Alibek Internation',
		email: 'alibek@alibek.internation',
		total_order: 150,
		total_cost: 150,
		balance: 50000,
	}, {
		name: 'Алибеков Алибек Алибекулы',
		phone: '+7 777 777 77 77',
		company: 'Alibek Internation',
		email: 'alibek@alibek.internation',
		total_order: 150,
		total_cost: 150,
		balance: 50000,
	},
];
const add = ref(false);
</script>
