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
  console.log(e)
  const task = e.target[0].value
  console.log(task)
  //const task = document.getElementById("new-task-description")
}