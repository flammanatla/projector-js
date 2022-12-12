const form = document.querySelector('.create-task-form');
const taskList = document.querySelector('.collection');
const filter = document.querySelector('.filter-input');
const clearBtn = document.querySelector('.clear-tasks');
const taskInput = document.querySelector('.task-input');

document.addEventListener('DOMContentLoaded', loadTasks);
form.addEventListener('submit', createTask);
taskList.addEventListener('click', removeTask);
clearBtn.addEventListener('click', removeAllTasks);
filter.addEventListener('keyup', filterItem);

let taskId = Number(localStorage.getItem('taskId')) || 0;
console.log(`current task id = `, taskId);

function loadTasks() {
  let tasks;

  if (localStorage.getItem('tasks') !== null) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  } else {
    tasks = [];
  }

  tasks.forEach(function (task) {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(task.summary));
    li.dataset.taskId = task.id;

    const deleteElement = document.createElement('span');
    deleteElement.className = 'delete-item';
    deleteElement.innerHTML = '<i class="fa fa-remove"><i>';
    li.appendChild(deleteElement);

    taskList.appendChild(li);
  });
}

function createTask(event) {
  if (taskInput.value.trim() === '') {
    event.preventDefault();
    return null;
  }

  const li = document.createElement('li');
  li.className = 'collection-item';
  li.dataset.taskId = taskId;
  li.appendChild(document.createTextNode(taskInput.value));
  taskList.appendChild(li);
  storeTaskInLocalStorage(taskInput.value, taskId);

  const deleteElement = document.createElement('span');
  deleteElement.className = 'delete-item';
  deleteElement.innerHTML = '<i class="fa fa-remove"><i>';
  li.appendChild(deleteElement);

  //clear the input field
  taskInput.value = '';
  // block default behaviour of submit button (append text to the URL)
  event.preventDefault();

  taskId++;
  localStorage.setItem('taskId', taskId);
}

function storeTaskInLocalStorage(summary, id) {
  let tasks;
  if (localStorage.getItem('tasks') !== null) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  } else {
    tasks = [];
  }

  tasks.push({ summary, id });
  console.log(tasks);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(event) {
  const iconContainer = event.target.parentElement;
  const collectionItem = iconContainer.parentElement;
  const itemId = Number(collectionItem.dataset.taskId);
  //console.log(iconContainer);
  //console.log(iconContainer.parentElement);

  console.log(`item id of deleted item is `, itemId);

  if (iconContainer.classList.contains('delete-item')) {
    //пересвідчимось чи юзер справді хоче видалити таск
    if (confirm('Do you really want to delete this task?')) {
      collectionItem.remove();
      deleteTaskInLocalStorage(collectionItem, itemId);
    }
  }
}

function deleteTaskInLocalStorage(taskItemAsHTMLElement, id) {
  let tasks;

  if (localStorage.getItem('tasks') !== null) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  } else {
    tasks = [];
  }

  tasks.forEach(function (task, index) {
    console.log('task name:', task.summary);
    console.log('taskId:', task.id);
    console.log('id coming from outside', id);

    if (taskItemAsHTMLElement.textContent === task.summary && id === task.id) {
      console.log('we are here');
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeAllTasks() {
  if (confirm('Do you really want to delete this task?')) {
    //delete all content inside the list
    taskList.innerHTML = '';
    removeAllTasksFromLocalStorage();
  }
}

function removeAllTasksFromLocalStorage() {
  localStorage.clear();
}

function filterItem(event) {
  const filterQuery = event.target.value.toLowerCase();
  //find all task elements on the page
  document
    .querySelectorAll('.collection-item')
    .forEach(function (taskItemAsHTMLElement) {
      const taskText =
        taskItemAsHTMLElement.firstChild.textContent.toLowerCase();
      if (taskText.includes(filterQuery)) {
        taskItemAsHTMLElement.style.display = 'block';
      } else {
        taskItemAsHTMLElement.style.display = 'none';
      }
    });
}
