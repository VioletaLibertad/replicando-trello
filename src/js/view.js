window.view = {};

window.view.showNewList = (listTitle, originalTaskContainer, newListContainerId, taskFooterId, newTaskFormId, userNewTaskId) => {
  console.log('prueba en view' + listTitle + newListContainerId);
  let listContainer = document.getElementById('listContainer');
  listContainer.innerHTML += `
  <div class="col-auto d-flex pl-1 pr-0 " id="${newListContainerId}">
    <div class="card">
      <div class="card-body custom-card p-1">

        <!-- Título de lista -->
        <h5 class="card-title m-0 p-2">${listTitle}</h5>

        <!-- Container para tareas -->
        <div id="${originalTaskContainer}"></div>
        
        <!-- Footer de lista -->
        <div class="btn btn-custom custom-card-footer show" id="${taskFooterId}">
          <a class="text-muted" onclick="window.controller.showTaskForm('${taskFooterId}', '${newTaskFormId}')"> + Añada una tarjeta</a>
        </div>

        <!-- Formulario para añadir tareas -->
        <div class="hide" id="${newTaskFormId}">
          <textarea class="card-task m-1 p-1" name="newTask" id="${userNewTaskId}" cols="30" rows="4" placeholder="Introduzca un título para esta tarjeta..."></textarea>
          <a href="#" class="btn btn-mainBoard text-center mt-1" onclick="window.controller.obtainNewTask('${userNewTaskId}', '${originalTaskContainer}')">Añadir tarea</a>
          <a class="btn small-main-btn" onclick="window.controller.showTaskFooter('${taskFooterId}', '${newTaskFormId}')">
            <i class="fas fa-times text-muted"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
  `;
  newListTitle.value = '';
};

window.view.showNewTask = (newTask, userNewTaskId, newTaskContainerId, originalTaskContainer) => {
  console.log('prueba en view 2 ' + newTask + newTaskContainerId);
  let newTasksContainer = document.getElementById(originalTaskContainer);
  newTasksContainer.innerHTML += `<div class="card-task m-1 p-1 show" id="${newTaskContainerId}">${newTask}</div>
  `;
  userNewTaskId.value = '';
};
