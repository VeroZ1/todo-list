<template>
	<section class="main">
		<div v-for="item in todos" :key="item.id"><TodoItem :todo="item"></TodoItem></div>
	</section>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
	name: 'TodoList',
	components: {
		TodoItem
	},
	props: {
		todos: {
			type: Array,
			required: true
		}
	}
};
</script>

<style></style>
