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

window.controller.showTaskForm = () => {
  document.getElementById('newTaskForm').classList.remove('hide');
  document.getElementById('newTaskForm').classList.add('show');
  document.getElementById('taskFooter').classList.add('hide');
  document.getElementById('taskFooter').classList.remove('show');
};

window.controller.showTaskFooter = () => {
  document.getElementById('newTaskForm').classList.remove('show');
  document.getElementById('newTaskForm').classList.add('hide');
  document.getElementById('taskFooter').classList.add('show');
  document.getElementById('taskFooter').classList.remove('hide');
};

window.controller.obtainListTitle = () => {
  let listTitle = window.model.getListTitle();
  return listTitle;
};

window.controller.createNewList = (listTitle) => {
  console.log('prueba en controller ' + listTitle);
  return window.view.showNewList(listTitle);
};

window.controller.obtainNewTask = () => {
  let newTask = window.model.getNewTask();
  return newTask;
};

window.controller.createNewTask = (newTask) => {
  console.log('prueba en controller 2 ' + newTask);
  return window.view.showNewTask(newTask);
};