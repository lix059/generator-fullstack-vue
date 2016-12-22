<template> 
    <div id="todo-list-example">
      <input
        v-model="newTodoText"
        v-on:keyup.enter="addNewTodo"
        placeholder="Add a todo"
      >
      <ul>
        <li
          is="TodoItem"
          v-for="(todo, index) in todos"
          v-bind:title="todo"
          v-on:remove="todos.splice(index, 1)"
        ></li>
      </ul>
    </div>
</template>

<script>
    import TodoItem from './TodoItem.vue'
    export default {
      //el: '#todo-list-example',
      data() {
        return {
            newTodoText: '',
            todos: [
              'Do the dishes',
              'Take out the trash',
              'Mow the lawn'
            ]
        }
      },
      methods: {
        addNewTodo: function () {
          this.todos.push(this.newTodoText)
          this.newTodoText = ''
        }
      },
      components: {
         TodoItem: TodoItem
      }
    }
</script>