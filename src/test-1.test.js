/* eslint-disable import/extensions */
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
    global.document.getElementById('text').value = '555';
    expect(deleteTask('555')).not.toBe('555');
  });
  test('should delete task', () => {
    global.document.getElementById('text').value = 'something';
    expect(deleteTask('something')).not.toBe('something');
  });
});
