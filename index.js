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

// const toggleShowClearBtn = () => {
//   if (localStorage.getItem('tasks')?.length)
//     taskClearAll.classList.add('no-show')
//   else taskClearAll.classList.remove('no-show')
// }

// * *****toggle show / no-show ****************
// const toggleShow = () => {
//   taskForm.classList.toggle('no-show')
//   taskAddNew.classList.toggle('no-show')
//   taskClearAll.classList.toggle('no-show')
// }
// * note notification container handler(ADDING, REMOVING, CLEARING)
const taskNotification = (action, message) => {
  notification.classList.toggle('no-show')
  notification.classList.toggle(`${action}`)
  notification.textContent = `${message}`

  setTimeout(() => {
    notification.classList.toggle('no-show')
    notification.classList.toggle(`${action}`)
    notification.textContent = ``
  }, 2000)
}
// ******************* handle functions *************************************
// const handleSubmit = (event) => {
//   event.preventDefault()
//   toggleShow()

//   const taskS = taskSubject.value
//   const taskB = taskBody.value
//   const taskD = taskDate.value

//   console.log(formatDate(taskD));

//   if (taskS === '' || taskB === '' || taskD === '') {
//     taskNotification(
//       'worning',
//       'all fields must be filled'
//     )
//   } else if (dateInPast(taskD)) {
//     taskNotification(
//       'worning',
//       'can NOT choose date in past. Please try again.'
//     )
//   } else {
//     const task = new Task(taskS, taskB, taskD)
//     Storage.addTask(task)
//     UI.addTaskToTable(task)
//     taskNotification('success', 'new task has been created')
//   }
//   event.target.reset()
// }

// const handleCancel = (event) => {
//   event.preventDefault()
//   event.target.parentElement.reset()
//   toggleShow()
// }

const handleRemove = (event) => {
  event.preventDefault()
  // !Guard clause
  if (!event.target.classList.contains('btn-danger')) return

  taskNotification('worning', 'task has been DELETED')
  Storage.removeTask(event.target)
  UI.removeTask(event.target)
}

const handleRemoveAll = () => {
  UI.clearAllTasks()
  Storage.clearAllTasks()
  taskNotification('danger', 'ALL tasks DELETED')
}

const handleBeforeunload = (event) => {
  event.preventDefault()
  localStorage.clear()
  event.returnValue = null
}

// *****************************************************************
// // * Event Listeners
// taskAddNew.addEventListener('click', toggleShow)
// taskCancel.addEventListener('click', handleCancel)
// taskForm.addEventListener('submit', handleSubmit)
// taskList.addEventListener('click', handleRemove)
// taskClearAll.addEventListener('click', handleRemoveAll)

window.addEventListener('beforeunload', handleBeforeunload)

const app = new App();
console.log(app);

// *******************
// * dammy data
const task1 = new Task("taskOne", "this is body of taskOne", "2022-06-25" )
const task2 = new Task("taskTwo", "this is body of taskTwo", "2022-06-30" )
// *******************


