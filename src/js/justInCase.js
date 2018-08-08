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

createListBtn.addEventListener('click', () => {
  listTitle = document.getElementById('newListTitle').value;
  listContainer.innerHTML += `
  <div class="card m-1">
    <div class="card-body custom-card p-1">

      <!-- Título de lista -->
      <h5 class="card-title m-0 p-2">${listTitle}</h5>

      <!-- Container para tareas -->
      <div class="card-task m-1 p-1 hide" id="tasksContainer">${newTaskContent}</div>
      <!-- Footer de lista -->

      <div class="btn btn-custom custom-card-footer show" id="addTaskFooter">
        <a class="text-muted" onclick="showAddNewTask()"> + Añada una tarjeta</a>
      </div>

      <!-- Formulario para añadir tareas -->
      <div class="hide" id="newTaskForm">
        <textarea class="card-task" name="newTask" id="newTask" cols="30" rows="4" placeholder="Introduzca un título para esta tarjeta..."></textarea>
        <a href="#" class="btn btn-mainBoard text-center mt-1" onclick="addNewTask()">Añadir tarea</a>
        <a class="btn small-main-btn">
          <i class="fas fa-times text-muted"></i>
        </a>
      </div>

    </div>
  </div>
  `;
  newListTitle.value = '';
});

function showAddNewTask() {
  document.getElementById('newTaskForm').classList.remove('hide');
  document.getElementById('newTaskForm').classList.add('show');
  document.getElementById('addTaskFooter').classList.add('hide');
  document.getElementById('addTaskFooter').classList.remove('show');
}
