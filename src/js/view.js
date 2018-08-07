/*
addNewListBtn.addEventListener('click', () => {
  listContainer.innerHTML += `
  <div class="card hide" id="createListCard">
    <div class="card-body custom-card p-1">
      <input type="text" class="input-group input-mainBoard" placeholder="Introduzca el título de la lista..." id="newListTitle">
      <a href="#" class="btn btn-mainBoard text-center mt-1" id="createListBtn">Añadir lista</a>
      <a class="btn small-main-btn" id="removeCreateListCard">
        <i class="fas fa-times text-muted"></i>
      </a>
    </div>
  </div>
  `;
});*/

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
  let listTitle = document.getElementById('newListTitle').value;
  listContainer.innerHTML += `
  <div class="card">
    <div class="card-body custom-card p-1">
     <h5 class="card-title m-0 p-2">${listTitle}</h5>
     <div class="btn btn-custom custom-card-footer" id="addTaskSection">
      <a class="text-muted" onclick="showAddNewTask()"> + Añada una tarjeta</a>
     </div>
     <div class="hide" id="newTaskSection">
       <textarea class="card-task" name="newTask" id="newTask" cols="30" rows="2" placeholder="Introduzca un título para esta tarea..."></textarea>
       <a href="#" class="btn btn-mainBoard text-center mt-1" id="addNewTask">Añadir tarea</a>
       <a class="btn small-main-btn" id=""><i class="fas fa-times text-muted"></i></a>
     </div>
    </div>
  </div>`;
  newListTitle.value = '';
});

function showAddNewTask() {
  document.getElementById('newTaskSection').classList.remove('hide');
  document.getElementById('newTaskSection').classList.add('show');
  document.getElementById('addTaskSection').classList.add('hide');
}


// <div class="card-task m-1 p-1" id="tasksContainer"></div>
