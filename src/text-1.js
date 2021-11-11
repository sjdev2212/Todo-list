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
  array = taskContainer;
  console.log('NEWARREGLO:    '+array.children.length);
  const newArray = [];
  for (let i = 0; i < array.children.length; i += 1) {
    if (String(array.children[i].textContent).trim() !== String(task).trim()) {
      console.log('Estoy dentro');
      console.log(task);
      console.log(array.children[i].textContent);
      newArray.push(array[i]);
      console.log('Saleindo del if');
    }
  }
  console.log('NEWARREGLO:    '+newArray.length);
  return newArray;
}

export { addTask, deleteTask };
