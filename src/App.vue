<template>
	<div id="app">
		<!-- <img alt="Vue logo" src="./assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App" /> -->
		<TodoHeader></TodoHeader>
		<TodoList :todos="todos"></TodoList>
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import TodoHeader from './components/TodoHeader.vue';
import TodoList from './components/TodoList.vue';

const STORAGE_KEY = 'todo-list';
export default {
	name: 'app',
	components: {
		HelloWorld,
		TodoHeader,
		TodoList
	},
	data() {
		return {
			todos: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
		};
	},
	created() {
		let _that = this;
		this.$bus.$on('deleteTodo', todo => {
			_that.deleteTodo(todo);
		});
		this.$bus.$on('addTodo', text => {
			_that.addTodo(text);
		});
	},
	methods: {
		addTodo(text) {
			if (text.trim() === '') return;
			this.todos.push({
				id: Date.now(),
				text: text,
				done: false
			});
		},
		deleteTodo(todo) {
			this.todos.splice(this.todos.indexOf(todo), 1);
		}
	},
	watch: {
		todos: {
			handler: function(newValue, oldValue) {
				localStorage.setItem(STORAGE_KEY, JSON.stringify(newValue));
			},
			deep: true
		}
	}
};
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

#app {
	margin: 0 auto;
	min-width: 230px;
	max-width: 550px;
}
</style>
