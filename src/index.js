import './style.css';
import Todos from './interactive.js';

const div = document.getElementById('add');

const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Add to do...';
input.id = 'text';
const addButton = document.createElement('button');

addButton.innerText = 'Add';
div.append(input, addButton);

const listTodo = new Todos();

addButton.addEventListener('click', () => {
  listTodo.allTodos.push({
    description: input.value,
    complete: false,
    id: listTodo.allTodos.length + 1,
  });

  listTodo.saveLocal();

  listTodo.createHtml();
  input.value = '';
  input.focus();
});
listTodo.createHtml();
