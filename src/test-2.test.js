import 'jest-localstorage-mock';
import { addTask, deleteTask } from './text-1';

describe('Test local storage',()=>{

    test('should save in localStorage', () => {
        addTask();
        expect(JSON.parse(localStorage.getItem('chores')).length).toBe(3);    
    });
    
    test('should not be undefined in localStorage', () => {
        addTask();
        expect(localStorage.getItem('chores')).not.toBe(undefined);    
    });
});