const input = global.document.getElementById('text');
const taskContainer = global.document.getElementById('list-todos');

function addTask() {
  const newTask = `<li class="section">          
            ${input.value}     
        </li>`;
  taskContainer.insertAdjacentHTML('beforeend', newTask);
  return input.value;
}

function deleteTask(task) {
  let array = [];
  array = taskContainer.querySelectorAll('.section');
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] !== task) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

export { addTask, deleteTask };
