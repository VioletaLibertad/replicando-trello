window.model = {};

window.model.getListTitle = () => {
  let listTitle = document.getElementById('newListTitle').value;
  console.log(listTitle);
  return window.controller.createNewList(listTitle);
};

window.model.getNewTask = () => {
  let newTask = document.querySelector('textarea').value;
  console.log(newTask);
  return window.controller.createNewTask(newTask);
};