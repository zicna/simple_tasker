class UI {
  static displayNotes() {
    Storage.getNotes().forEach((note) => UI.addNoteToTable(note))
  }

  static addNoteToTable(note) {
    const tableRow = document.createElement('tr')
    tableRow.setAttribute('data-id', note.id)
    tableRow.innerHTML = `
                <th>${note.subject}</th>
                <th>${note.body}</th>
                <th>${formatDate(note.deadline)}</th>
                <th>${formatDate(note.timestamp)}</th>
                <th><a href="#" class="btn btn-danger">X</a></th>
                <th><a href="#" class="btn btn-success">DONE</a></th>
            `
    noteList.prepend(tableRow)
  }

  static removeNote(target) {
    target.closest('tr').remove()
  }

  static clearAllNotes() {
    noteList.innerHTML = ''
  }
}
