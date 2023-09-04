<template>
	<div class='home'>
		<Statistics :statistics='info' />
		<Search />
		
		<Table :list='list_info'>
			<template #detail='{ item }'>
				<div class='application'>
					<div class='application-box'>
						<p>Дата</p>
						<Text :text='item.date' />
					</div>
					<div class='application-box'>
						<p>Точка А</p>
						<Text :text='item.a' />
					</div>
					<div class='application-box'>
						<p>Тариф</p>
						<Text :text='item.tariff' />
					</div>
					<div class='application-box'>
						<p>Время</p>
						<Text :text='item.time' />
					</div>
					<div class='application-box'>
						<p>Точка В</p>
						<Text :text='item.b' />
					</div>
					<div class='application-box'>
						<p>Цена</p>
						<Text :text='`${ item.price },0 тг`' />
					</div>
				</div>
			</template>
		</Table>
	</div>
</template>

<script setup>
	import Text from '@/components/Text.vue';
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
			name: 'Кол-во пользователей',
			number: 150,
		},
	];
	const list_info = [
		{
			name: 'Алибеков Алибек Алибекулы',
			phone: '+7 777 777 77 77',
			company: 'Alibek Internation',
			a: 'Мауленова 92',
			b: 'Тимирязева 18а',
			price: 2999,
			tariff: 'Бизнес',
			date: '01.07.2023',
			time: '00:00:00 - 00:00:00',
		}, {
			name: 'Алибеков Алибек Алибекулы',
			phone: '+7 777 777 77 77',
			company: 'Alibek Internation',
			a: 'Мауленова 92',
			b: 'Тимирязева 18а',
			price: 2999,
			tariff: 'Бизнес',
			date: '01.07.2023',
			time: '00:00:00 - 00:00:00',
		}, {
			name: 'Алибеков Алибек Алибекулы',
			phone: '+7 777 777 77 77',
			company: 'Alibek Internation',
			a: 'Мауленова 92',
			b: 'Тимирязева 18а',
			price: 2999,
			tariff: 'Бизнес',
			date: '01.07.2023',
			time: '00:00:00 - 00:00:00',
		}, {
			name: 'Алибеков Алибек Алибекулы',
			phone: '+7 777 777 77 77',
			company: 'Alibek Internation',
			a: 'Мауленова 92',
			b: 'Тимирязева 18а',
			price: 2999,
			tariff: 'Бизнес',
			date: '01.07.2023',
			time: '00:00:00 - 00:00:00',
		}, {
			name: 'Алибеков Алибек Алибекулы',
			phone: '+7 777 777 77 77',
			company: 'Alibek Internation',
			a: 'Мауленова 92',
			b: 'Тимирязева 18а',
			price: 2999,
			tariff: 'Бизнес',
			date: '01.07.2023',
			time: '00:00:00 - 00:00:00',
		}, {
			name: 'Алибеков Алибек Алибекулы',
			phone: '+7 777 777 77 77',
			company: 'Alibek Internation',
			a: 'Мауленова 92',
			b: 'Тимирязева 18а',
			price: 2999,
			tariff: 'Бизнес',
			date: '01.07.2023',
			time: '00:00:00 - 00:00:00',
		}, {
			name: 'Алибеков Алибек Алибекулы',
			phone: '+7 777 777 77 77',
			company: 'Alibek Internation',
			a: 'Мауленова 92',
			b: 'Тимирязева 18а',
			price: 2999,
			tariff: 'Бизнес',
			date: '01.07.2023',
			time: '00:00:00 - 00:00:00',
		},
	];
</script>
