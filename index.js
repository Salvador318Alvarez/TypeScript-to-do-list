
// <type>

const list = document.querySelector("#list")
const form = document.getElementById("new-task-form")
const input = document.querySelector("#new-task-title")
const tasks = [];
tasks.forEach(addListItem)

form.addEventListener("submit", e => {
  e.preventDefault()

  if (input.value == "" || input?.value == null) return

  const newTask = {
    title: input.value,
    completed: true,
    createdAt: new Date()
  }

  tasks.push(newTask)
  addListItem(newTask)
  
  input.value = ''
})

function addListItem(task) {
  const item = document.createElement('li')
  const label = document.createElement("label")
  const checkbox = document.createElement('input')
  checkbox.addEventListener('change', () => {
    task.completed = checkbox.checked
  })
  checkbox.type = "checkbox"
  checkbox.checked = task.completed
  label.append(checkbox, task.title)
  item.append(label)
  list.append(item)  
}

