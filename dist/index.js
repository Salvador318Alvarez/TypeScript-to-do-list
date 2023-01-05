import {v4 as uuidv4 } from 'uuid'

// <type>

const list = document.querySelector<HTMLUListElement>("#list")
const form = document.getElementById("new-task-form")
const input = document.querySelector<HTMLInputElement>("#new-task-title")
const tasks = loadTasks()
tasks.forEach(addListItem)

form?.addEventListener("submit", e => {
  e.preventDefault()

  if (input?.value == "" || input?.value == null) return

  const newTask = {
    id: uuidv4(),
    title: input.value,
    completed: true,
    createdAt: new Date()
  }

  tasks.push(newTask)
  saveTasks()

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
  list?.append(item)  
  
}

function saveTasks() {
  localStorage.setItem("TASKS", JSON.stringify(tasks))
} 

function loadTasks() {
  const taskJSON = localStorage.getItem("TASKS")
  if (taskJSON == null) return []
  return JSON.parse(taskJSON)
} 