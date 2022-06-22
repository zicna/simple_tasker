'use strict'

class App {
  #tasks = []

  constructor() {
    this._getTasks()
    this._UIdisplayTasks()
    this._toggleShowClearBtn()

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
  }
  // ! not sure about this if-else
  _toggleShowClearBtn() {
    if (this.#tasks.length == 0) taskClearAll.classList.add('no-show')
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

  // ***********************************************
  //* Handling Storage
  _getTasks() {
    const data = JSON.parse(localStorage.getItem('tasks'))
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
    this._getTasks()

    this.#tasks = this.#tasks.filter((task) => task.id !== taskID)
    localStorage.setItem('tasks', JSON.stringify(this.#tasks))
  }

  _clearAllTasks() {
    localStorage.setItem('tasks', JSON.stringify([]))
    this._getTasks()
  }

  // ***********************************************
  // * UI methods
  _UIdisplayTasks() {
    this.#tasks.forEach((task) => this._UIaddTaskToTable(task))
  }

  _UIaddTaskToTable(task) {
    const tableRow = document.createElement('tr')
    tableRow.setAttribute('data-id', task.id)
    tableRow.innerHTML = `
                <th>${task.subject}</th>
                <th>${task.body}</th>
                <th>${formatDate(task.deadline)}</th>
                <th>${formatDate(task.timestamp)}</th>
                <th>${daysLeft(task.deadline, task.timestamp)}</th>
                <th><a href="#" class="btn btn-danger">X</a></th>
                <th><a href="#" class="btn btn-success">DONE</a></th>
            `
    taskList.prepend(tableRow)
  }

  _UIremoveTask(target) {
    target.closest('tr').remove()
  }

  _UIclearAllTasks() {
    taskList.innerHTML = ''
  }

  // ***********************************************
  // * handle functions
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
    this._UIaddTaskToTable(task)
    this._taskNotification('success', 'new task has been created')
    this._toggleShowClearBtn()
    event.target.reset()
  }

  _handleCancel(event) {
    event.preventDefault()
    event.target.parentElement.reset()
    this._toggleShow()
    this._toggleShowClearBtn()
  }

  _handleRemove(event) {
    event.preventDefault()
    //* Guard clause in case we click anywhere outside delete button
    if (!event.target.classList.contains('btn-danger')) return

    this._taskNotification('worning', 'task has been DELETED')
    this._removeTask(event.target)
    this._UIremoveTask(event.target)
    this._toggleShowClearBtn()
  }

  _handleRemoveAll() {
    this._UIclearAllTasks()
    this._clearAllTasks()
    this._taskNotification('danger', 'ALL tasks DELETED')
    this._toggleShowClearBtn()
  }
}
