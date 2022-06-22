'use strict'

class App {
  #tasks = []

  constructor() {
    this._getTasks()
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
    let tasks = Storage.getTasks()
    tasks.unshift(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  // * use note id to find and delete note
  _removeTask(target) {
    const taskID = target.closest('tr').dataset.id
    const tasks = Storage.getTasks()

    // this.#tasks.forEach((task, index) => {
    //   if (task.id === taskID) tasks.splice(index, 1)
    // })

    this.#tasks = tasks.filter(task => task.id !== taskID)
    localStorage.setItem('tasks', JSON.stringify(this.#tasks))
  }

  _clearAllTasks() {
    localStorage.setItem('tasks', JSON.stringify([]))
  }
  // ***********************************************
}
