// * HTML constants
const notification = document.querySelector('#notifications')
const noteAddNew = document.getElementById('note-add-new')
const noteClearAll = document.getElementById('note-clear-all')
const noteForm = document.getElementById('note-form')
const noteSubmit = document.getElementById('note-submit')
const noteCancel = document.getElementById('note-cancel')

const noteTable = document.getElementById('note-table')
const noteList = document.querySelector('#note-list')

// *form constatns
const noteSubject = document.getElementById('note-subject')
const noteBody = document.getElementById('note-body')
const noteDate = document.getElementById('note-date')

const toggleShowClearBtn = () => {
  if (localStorage.getItem('notes')?.length)
    noteClearAll.classList.add('no-show')
  else noteClearAll.classList.remove('no-show')
}

// * *****toggle show / no-show ****************
const toggleShow = () => {
  noteForm.classList.toggle('no-show')
  noteAddNew.classList.toggle('no-show')
  noteClearAll.classList.toggle('no-show')
}
// * note notification container handler(ADDING, REMOVING, CLEARING)
const noteNotification = (action, message) => {
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
const handleSubmit = (event) => {
  event.preventDefault()
  toggleShow()

  const noteS = noteSubject.value
  const noteB = noteBody.value
  const noteD = noteDate.value

  console.log(formatDate(noteD));

  if (noteS === '' || noteB === '' || noteD === '') {
    noteNotification(
      'worning',
      'all fields must be filled'
    )
  } else if (dateInPast(noteD)) {
    noteNotification(
      'worning',
      'can NOT choose date in past. Please try again.'
    )
  } else {
    const note = new Note(noteS, noteB, noteD)
    Storage.addNote(note)
    UI.addNoteToTable(note)
    noteNotification('success', 'new note has been created')
  }
  event.target.reset()
}

const handleCancel = (event) => {
  event.preventDefault()
  event.target.parentElement.reset()
  toggleShow()
}

const handleRemove = (event) => {
  event.preventDefault()
  // !Guard clause
  if (!event.target.classList.contains('btn-danger')) return

  noteNotification('worning', 'note has been DELETED')
  Storage.removeNote(event.target)
  UI.removeNote(event.target)
}

const handleRemoveAll = () => {
  UI.clearAllNotes()
  Storage.clearAllNotes()
  noteNotification('danger', 'ALL NOTES DELETED')
}

const handleBeforeunload = (event) => {
  event.preventDefault()
  localStorage.clear()
  event.returnValue = null
}

// *****************************************************************
// * Event Listeners
noteAddNew.addEventListener('click', toggleShow)
noteCancel.addEventListener('click', handleCancel)
noteForm.addEventListener('submit', handleSubmit)
noteList.addEventListener('click', handleRemove)
noteClearAll.addEventListener('click', handleRemoveAll)

window.addEventListener('beforeunload', handleBeforeunload)
