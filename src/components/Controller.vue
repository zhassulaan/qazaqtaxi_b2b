<template>
	<div class='controller'>
		<router-link :to="`/b2b/${ admin ? 'admin' : 'analytics' }/list/`">
			<h5 class='btn'
				:class="{ 'active': active === 'list' }"
				@click="active = 'list'"
			>
				Список
			</h5>
		</router-link>

		<router-link :to="`/b2b/${ admin ? 'admin' : 'analytics' }/archive/`">
			<h5 class='btn'
				:class="{ 'active': active === 'archive' }"
				@click="active = 'archive'"
			>
				Архив
			</h5>
		</router-link>

		<router-link :to="`/b2b/${ admin ? 'admin' : 'analytics' }/applications/`">
			<h5 class='btn'
				:class="{ 'active': active === 'applications' }"
				v-if='admin'
				@click="active = 'applications'"
			>
				Заявки
			</h5>
		</router-link>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	import { useRoute } from 'vue-router';
	
	const route = useRoute();
	const prop = defineProps({
		admin: {
			type: Boolean,
			default: false,
		},
	});
	const active = ref(route.matched[2].path.split('/')[3]);
</script>

<style scoped lang='scss'>
	.controller {
		display: flex;
		gap: 1.40625vw;
		margin-top: 10px;
		.btn {
			line-height: 24px;
			color: var(--clr-black);
			padding: 0 .625vw;
			&.active {
				position: relative;
				&::after {
					position: absolute;
					bottom: 0;
					left: 0;
					content: '';
					width: 100%;
					height: 1.5px;
					background-color: var(--clr-orange);
					text-decoration: underline;
				}
			}
		}
	}
</style>
