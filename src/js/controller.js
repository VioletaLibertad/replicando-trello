window.controller = {};

addNewListBtn.addEventListener('click', () => {
  addNewListBtn.classList.remove('show');
  addNewListBtn.classList.add('hide');
  createListCard.classList.remove('hide');
  createListCard.classList.add('show');
});

removeCreateListCard.addEventListener('click', () => {
  createListCard.classList.remove('show');
  createListCard.classList.add('hide');
  addNewListBtn.classList.remove('hide');
  addNewListBtn.classList.add('show');
});

window.controller.showTaskForm = (taskFooterId,newTaskFormId) => {
  document.getElementById(newTaskFormId).classList.remove('hide');
  document.getElementById(newTaskFormId).classList.add('show');
  document.getElementById(taskFooterId).classList.add('hide');
  document.getElementById(taskFooterId).classList.remove('show');
};

window.controller.showTaskFooter = (taskFooterId,newTaskFormId) => {
  document.getElementById(newTaskFormId).classList.remove('show');
  document.getElementById(newTaskFormId).classList.add('hide');
  document.getElementById(taskFooterId).classList.add('show');
  document.getElementById(taskFooterId).classList.remove('hide');
};

window.controller.obtainListTitle = () => {
  let listTitle = window.model.getListTitle();
  return listTitle;
};

window.controller.createNewList = (listTitle, originalTaskContainer, newListContainerId, taskFooterId, newTaskFormId, userNewTaskId) => {
  console.log('prueba en controller ' + listTitle + newListContainerId + taskFooterId + newTaskFormId);
  return window.view.showNewList(listTitle, originalTaskContainer, newListContainerId, taskFooterId, newTaskFormId, userNewTaskId);
};

window.controller.obtainNewTask = (userNewTaskId, originalTaskContainer) => {
  let newTask = window.model.getNewTask(userNewTaskId, originalTaskContainer);
  return newTask;
};

window.controller.createNewTask = (newTask, userNewTaskId, newTaskContainerId, originalTaskContainer) => {
  console.log('prueba en controller 2 ' + newTask + newTaskContainerId);
  return window.view.showNewTask(newTask, userNewTaskId, newTaskContainerId, originalTaskContainer);
};