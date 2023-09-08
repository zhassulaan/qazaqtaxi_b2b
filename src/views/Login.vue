<template>
	<div class='auth'>
		<h6 class='auth-title'>Добро пожаловать!</h6>
		<h6 class='auth-subtitle'>Пожалуйста войдите в систему</h6>

		<div class='auth-form'>
			<Input type='email' text='Почта' />
			<Input type='password' text='Пароль' />

			<Button text='Войти' @click="redirect('analytics/list')" />

			<p class='auth-form__message' :style="{ textAlign: 'center' }">
				<span class='btn' @click="redirect('reset')">Забыли пароль?</span>
			</p>
		</div>
		
		<div class='auth-footer'>
			<p class='auth-footer__text'>
				У вас нет аккаунта?
				<span class='btn' @click="redirect('signup')">Зарегистрируйтесь</span>
			</p>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';

const router = useRouter();
const user = ref({
	email: '',
	password: '',
});

function redirect(id) {
	router.push(`/b2b/${ id }`);
}
</script>
