document.addEventListener("DOMContentLoaded", () => {
  // your code here
  addEventListeners()
});
function addEventListeners() {
  const form = document.getElementById("create-task-form")
  form.addEventListener('submit', handleFormSubmit)
}

function handleFormSubmit(e) {
  e.preventDefault()
  const task = e.target[0].value
  //const task = e.target["new-task-description"].value
  displayTask(task)
}

function displayTask (task){

  const taskUl = document.getElementById("tasks")
  const taskLi = document.createElement('li')
  const removeTask = document.createElement('button')

  removeTask.textContent = "X"
  removeTask.addEventListener("click", deletefnc )
  taskLi.textContent = task + " "
  taskLi.appendChild(removeTask)
  taskUl.appendChild(taskLi)
}

function deletefnc (e){
  e.target.parentNode.remove()
}