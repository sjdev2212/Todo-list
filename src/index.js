import './style.css';
import Todos from './interactive.js';

const div = document.getElementById('add');

const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Add to do...';
input.id = 'text';
input.setAttribute('required', 'true');
const addButton = document.createElement('button');

addButton.innerText = 'Add';
addButton.type = 'submit';
div.append(input, addButton);

const listTodo = new Todos();

div.addEventListener('submit', (e) => {
  e.preventDefault();
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
