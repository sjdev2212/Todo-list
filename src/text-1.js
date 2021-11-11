import Todos from "./interactive";

const input = global.document.getElementById('text');
const taskContainer = global.document.getElementById('list-todos');

function addTask() {
    const newTask = `<li class="section">          
            ${input.value}     
        </li>`;
    taskContainer.insertAdjacentHTML('beforeend', newTask);    
    return input.value;   
}

function deleteTask(index){
  let arr=[];
  console.log(taskContainer.length);
  // arr=taskContainer.length;
  return 1
}


export {addTask, deleteTask}
