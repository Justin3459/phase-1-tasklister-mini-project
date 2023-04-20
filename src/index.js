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

  const priorityLvl = parseInt(e.target.priority.value)

  displayTask(task, priorityLvl)
}

function displayTask (task, priorityLvl){

  const taskUl = document.getElementById("tasks")
  const taskLi = document.createElement('li')
  const removeTask = document.createElement('button')

  removeTask.textContent = "X"
  removeTask.addEventListener("click", deletefnc )
  taskLi.textContent = task + " "
  taskLi.style.color = priorityColor(priorityLvl)
  taskLi.appendChild(removeTask)
  taskUl.appendChild(taskLi)
}

function deletefnc (e){
  e.target.parentNode.remove()
}

function priorityColor(priorityLvl){
  if (priorityLvl === 1)
    return "red"
  else if (priorityLvl === 2)
    return "yellow"
  else
    return "green"
}
