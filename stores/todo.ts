import SecureLS from 'secure-ls';

export interface Todo {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as Todo[],
  }),
  getters: {
    getTodoById: (state) => (id: number) => {
      return state.todos.find((todo) => todo.id === id);
    },
  },
  actions: {
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
  persist: {
    storage: {
      getItem: (key) =>
        new SecureLS({
          isCompression: false,
          encodingType: 'AES',
          encryptionSecret: '@Sdl#sd1234d,.',
        }).get(key),
      setItem: (key, value) =>
        new SecureLS({
          isCompression: false,
          encodingType: 'AES',
          encryptionSecret: '@Sdl#sd1234d,.',
        }).set(key, value),
    },
  },
});
