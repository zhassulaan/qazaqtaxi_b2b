<template>
	<header class='header'>
		<ul class='header-left'>
			<h2 class='header-left__text btn'
				v-if="id == 'admin'"
			>
				{{ $t('admin') }}
			</h2>

			<li v-else
				v-for='(menu, menu_idx) in menus'
				:key='menu_idx'
			>
				<router-link :to='`/b2b/${ menu.path }/`'>
					<h3 class='header-left__text btn' :class="{ 'active': menu.id === id }">
						{{ menu.name }}
					</h3>
				</router-link>
			</li>
		</ul>

		<ul class='header-right'>
			<li v-for='(lang, lang_idx) in langs' :key='lang_idx'>
				<p class='header-right__text btn'
					:class="{ 'active': lang.id === active }"
					@click='change_lang(lang.id)'
				>
					{{ lang.name }}
				</p>
			</li>
		</ul>
	</header>
</template>

<script setup>
	import { ref, watch } from 'vue';
	import { useRoute } from 'vue-router';
	import { useI18n } from 'vue-i18n';

	const route = useRoute();
	const i18n = useI18n();
	const active = ref(localStorage.getItem('lang'));
	let id = '';
	const menus = [
		{
			id: 'analytics',
			path: 'analytics/list',
			name: i18n.t('analytics'),
		}, {
			id: 'wallet',
			path: 'wallet',
			name: i18n.t('wallet'),
		}, {
			id: 'history',
			path: 'history',
			name: i18n.t('history'),
		},
	];
	const langs = [
		{
			id: 'kk',
			name: 'ҚАЗ',
		}, {
			id: 'ru',
			name: 'РУС',
		}, {
			id: 'en',
			name: 'ENG',
		},
	];

	watch(() => {
		id = route.matched[1].path.split('/')[2];
	});

	function change_lang(lang) {
		localStorage.setItem('lang', lang)
		active.value = localStorage.getItem('lang');
	}
</script>

<style scoped lang='scss'>
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 65px;
		padding: 0 3.75vw 0 3.125vw;
		&-left,
		&-right {
			display: flex;
			align-items: center;
			&__text.active {
				color: var(--clr-orange);
			}
		}
		&-left {
			gap: 3.125vw;
			&__text {
				color: var(--clr-black);
				&.active {
					font-size: 40px;
				}
			}
		}
		&-right {
			gap: 1.5625vw;
			&__text {
				color: rgba(51, 51, 51, .60);
			}
		}
	}
</style>
