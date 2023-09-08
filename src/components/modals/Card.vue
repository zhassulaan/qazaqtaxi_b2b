<template>
	<div class='modal'>
		<div class='modal-background btn' @click="emit('close')"></div>
		<div class='modal-content'>
			<h1 class='modal-content__text'>Заполните данные карты</h1>

			<div class='form'>
				<div class='form-box'>
					<h2>Номер карты</h2>
					<Input
						type='number'
						id='input1'
						text='5169 0000 0000 0000'
						:length='16'
						mask='#### #### #### ####'
					/>
				</div>

				<div class='form-box'>
					<h2>Срок действия карты</h2>
					<Input
						type='number'
						id='input2'
						text='мм / гггг'
						:length='6'
						mask='## / ####'
					/>
				</div>

				<div class='form-box'>
					<h2>CVV</h2>
					<Input
						type='number'
						id='input3'
						text=' *  *  * '
						:length='3'
						mask=' #  #  # '
					/>
				</div>
			</div>

			<Button text='Пополнить в указанную сумму' @click="emit('close')" />
		</div>
	</div>
</template>

<script setup>
	import Button from '@/components/Button.vue';
	import Input from '@/components/Input.vue';

	const emit = defineEmits();
</script>

<style scoped lang='scss'>
	.modal-content {
		.form {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			gap: 30px;
			padding: 60px 9.453125vw 70px;
			&-box {
				display: grid;
				grid-gap: 12px;
			}
		}
		.input {
			height: 62px;
			border: 1px solid var(--clr-orange);
			font-size: 20px;
		}
		#input1 {
			width: 35.78125vw;
		}
		#input2 {
			width: 16.40615vw;
		}
		#input3 {
			width: 10.78125vw;
		}
	}
</style>
