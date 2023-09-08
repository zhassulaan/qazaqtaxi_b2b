<template>
	<div class='auth'>
		<icon-back
			class='auth-back btn'
			v-if='active !== 0'
			@click='active--'
		/>

		<h6 class='auth-title'>{{ info[active].title }}</h6>
		<h6 class='auth-subtitle'>{{ info[active].subtitle }}</h6>

		<div class='auth-form'>
			<Input
				:type='item.type'
				:text='item.text'
				v-for='(item, idx) in info[active].input'
				:key='idx'
				v-model='idx.value'
			/>

			<p class='auth-form__message'
				v-if='active === 0'
				:style="{ width: '24.6875vw' }"
			>
				Регистрируясь, вы соглашаетесь
				<span class='btn'>со сбором </span>
				и
				<span class='btn'>использованием ваших персональных данных</span>
			</p>

			<Button
				v-if='active === 3'
				text='Войти'
				@click="redirect('analytics/list')"
			/>
			<Button
				v-else
				text='Далее'
				@click='active++'
			/>
		</div>

		<div class='auth-footer'>
			<p class='auth-footer__text' v-if='active === 0'>
				У вас уже есть аккаунт?
				<span class='btn' @click="redirect('login')">Войдите</span>
			</p>

			<div class='auth-footer__slider'>
				<div class='slide btn'
					:class="{ 'active': active + 1 === i }"
					v-for='i in 4'
					:key='i'
				></div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import IconBack from '@/components/icons/Back.vue';

const router = useRouter();
const active = ref(0);
const user = ref({
	name: '',
	phone: '',
	email: '',
	company: '',
	addres: '',
	bin: '',
	iik: '',
	bik: '',
	password: '',
	confirm_password: '',
});
const info = [
	{
		title: 'Добро пожаловать!',
		subtitle: 'Пожалуйста зарегистрируйтесь',
		input: [
			{
				type: 'number',
				text: '+7 (7',
				value: user.value.phone,
			}, {
				type: 'email',
				text: 'Почта',
				value: user.value.email,
			}, {
				type: 'text',
				text: 'Кантактное лицо',
				value: user.value.name,
			},
		],
	}, {
		title: 'Шаг 2/4',
		subtitle: 'Заполните данные о компании',
		input: [
			{
				type: 'text',
				text: 'Название компании',
				value: user.value.company,
			}, {
				type: 'number',
				text: 'БИН',
				value: user.value.bin,
			}, {
				type: 'text',
				text: 'Адрес',
				value: user.value.addres,
			},
		],
	}, {
		title: 'Шаг 3/4',
		subtitle: 'Заполните банковские реквизиты',
		input: [
			{
				type: 'number',
				text: 'ИИК',
				value: user.value.iik,
			}, {
				type: 'number',
				text: 'БИК',
				value: user.value.bik,
			},
		],
	}, {
		title: 'Шаг 4/4',
		subtitle: 'Заполните данные',
		input: [
			{
				type: 'password',
				text: 'Введите пароль',
				value: user.value.password,
			}, {
				type: 'password',
				text: 'Подтвердите пароль',
				value: user.value.confirm_password,
			},
		],
	},
];

function redirect(id) {
	router.push(`/b2b/${ id }`);
}
</script>
