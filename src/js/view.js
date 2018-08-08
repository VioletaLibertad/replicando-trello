window.view = {};

window.view.showNewList = (listTitle) => {
  //let listTitle = window.model.getListTitle();
  console.log('prueba en view' + listTitle);
  let listContainer = document.getElementById('listContainer');
  listContainer.innerHTML += `
  <div class="card m-1">
    <div class="card-body custom-card p-1">

      <!-- Título de lista -->
      <h5 class="card-title m-0 p-2">${listTitle}</h5>

      <!-- Container para tareas -->
      <div class="card-task m-1 p-1 hide taskBox" id="tasksContainer"></div>
      
      <!-- Footer de lista -->
      <div class="btn btn-custom custom-card-footer show" id="taskFooter" onclick="window.controller.showTaskForm()">
        <a class="text-muted"> + Añada una tarjeta</a>
      </div>

      <!-- Formulario para añadir tareas -->
      <div class="hide" id="newTaskForm">
        <textarea class="card-task" name="newTask" id="userNewTask" cols="30" rows="4" placeholder="Introduzca un título para esta tarjeta..."></textarea>
        <a href="#" class="btn btn-mainBoard text-center mt-1" onclick="window.controller.obtainNewTask()">Añadir tarea</a>
        <a class="btn small-main-btn" onclick="window.controller.showTaskFooter()">
          <i class="fas fa-times text-muted"></i>
        </a>
      </div>

    </div>
  </div>
  `;
  newListTitle.value = '';
};

window.view.showNewTask = (newTask) => {
  console.log('prueba en view 2 ' + newTask);
  let newTasksContainer = document.getElementById('tasksContainer');
  newTasksContainer.innerHTML += `${newTask}`;
  newTasksContainer.classList.remove('hide');
  newTasksContainer.classList.add('show');
  userNewTask.value = '';
};