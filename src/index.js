import './style.css';

const div = document.getElementById('add');
const ulTodos = document.querySelector('.list-todos');
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Add to do...';
const addButton = document.createElement('button');
addButton.innerText = 'Add';
div.append(input, addButton);

const allTodos = [];
addButton.addEventListener('click', () => {
  ulTodos.innerHTML += `
  <div class="items">
  <input type="checkbox">
  <li class="text">${input.value}</li>
  <button class="delete-button">X</button>
  </div>
  `;
  allTodos.push({
    description: input.value,
    complete: false,
    index: allTodos.length + 1,
  });
});

ulTodos.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-button')) {
    e.target.parentElement.remove();
  }
});
