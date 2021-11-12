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

function editTask(elem) {
  const input = global.document.getElementById('text');
  input.value = elem;

  return input.value;
}

function changeCompleteStatus(index) {
  for (let i = 0; i < arrObjTask.length; i += 1) {
    if (arrObjTask[i].index === index) {
      arrObjTask[i].completed = true;
      return arrObjTask[i].completed;
    }
  }
  return arrObjTask[index].completed;
}

function clearAllCompleted() {
  const arrNotDeleted = [];

  for (let j = 0; j < arrObjTask.length; j += 1) {
    if (arrObjTask[j].completed === false) {
      arrNotDeleted.push(
        arrObjTask[j],
      );
    }
  }
  return arrNotDeleted.length;
}

export {
  editTask, changeCompleteStatus, arrObjTask, clearAllCompleted,
};