<template>
	<div class='home'>
		<Controller :admin='true' />
		<Search />

		<Table :admin='true' :list='list_info'>
			<template #detail='{ item }'>
				<div class='application'>
					<div class='application-box'>
						<p>Контактное  лицо</p>
						<Text :text='item.name' />
					</div>
					<div class='application-box'>
						<p>Название компании</p>
						<Text :text='item.company' />
					</div>
					<div class='application-box'>
						<p>ИИК</p>
						<Text :text='item.iik' />
					</div>
					<div class='application-box'>
						<p>Номер</p>
						<Text :text='item.phone' />
					</div>
					<div class='application-box'>
						<p>БИН</p>
						<Text :text='item.bin' />
					</div>
					<div class='application-box'>
						<p>БИК</p>
						<Text :text='item.bik' />
					</div>
					<div class='application-box'>
						<p>Почта компании</p>
						<Text :text='item.email' />
					</div>
					<div class='application-box'>
						<p>Адрес компании</p>
						<Text :text='item.addres' />
					</div>
					<div class='application-box'>
						<Button text='Одобрить' />
					</div>
				</div>
			</template>
		</Table>
	</div>
</template>

<script setup>
import Button from '@/components/Button.vue';
import Controller from '@/components/Controller.vue';
import Search from '@/components/Search.vue';
import Table from '@/components/Table.vue';
import Text from '@/components/Text.vue';

const list_info = [
	{
		name: 'Алибеков Алибек Алибекулы',
		phone: '+7 777 777 77 77',
		company: 'Alibek Internation',
		email: 'alibek@alibek.internation',
		addres: 'Луганского, 21а',
		bin: '0000000000',
		iik: '0000000000',
		bik: '0000000000',
	}, {
		name: 'Алибеков Алибек Алибекулы',
		phone: '+7 777 777 77 77',
		company: 'Alibek Internation',
		email: 'alibek@alibek.internation',
		addres: 'Луганского, 21а',
		bin: '0000000000',
		iik: '0000000000',
		bik: '0000000000',
	}, {
		name: 'Алибеков Алибек Алибекулы',
		phone: '+7 777 777 77 77',
		company: 'Alibek Internation',
		email: 'alibek@alibek.internation',
		addres: 'Луганского, 21а',
		bin: '0000000000',
		iik: '0000000000',
		bik: '0000000000',
	}, {
		name: 'Алибеков Алибек Алибекулы',
		phone: '+7 777 777 77 77',
		company: 'Alibek Internation',
		email: 'alibek@alibek.internation',
		addres: 'Луганского, 21а',
		bin: '0000000000',
		iik: '0000000000',
		bik: '0000000000',
	}, {
		name: 'Алибеков Алибек Алибекулы',
		phone: '+7 777 777 77 77',
		company: 'Alibek Internation',
		email: 'alibek@alibek.internation',
		addres: 'Луганского, 21а',
		bin: '0000000000',
		iik: '0000000000',
		bik: '0000000000',
	}, {
		name: 'Алибеков Алибек Алибекулы',
		phone: '+7 777 777 77 77',
		company: 'Alibek Internation',
		email: 'alibek@alibek.internation',
		addres: 'Луганского, 21а',
		bin: '0000000000',
		iik: '0000000000',
		bik: '0000000000',
	}, {
		name: 'Алибеков Алибек Алибекулы',
		phone: '+7 777 777 77 77',
		company: 'Alibek Internation',
		email: 'alibek@alibek.internation',
		bin: '0000000000',
		bin: '0000000000',
		bin: '0000000000',
	},
];
</script>
