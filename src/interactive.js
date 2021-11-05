const ulTodos = document.querySelector('.list-todos');

export default class Todos {
  constructor() {
    this.allTodos = [];
  }

  toggleCheck(el) {
    this.allTodos.forEach((elem) => {
      if (elem.id === el.id) {
        this.allTodos[elem.id - 1].complete = !el.complete;
      }

      this.saveLocal();
      this.createHtml();
    });
  }

  addTodo(chore) {
    const div = document.createElement('div');
    div.classList = 'items';
    if (chore.complete) {
      div.classList.add('text-check');
    }
    const liId = document.createElement('li');
    const inputCheck = document.createElement('input');
    inputCheck.classList = 'check';
    inputCheck.type = 'checkbox';
    inputCheck.checked = chore.complete;
    inputCheck.addEventListener('click', () => {
      this.toggleCheck(chore);
    });

    const inputText = document.createElement('input');

    inputText.type = 'text';
    inputText.classList = 'text';
    inputText.value = chore.description;
    inputText.addEventListener('keyup', () => {
      chore.description = inputText.value;
      this.saveLocal();
    });
    const deleteBtn = document.createElement('button');
    const deleteIcon = document.createElement('i');
    deleteIcon.classList = 'far fa-trash-alt trashcan';
    deleteBtn.appendChild(deleteIcon);
    deleteBtn.classList = 'delete-button';
    deleteBtn.addEventListener('click', () => {
      this.deleteChore(chore);
    });
    const deleteAll = document.getElementById('completed');
    deleteAll.addEventListener('click', () => {
      this.deleteChecked(chore);
    });

    div.append(liId, inputCheck, inputText, deleteBtn);
    ulTodos.appendChild(div);
  }

  createHtml() {
    ulTodos.innerHTML = '';
    if (localStorage.getItem('chores')) {
      this.allTodos = JSON.parse(localStorage.getItem('chores'));
    }

    this.allTodos.forEach((chore) => {
      this.addTodo(chore);
    });
  }

  deleteChore(el) {
    this.allTodos = this.allTodos.filter((elem) => elem !== el);
    this.updateId();

    this.saveLocal();
    this.createHtml();
  }

  updateId() {
    let index = 1;
    this.allTodos.forEach((item) => {
      item.id = index;
      index += 1;
    });
  }

  deleteChecked() {
    this.allTodos = this.allTodos.filter((elem) => elem.complete === false);
    this.updateId();
    this.saveLocal();
    this.createHtml();
  }

  saveLocal() {
    localStorage.setItem('chores', JSON.stringify(this.allTodos));
  }
}
