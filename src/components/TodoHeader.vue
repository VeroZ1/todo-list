<template>
	<header class="header">
		<h1>todo-list</h1>
		<input type="text" class="new-todo" placeholder="Type here" v-model="tempTodoText" @keyup.enter="addTodo(tempTodoText)" />
	</header>
</template>

<script>
export default {
	name: 'todo-header',
	data() {
		return {
			tempTodoText: ''
		};
	},
	methods: {
		addTodo(text) {
			this.$bus.$emit('addTodo', text);
			this.tempTodoText = '';
		}
	}
};
</script>

<style>
.header h1 {
	font-style: italic;
}

.new-todo {
	width: 100%;
	font-size: 24px;
	padding: 16px 16px 16px 16px;
	border: none;
	background: #f5f5f5;
}

.new-todo :focus {
	box-shadow: inset 0 -1px 5px 0 rgb(0 0 0 / 20%);
}
</style>
