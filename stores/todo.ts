export interface Todo {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export const useTodoStore = defineStore('todo', {
  state: (): { todos: Todo[] } => ({
    todos: [],
  }),
  actions: {
    async getAllTodos() {
      try {
        const response = await fetch('/api/todos');
        const res = await response.json();
        console.log(res);

        if (response) {
          this.todos = res.value;
        }
        if (!response) {
          throw new Error('Failed to fetch todos');
        }
      } catch (error) {
        console.error(error);
      }
    },
    addTodo(todo: Todo) {
      this.todos.push(todo);
    },
    updateTodo(todo: Todo) {
      const index = this.todos.findIndex((t) => t.id === todo.id);
      if (index !== -1) {
        this.todos[index] = todo;
      }
    },
    deleteTodo(id: number) {
      const index = this.todos.findIndex((t) => t.id === id);
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    },
    toggleCompletedStatus(id: number) {
      const index = this.todos.findIndex((t) => t.id === id);
      if (index !== -1) {
        this.todos[index].isCompleted = !this.todos[index].isCompleted;
      }
    },
  },
});
