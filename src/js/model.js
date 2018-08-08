window.model = {};
let counterTitle = 0;
let counterList = 0;
let newListContainerId;
let newTaskContainerId;

window.model.getListTitle = () => {
  counterTitle++;
  let listTitle = document.getElementById('newListTitle').value;
  newListContainerId = 'newListContainer' + counterTitle;
  console.log(listTitle, newListContainerId);
  return window.controller.createNewList(listTitle, newListContainerId);
};

window.model.getNewTask = () => {
  counterList++;
  let newTask = document.querySelector('textarea').value;
  newTaskContainerId = 'newTaskContainer' + counterList;
  console.log(newTask, newTaskContainerId);
  return window.controller.createNewTask(newTask, newTaskContainerId);
};