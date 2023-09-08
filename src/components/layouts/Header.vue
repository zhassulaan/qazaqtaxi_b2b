<template>
	<header class='header'>
		<ul class='header-left'>
			<li v-if="id == 'admin'">
				<h6 class='header-left__text btn active'>
					{{ $t('admin') }}
				</h6>
			</li>

			<li v-else
				v-for='(menu, menu_idx) in menus'
				:key='menu_idx'
			>
				<router-link :to='`/b2b/${ menu.path }/`'>
					<h6 class='header-left__text btn' :class="{ 'active': menu.id === id }">
						{{ menu.name }}
					</h6>
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
