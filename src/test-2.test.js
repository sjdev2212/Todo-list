import 'jest-localstorage-mock';
import { addTask } from './text-1.js';
import {
  changeCompleteStatus, editTask, arrObjTask, clearAllCompleted,
} from './test-2.js';

describe('Test local storage', () => {
  test('should save in localStorage', () => {
    addTask();
    expect(JSON.parse(localStorage.getItem('chores')).length).toBe(3);
  });

  test('should not be undefined in localStorage', () => {
    addTask();
    expect(localStorage.getItem('chores')).not.toBe(undefined);
  });
});

describe('Test local storage', () => {
  test('should edit input value', () => {
    global.document.getElementById('text').value = '555';
    expect(editTask('some')).not.toBe('555');
  });
  test('should edit input value', () => {
    global.document.getElementById('text').value = '555';
    expect(editTask('some')).toBe('some');
  });
});

describe('Test completed status', () => {
  test('should change status to complete', () => {
    expect(changeCompleteStatus(1)).toBe(true);
  });
  test('should mark a new task as completed', () => {
    arrObjTask.push({ description: 'some', completed: false, index: 4 });
    expect(changeCompleteStatus(4)).toBe(true);
  });
});

describe('Test clear all completed function', () => {
  test('Should delete completed task', () => {
    arrObjTask.push({ description: 'some', completed: false, index: 5 });
    arrObjTask.push({ description: 'some', completed: false, index: 6 });
    arrObjTask.push({ description: 'some', completed: true, index: 7 });
    arrObjTask.push({ description: 'some', completed: true, index: 8 });
    expect(clearAllCompleted()).toBe(4);
  });

  test('Should delete completed task', () => {
    for (let k = 0; k < arrObjTask.length; k += 1) {
      arrObjTask[k].completed = true;
    }
    expect(clearAllCompleted()).toBe(0);
  });
});
