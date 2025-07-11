import { Todo } from '~/stores/todo';

const todos: Todo[] = [
  {
    id: 1,
    title: 'Todo 1',
    description: 'Description 1',
    isCompleted: false,
    createdAt: '',
    updatedAt: '',
  },
  {
    id: 2,
    title: 'Todo 2',
    description: 'Description 2',
    isCompleted: false,
    createdAt: '',
    updatedAt: '',
  },
];

export default defineEventHandler(async (event) => {
  const method = event.method;
  const query = getQuery(event);

  // get all todos
  if (method === 'GET' && query.id) {
    const todo = todos.find((todo) => todo.id === Number(query.id));
    if (todo) {
      return {
        value: todo,
        statusCode: 200,
      };
    }
    return {
      value: null,
      statusCode: 404,
    };
  }

  if (method === 'GET') {
    return {
      value: todos,
      statusCode: 200,
    }
  }

  // create a new todo
  if (method === 'POST') {
    const todo = await readBody<Todo>(event);
    todos.push(todo);
    return {
      value: todo,
      statusCode: 201,
    };
  }

  // update Existing todo
  if (method === 'PUT') {
    const updatedTodo = await readBody<Todo>(event);
    const todoIndex = todos.findIndex((todo) => todo.id === updatedTodo.id);
    if (todoIndex !== -1) {
      todos[todoIndex] = updatedTodo;
      return {
        value: updatedTodo,
        statusCode: 201,
      };
    }
    return {
      statusCode: 404,
    };
  }

  // deleting existing todo
  if (method === 'DELETE') {
    const { id } = await readBody(event);
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    if (todoIndex !== -1) {
      todos.splice(todoIndex, 1);
      return {
        success: true,
        statusCode: 204,
      };
    }
    return {
      statusCode: 404,
    };
  }
});
