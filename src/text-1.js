const input = global.document.getElementById("text");
const taskContainer = global.document.getElementById("list-todos");

const arrObjTask = [
  {
    description: 'wash the dishes',
    completed: false,
    index: 3,
  },
  {
    description: 'complete to do list PR',
    completed: false,
    index: 1,
  },
  {
    description: 'wash my clothes',
    completed: false,
    index: 2,
  },
];

function addTask() {
  const newTask = `<li class="section">          
            ${input.value}     
        </li>`;
  taskContainer.insertAdjacentHTML("beforeend", newTask);

  saveLocal(arrObjTask)
  return input.value;
}



function saveLocal(arrObjTask){
  localStorage.setItem('chores', JSON.stringify(arrObjTask));  
};  

function deleteTask(task) {
  let array = [];
  array = taskContainer;

  const newArray = [];
  for (let i = 0; i < array.children.length; i += 1) {
    if (String(array.children[i].textContent).trim() !== String(task).trim()) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

export { addTask, deleteTask };
