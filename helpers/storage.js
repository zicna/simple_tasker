class Storage {
  // * we 'extract' notes from local storage
  // * everything in local storage is saved in key-value pair as strings
  // *that is why we need to convert object into JSON strings before we save them into localeStorage
  // ! JSON.stringify()
  // * when we retrive them from local storage we need to convert them from JSON strings into objects
  // !JSON.parse()
  static getNotes() {
    let notes;
// ! this condition will return true:
// * 1. local storage does not have property 'notes'(with optional chaining) => undefined; !undefined => true
// * 2. local storage has property 'notes' and it is not not equal to 0 (is equal to 0)
    if (!(localStorage.getItem("notes")?.length != 0)) {
      notes = [];
    } else {
      notes = JSON.parse(localStorage.getItem("notes"));
    }
    return notes;
  }

  static addNote(note){
    let notes = Storage.getNotes();
    // ! problem was return value of unshift() method
    // ! it will change undeline array but it returns length of a new array
    notes.unshift(note);
    localStorage.setItem('notes', JSON.stringify(notes))
  }

// * use note id to find and delete note
  static removeNote(target){
      const noteID = target.closest("tr").dataset.id;

      const notes = Storage.getNotes();

      notes.forEach((note, index) => {
          if(note.id === noteID) notes.splice(index, 1);
      })
      localStorage.setItem('notes', JSON.stringify(notes))
  }

  static clearAllNotes(){
    localStorage.notes = [];
  }
}
