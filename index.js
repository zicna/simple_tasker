// * HTML constants
const notification = document.querySelector('#notifications')
const taskAddNew = document.getElementById('task-add-new')
const taskClearAll = document.getElementById('task-clear-all')
const taskForm = document.getElementById('task-form')
const taskSubmit = document.getElementById('task-submit')
const taskCancel = document.getElementById('task-cancel')

const taskTable = document.getElementById('task-table')
const taskList = document.querySelector('#task-list')

// *form constatns
const taskSubject = document.getElementById('task-subject')
const taskBody = document.getElementById('task-body')
const taskDate = document.getElementById('task-date')

// ********************************************************

const handleBeforeunload = (event) => {
  event.preventDefault()
  localStorage.clear()
  event.returnValue = null
}

window.addEventListener('beforeunload', handleBeforeunload)

const app = new App()
