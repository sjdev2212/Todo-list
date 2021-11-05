const ulTodos = document.querySelector('.list-todos');

export default class Todos {
  constructor() {
    // this.description= description;
    // this.completed = false;
    // this.id = id;
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
    const deleteBtn = document.createElement('button');
    deleteBtn.classList = 'delete-button';
    deleteBtn.addEventListener('click', () => {
      this.deleteChore(chore);
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

    this.saveLocal();
    this.createHtml();
  }

  saveLocal() {
    localStorage.setItem('chores', JSON.stringify(this.allTodos));
  }
}
