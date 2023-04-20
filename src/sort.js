document.addEventListener("DOMContentLoaded", () => {
  // your code here
  addEventListeners()
});

let taskArr = []

function addEventListeners() {
  const form = document.getElementById("create-task-form")
  form.addEventListener('submit', handleFormSubmit)
  document.getElementById("sort-tasks").addEventListener("change", sortTasks)

}

function handleFormSubmit(e) {
  e.preventDefault()
  const task = e.target[0].value
  //const task = e.target["new-task-description"].value

  const priorityLvl = parseInt(e.target.priority.value)

  const taskObj = { task, priorityLvl}
  taskArr.push(taskObj)
  sortTasks()
  displayTask()
}

function displayTask (){
  
  const taskUl = document.getElementById("tasks")
  taskUl.innerHTML = ""

  taskArr.forEach((task) => {
    const taskLi = document.createElement('li')
    const removeTask = document.createElement('button')

    removeTask.textContent = "X"
    removeTask.addEventListener("click", (e) => deletefnc(e,task) )

    taskLi.textContent = task.task + " "
    taskLi.style.color = priorityColor(task.priorityLvl)
    taskLi.appendChild(removeTask)
    taskUl.appendChild(taskLi)


})


}

function deletefnc (e, task){
  taskArr = taskArr.filter((element) => element.task !== task.task )
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

function sortTasks(){
  const sortTasksSelect = document.getElementById("sort-tasks")
  if (sortTasksSelect.value === "h-l"){
    taskArr.sort((a,b)=> a.priorityLvl - b.priorityLvl)
  }
  else {
    taskArr.sort((a,b) => b.priorityLvl - a.priorityLvl)
  }
  displayTask()
}

