import './style.css';

const section = document.getElementById('todos');
const input = document.createElement('input');
const button = document.createElement('button');
const inpButton = document.createElement('div');
inpButton.classList = 'add-input';
button.innerText = 'Add';
input.classList = 'input';
input.id = 'input';
input.placeholder = 'Add to your list...';

inpButton.append(input, button);

button.classList = 'add-btn';
section.append(inpButton);

class Todo {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  static getTodos() {
    let toDos;
    if (localStorage.getItem('todos') === null) {
      toDos = [];
    } else {
      toDos = JSON.parse(localStorage.getItem('todos'));
    }
    return toDos;
  }

  static addItem(item) {
    const items = Todo.getTodos();
    items.push(item);
    localStorage.setItem('todos', JSON.stringify(items));
  }

  static addInput(input) {
    const div = document.createElement('div');
    div.classList = 'added-items';

    div.innerHTML = `
                <input type="checkbox">
                <p id="p.item">${input.description}</p>
               
                <p id="p.item3"></p>
                <button id="btn" class"btn">X</button> 
                
                `;
    section.appendChild(div);
  }

  static reset() {
    document.getElementById('input').value = '';
  }

  static showTodos() {
    const items = Todo.getTodos();
    items.forEach((x) => {
      Todo.addInput(x);
    });
  }

  static removeItems(x) {
    const items = Todo.getTodos();
    const itemsFiltered = [];
    for (let i = 0; i < items.length; i += 1) {
      if (items[i].index !== x) {
        itemsFiltered.push(items[i]);
      }
    }

    localStorage.setItem('todos', JSON.stringify(itemsFiltered));
  }
}

document.addEventListener('DOMContentLoaded', Todo.showTodos());

button.addEventListener('click', () => {
  const inputAdded = document.getElementById('input').value;
  const comp = false;
  const newItem = new Todo(inputAdded, comp);

  Todo.addInput(newItem);

  Todo.reset();
  Todo.addItem(newItem);
});
const deleteBtn = document.querySelectorAll('#btn');
deleteBtn.forEach((x) => {
  x.addEventListener('click', (e) => {
    const aux = e.target.parentElement;

    // eslint-disable-next-line no-restricted-globals
    aux.remove(parent);
    Todo.removeItems();
  });
});
