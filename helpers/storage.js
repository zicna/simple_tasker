class Storage {
  // * all methods will be written as class methods (with static keyword)
  // * so we wouldn't have to create instance of Storage class
  // * here we would need methods:
  // !1. getNotes()
  // !2. addNote()

  // * we 'extract' notes from local storage
  // * everything in local storage is saved in key-value pair as strings
  // *that is why we need to convert object into JSON strings before we save them into localeStorage
  // ! JSON.stringify()
  // * when we retrive them from local storage we need to convert them from JSON strings into objects
  // !JSON.parse()
  static getNotes() {
    let notes;
    if (localStorage.getItem("notes") === null) {
      notes = [];
    } else {
      notes = JSON.parse(localStorage.getItem("notes"));
    }
    return notes;
  }

  static addNote(note){
    let notes = Storage.getNotes().unshift(note);
    localStorage.setItem('notes', JSON.stringify(notes))
  }

// * we will be deleting notes by note.body
  static removeNote(e){
      const noteBody = e.parentElement.parentElement.children[1].innerText

      const notes = Storage.getNotes()

      notes.forEach((note, index) => {
          if(note.body === noteBody){
            notes.splice(index, 1)
          }
      })
      localStorage.setItem('notes', JSON.stringify(notes))
  }
}
