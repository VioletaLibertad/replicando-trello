window.model = {};
let counterTitle = 0;
let counterList = 0;
let originalTaskContainer;
let newListContainerId;
let newTaskContainerId;
let taskFooterId;
let newTaskFormId;
let userNewTaskId;

window.model.getListTitle = () => {
  counterTitle++;
  let listTitle = document.getElementById('newListTitle').value;
  originalTaskContainer = 'originalTaskContainer' + counterTitle;
  newListContainerId = 'newListContainer' + counterTitle;
  taskFooterId = 'taskFooterId' + counterTitle;
  newTaskFormId = 'newTaskFormId' + counterTitle;
  userNewTaskId = 'userNewTaskId' + counterTitle;
  console.log(listTitle, newListContainerId);
  return window.controller.createNewList(listTitle, originalTaskContainer, newListContainerId, taskFooterId, newTaskFormId, userNewTaskId);
};

window.model.getNewTask = () => {
  counterList++;
  let newTask = document.getElementById(`${userNewTaskId}`).value;
  newTaskContainerId = 'newTaskContainer' + counterList;
  console.log(newTask, newTaskContainerId);
  return window.controller.createNewTask(newTask, newTaskContainerId);
};