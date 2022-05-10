import { Store } from '../src/todo-store.js';

describe('Adding an item to store', () => {
  test('should contain single item', () => {
    const store = new Store();

    store.addTodo('Testing with Jest');

    expect(store.todos).toHaveLength(1);
  });

  test('should not add a todo with empty string', () => {
    const store = new Store();

    store.addTodo('');

    expect(store.todos).toHaveLength(0);
  });
});

describe('Removing an item from store', () => {
  test('should not have any elements', () => {
    const store = new Store();

    store.addTodo('Testing with Jest');
    store.deleteTodo(0);

    expect(store.todos).toHaveLength(0);
  });
});
