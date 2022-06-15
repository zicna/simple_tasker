class Storage {
  // * everything in local storage is saved in key-value pair as strings
  // *that is why we need to convert object into JSON strings before we save them into localeStorage
  // ! JSON.stringify()
  // * when we retrive them from local storage we need to convert them from JSON strings into objects
  // !JSON.parse()
  // ! this way we are also safe from shallow/deep copy problems
  
  static getNotes(){
    return JSON.parse(localStorage.getItem("notes")) || [];
  }

  static addNote(note) {
    let notes = Storage.getNotes()
    notes.unshift(note)
    localStorage.setItem('notes', JSON.stringify(notes))
  }

  // * use note id to find and delete note
  static removeNote(target) {
    const noteID = target.closest('tr').dataset.id
    const notes = Storage.getNotes()

    notes.forEach((note, index) => {
      if (note.id === noteID) notes.splice(index, 1)
    })
    localStorage.setItem('notes', JSON.stringify(notes))
  }

  static clearAllNotes() {
    localStorage.setItem("notes", JSON.stringify([]));
  }
}
