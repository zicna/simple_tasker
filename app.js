'use strict'

class App {
  #tasks = []

  constructor() {
    this._getTasks()

    // * Event Listeners
    taskAddNew.addEventListener('click', this._toggleShow)
    taskCancel.addEventListener('click', this._handleCancel.bind(this))
    taskForm.addEventListener('submit', this._handleSubmit.bind(this))
    taskList.addEventListener('click', this._handleRemove.bind(this))
    taskClearAll.addEventListener('click', this._handleRemoveAll.bind(this))
  }

  _toggleShow() {
    taskForm.classList.toggle('no-show')
    taskAddNew.classList.toggle('no-show')
    taskClearAll.classList.toggle('no-show')
  }

  _toggleShowClearBtn() {
    if (localStorage.getItem('tasks')?.length)
      taskClearAll.classList.add('no-show')
    else taskClearAll.classList.remove('no-show')
  }

  _taskNotification(action, message) {
    notification.classList.toggle('no-show')
    notification.classList.toggle(`${action}`)
    notification.textContent = `${message}`

    setTimeout(() => {
      notification.classList.toggle('no-show')
      notification.classList.toggle(`${action}`)
      notification.textContent = ``
    }, 2000)
  }

  _handleSubmit(event) {
    event.preventDefault()
    this._toggleShow()

    const taskS = taskSubject.value
    const taskB = taskBody.value
    const taskD = taskDate.value

    if (taskS === '' || taskB === '' || taskD === '') {
      this._taskNotification('worning', 'all fields must be filled')
      return
    }
    if (dateInPast(taskD)) {
      this._taskNotification(
        'worning',
        'can NOT choose date in past. Please try again.'
      )
      return
    }
    const task = new Task(taskS, taskB, taskD)
    this._addTask(task)
    UI.addTaskToTable(task)
    this._taskNotification('success', 'new task has been created')
    event.target.reset()
  }

  _handleCancel(event) {
    event.preventDefault()
    event.target.parentElement.reset()
    this._toggleShow()
  }

  _handleRemove(event) {
    event.preventDefault()
    // !Guard clause
    if (!event.target.classList.contains('btn-danger')) return

    this._taskNotification('worning', 'task has been DELETED')
    this._removeTask(event.target)
    UI.removeTask(event.target)
  }

  _handleRemoveAll() {
    UI.clearAllTasks()
    this._clearAllTasks()
    this._taskNotification('danger', 'ALL tasks DELETED')
  }

  // ***********************************************
  //* Handling localStorage API

  _getTasks() {
    const data = JSON.parse(localStorage.getItem('tasks'))
    // ! Guard clause
    if (!data) return
    this.#tasks = data
  }

  _addTask(task) {
    this._getTasks()
    this.#tasks.unshift(task)
    localStorage.setItem('tasks', JSON.stringify(this.#tasks))
  }

  _removeTask(target) {
    const taskID = target.closest('tr').dataset.id
    const tasks = Storage.getTasks()

    this.#tasks = tasks.filter((task) => task.id !== taskID)
    localStorage.setItem('tasks', JSON.stringify(this.#tasks))
  }

  _clearAllTasks() {
    localStorage.setItem('tasks', JSON.stringify([]))
  }
  // ***********************************************
}
