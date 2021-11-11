/* eslint-disable import/extensions */
import 'jest-localstorage-mock';
import { addTask, deleteTask } from './text-1';

describe('Test Add function', () => {
  test('Add one new task from input (length > 0)', () => {
    global.document.getElementById('text').value = '555';
    expect(addTask()).toBe('555');
  });

  test('Adding a empty input === undefined', () => {
    global.document.getElementById('text').value = '';
    expect(addTask()).toBe('');
  });

  test('should return correct input', () => {
    global.document.getElementById('text').value = '123';
    expect(addTask()).not.toBe('51515');
  });
});

describe('Test Delete function', () => {
  test('should delete task', () => {
    const todos = global.document.getElementById('list-todos');
    todos.innerHTML = '';

    global.document.getElementById('text').value = '444';
    addTask();

    expect(deleteTask('444')).toStrictEqual([]);
  });

  test('it should not delete another task', () => {
    const todos = global.document.getElementById('list-todos');
    todos.innerHTML = '';

    global.document.getElementById('text').value = 'diferent task';
    addTask();

    expect(deleteTask('555')).not.toStrictEqual([]);
    expect(String(todos.firstElementChild.textContent).trim()).toBe('diferent task');
  });
});
