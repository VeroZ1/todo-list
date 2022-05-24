<template>
	<li class="todo-item" :key="todo.id">
		<h3>
			<input type="checkbox" v-model="todo.done" />
			<label class="item-label" :class="{ 'line-through': todo.done }" @dblclick="editTodo(todo)" v-if="editedTodo === null">{{ todo.text }}</label>
			<input
				type="text"
				class="edit"
				v-model="todo.text"
				v-focus
				v-if="todo === editedTodo"
				@blur="doneEdit(todo)"
				@keyup.enter="doneEdit(todo)"
				@keyup.escape="cancelEdit(todo)"
			/>
			<p class="item-delete" @click="deleteTodo">Delete</p>
		</h3>
	</li>
</template>

<script>
export default {
	name: 'TodoItem',
	props: {
		todo: {
			type: Object
		}
	},
	data() {
		return {
			editedTodo: null
		};
	},
	methods: {
		editTodo(todo) {
			this.beforeEditCache = todo.text;
			this.editedTodo = todo;
		},
		doneEdit(todo) {
			if (!this.editedTodo) {
				return;
			}
			this.editedTodo = null;
		},
		deleteTodo() {
			this.$bus.$emit('deleteTodo', this.todo);
		},
		cancelEdit(todo) {
			this.editedTodo = null;
			todo.text = this.beforeEditCache;
		}
	}
};
</script>

<style>
.todo-item {
	position: relative;
	text-align: left;
	width: 100%;
	line-height: 30px;
	list-style-type: none;
}

.item-label {
	word-break: break-all;
	display: inline;
}

.item-delete {
	position: absolute;
	right: 10px;
	top: 0;
	bottom: 0;
	margin: auto 0;
	display: none;
	cursor: pointer;
}

.line-through {
	text-decoration: line-through;
}

.edit {
	font-size: 18px;
}

h3:hover .item-delete {
	display: inline;
}
</style>
