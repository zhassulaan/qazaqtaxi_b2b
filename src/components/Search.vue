<template>
	<div class='search'>
		<search-icon />
		<input
			type='text'
			placeholder='Поиск'
		/>
	</div>
</template>

<script setup>
import SearchIcon from '@/components/icons/Search.vue';
</script>

<style scoped lang='scss'>
.search {
	display: flex;
	align-items: center;
	gap: 6px;
	width: 41.015625vw;
	background-color: var(--clr-white);
	border-radius: 10px;
	padding: 15px 1.71875vw 14px;
	input {
		border: none;
		color: #8C8C8C;
		font-size: 13px;
		font-weight: 500;
	}
}
</style>
