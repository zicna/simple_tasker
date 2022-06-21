class Storage {
  // * everything in local storage is saved in key-value pair as strings
  // *that is why we need to convert object into JSON strings before we save them into localeStorage
  // ! JSON.stringify()
  // * when we retrive them from local storage we need to convert them from JSON strings into objects
  // !JSON.parse()
  // ! this way we are also safe from shallow/deep copy problems
  
  static getTasks(){
    return JSON.parse(localStorage.getItem("tasks")) || [];
  }

  static addTask(task) {
    let tasks = Storage.getTasks()
    tasks.unshift(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  // * use note id to find and delete note
  static removeTask(target) {
    const taskID = target.closest('tr').dataset.id
    const tasks = Storage.getTasks()

    tasks.forEach((task, index) => {
      if (task.id === taskID) tasks.splice(index, 1)
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  static clearAllTasks() {
    localStorage.setItem("tasks", JSON.stringify([]));
  }
}
